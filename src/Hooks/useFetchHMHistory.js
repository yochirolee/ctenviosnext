import { useQuery } from "@tanstack/react-query";

const HM_API_URL = "http://72.60.114.241/api/historial/envio";

/**
 * Fetches HM history for a given HBL
 * Uses native fetch to avoid global axios headers (api-key) that cause CORS issues
 * @param {string} hbl - The HBL code to fetch history for
 * @returns {Promise<object>} - The HM history response
 */
const fetchHMHistory = async (hbl) => {
	if (!hbl || hbl.trim() === "") {
		return { historial: [] };
	}

	const response = await fetch(`${HM_API_URL}/${hbl.trim()}`);
	
	if (!response.ok) {
		return { historial: [] };
	}
	
	return response.json();
};

/**
 * React Query hook to fetch HM history for a parcel
 * @param {string} hbl - The HBL code
 * @returns {object} - React Query result with data, isLoading, error
 */
export const useFetchHMHistory = (hbl) => {
	return useQuery({
		queryKey: ["fetchHMHistory", hbl],
		queryFn: () => fetchHMHistory(hbl),
		enabled: Boolean(hbl && hbl.trim() !== ""),
		staleTime: 1000 * 60 * 5, // 5 minutes
		retry: 1,
	});
};
