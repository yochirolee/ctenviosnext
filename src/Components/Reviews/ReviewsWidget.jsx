// src/Components/Reviews/ReviewsWidget.jsx
'use client'
import { useEffect, useRef } from 'react'
import Script from 'next/script'

const WIDGET_URL = 'https://cdn.trustindex.io/loader.js?f96f64553f08894d5836d420e58'

export default function ReviewsWidget() {
  const hostRef = useRef(null)

  useEffect(() => {
    // Creamos el <div src="..."> tal como indica Trustindex (GTM guide)
    // para que el widget se renderice EN ESE LUGAR.
    if (!hostRef.current) return
    // Limpieza por si el componente se monta/desmonta
    hostRef.current.innerHTML = ''
    const placeholder = document.createElement('div')
    placeholder.setAttribute('src', WIDGET_URL) // atributo no estándar, Trustindex lo usa
    hostRef.current.appendChild(placeholder)
  }, [])

  return (
    <>
      {/* Cargamos el script base una sola vez después de que la página está interactiva */}
      <Script id="trustindex-base" src="https://cdn.trustindex.io/loader.js" strategy="afterInteractive" />
      <section className="py-16 sm:py-20 lg:py-24 mx-4">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-base font-semibold leading-7 text-sky-600">
            Opiniones de nuestros clientes
          </h2>
          <p className="mt-2 text-2xl font-bold tracking-tight text-gray-900 sm:text-3xl">
            Lo que dicen sobre CTEnvíos
          </p>

          {/* Aquí se renderiza el widget, no al final del body */}
          <div ref={hostRef} className="mt-8" />
        </div>
      </section>
    </>
  )
}
