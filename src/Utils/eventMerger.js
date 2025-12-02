// HM Status mapping for event types
const HM_STATUS_MAP = {
	entradarecibida: {
		code: "AT_WAREHOUSE",
		name: "Entrada en almacén",
	},
	transferenciaalmacen: {
		code: "WAREHOUSE_TRANSFER",
		name: "Transferencia entre almacenes",
	},
	despachomensajero: {
		code: "OUT_FOR_DELIVERY",
		name: "Despachado a mensajero",
	},
};

/**
 * Extracts location from the detail text
 * Checks for "almacén X" or "provincia X" patterns
 * @param {string|null} detalle - The detail text
 * @returns {string|null} - The extracted location or null
 */
const extractLocationFromDetalle = (detalle) => {
	if (!detalle) return null;

	// Try to extract warehouse location
	const warehouseRegex = /almac[eé]n\s+([^\.]+)/i;
	const warehouseMatch = detalle.match(warehouseRegex);
	if (warehouseMatch && warehouseMatch[1]) {
		return warehouseMatch[1].trim();
	}

	// Try to extract province (e.g., "para provincia PINAR DEL RIO")
	const provinceRegex = /provincia\s+([^\.]+)/i;
	const provinceMatch = detalle.match(provinceRegex);
	if (provinceMatch && provinceMatch[1]) {
		return provinceMatch[1].trim();
	}

	return null;
};

/**
 * Maps events from the base API (parcels) to normalized tracking event format
 * @param {object} ev - Event from base API
 * @returns {object} - Normalized tracking event
 */
const mapNewEventToTrackingEvent = (ev) => {
	const ts = ev.updatedAt
		? new Date(ev.updatedAt).toISOString()
		: new Date().toISOString();

	return {
		timestamp: ts,
		statusCode: `LOCATION_${ev.locationId || "UNKNOWN"}`,
		statusName: ev.location || "Unknown",
		statusDescription: null,
		location: ev.location || null,
		updateMethod: "SYSTEM",
		userName: null,
		source: "NEW",
	};
};

/**
 * Maps HM history events to normalized tracking event format
 * @param {object} hm - Event from HM history API
 * @returns {object} - Normalized tracking event
 */
const mapHmHistoryToTrackingEvent = (hm) => {
	let statusCfg = HM_STATUS_MAP[hm.tipo] || {
		code: hm.tipo ? hm.tipo.toUpperCase() : "HM_EVENT",
		name: hm.evento || "Evento HM",
	};

	const evento = (hm.evento || "").trim();
	const eventoLower = evento.toLowerCase();
	const detalleLower = (hm.detalle || "").toLowerCase();

	// Detect successful delivery
	const isEntregaExitosaByEvento = eventoLower === "entrega exitosa";
	const isEntregaExitosaByDetalle = detalleLower.includes("entrega confirmada");

	if (isEntregaExitosaByEvento || isEntregaExitosaByDetalle) {
		statusCfg = {
			code: "DELIVERED",
			name: "Entrega exitosa",
		};
	}

	const ts = hm.fecha_objeto || hm.fecha;

	return {
		timestamp: new Date(ts).toISOString(),
		statusCode: statusCfg.code,
		statusName: statusCfg.name,
		statusDescription: hm.detalle || null,
		location: extractLocationFromDetalle(hm.detalle),
		updateMethod: "HM_HISTORY",
		userName: hm.usuario || null,
		source: "HM",
	};
};

/**
 * Checks if an event is a delivery/terminal event
 * @param {object} ev - The event to check
 * @returns {boolean} - True if it's a delivery event
 */
const isDeliveryEvent = (ev) => {
	const code = (ev.statusCode || "").toUpperCase();
	const name = (ev.statusName || "").trim().toLowerCase();

	return (
		code === "DELIVERED" ||
		name === "entrega exitosa" ||
		name === "entregado"
	);
};

/**
 * Merges and normalizes events from both APIs
 * @param {Array} baseEvents - Events from base API (parcels)
 * @param {Array|object} hmHistoryRaw - Raw HM history response
 * @returns {Array} - Merged, sorted, and deduplicated events
 */
export const mergeAndNormalizeEvents = (baseEvents, hmHistoryRaw) => {
	const hmArray = Array.isArray(hmHistoryRaw)
		? hmHistoryRaw
		: hmHistoryRaw?.historial || [];

	const newEvents = (baseEvents || []).map(mapNewEventToTrackingEvent);
	const hmEvents = (hmArray || []).map(mapHmHistoryToTrackingEvent);

	let merged = [...newEvents, ...hmEvents];

	// 1. Sort chronologically
	merged.sort(
		(a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime()
	);

	// 2. Remove duplicates
	const deduped = [];
	const seen = new Set();
	for (const ev of merged) {
		const key = `${ev.timestamp}|${ev.statusCode}|${ev.location || ""}`;
		if (!seen.has(key)) {
			seen.add(key);
			deduped.push(ev);
		}
	}
	merged = deduped;

	// 3. Handle duplicate delivery events - prefer HM History
	const deliveryEvents = merged.filter(isDeliveryEvent);
	if (deliveryEvents.length > 1) {
		// Check if there's a delivery event from HM History
		const hmDelivery = deliveryEvents.find((ev) => ev.source === "HM");
		if (hmDelivery) {
			// Remove all delivery events from NEW source
			merged = merged.filter(
				(ev) => !isDeliveryEvent(ev) || ev.source === "HM"
			);
		}
	}

	// 4. Detect last terminal event ("Entrega exitosa")
	let lastTerminalIndex = -1;
	merged.forEach((ev, idx) => {
		if (isDeliveryEvent(ev)) {
			lastTerminalIndex = idx;
		}
	});

	// 5. If delivery exists, cut everything after it
	if (lastTerminalIndex >= 0) {
		merged = merged.slice(0, lastTerminalIndex + 1);
	}

	return merged;
};

