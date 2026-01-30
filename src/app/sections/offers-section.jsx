"use client"

import { OfferCard } from "../../Components/Offers/offer-card";

import offer1 from "../../../public/offer1.jpeg"
import offer2 from "../../../public/offer2.jpeg"
import offer3 from "../../../public/offer3.jpeg"


const offers = [
    {
        imageUrl: offer3,
        day: "Todos los Martes",
        price: "$1.64",
        originalPrice: "$1.99",
        description: "Electrodomésticos, Piezas de Carro y Muebles",
        minWeight: "15 Libras",
    },
    {
        imageUrl: offer2,
        day: "Todos los Jueves",
        price: "$1.43",
        originalPrice: "$1.99",
        description: "Solo Alimentos, Medicinas y Aseo",
        minWeight: "15 Libras",
    },
    {
        imageUrl: offer1,
        day: "Sábados y Domingos",
        price: "$1.74",
        originalPrice: "$1.99",
        description: "Todos los Sábados y Domingos",
        minWeight: "15 Libras",
    },
]

export function OffersSection() {
    return (
        <section className="py-16 md:py-24 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-700">
                    <span className="inline-block px-4 py-1.5 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
                        Ofertas Especiales
                    </span>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-4 text-balance">
                        Envíos a Cuba
                    </h2>
                    <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
                        Entrega en toda puerta de tu casa. Aprovecha nuestras ofertas especiales cada semana.
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                    {offers.map((offer, index) => (
                        <OfferCard
                            key={offer.day}
                            {...offer}
                            delay={index * 150}
                        />
                    ))}
                </div>

            </div>
        </section>
    )
}
