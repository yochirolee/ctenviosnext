"use client"

import { cn } from "@/lib/utils"
import Image from "next/image"

export function OfferCard({
    imageUrl,
    day,
    price,
    originalPrice,
    description,
    minWeight,
    delay = 0,
}) {
    return (
        <div
            className={cn(
                "group relative overflow-hidden rounded-2xl bg-[#f6ca67] shadow-lg",
                "transition-all duration-500 ease-out",
                "hover:shadow-2xl hover:-translate-y-2",
                "animate-in fade-in slide-in-from-bottom-8 fill-mode-both"
            )}
            style={{
                animationDelay: `${delay}ms`,
                animationDuration: "700ms",
            }}
        >
            {/* Image Container */}
            <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                    src={imageUrl || "/placeholder.svg"}
                    alt={`Oferta ${day}`}
                    className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                {/* Day Badge */}
                <div
                    className={cn(
                        "absolute top-4 left-4 px-4 py-2 rounded-full",
                        "bg-primary text-primary-foreground font-bold text-sm uppercase tracking-wide",
                        "transform -translate-x-full opacity-0",
                        "transition-all duration-500 ease-out",
                        "group-hover:translate-x-0 group-hover:opacity-100"
                    )}
                >
                    {day}
                </div>

                {/* Price Badge - appears on hover */}
                <div
                    className={cn(
                        "absolute bottom-4 right-4",
                        "transform translate-y-full opacity-0",
                        "transition-all duration-500 ease-out delay-100",
                        "group-hover:translate-y-0 group-hover:opacity-100"
                    )}
                >
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl px-4 py-3 text-center shadow-lg">
                        <span className="text-zinc-500 line-through text-sm block">{originalPrice}</span>
                        <span className="text-3xl font-black text-primary">{price}</span>
                        <span className="text-xs text-zinc-500 block">/libra</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="p-5 space-y-3">
                <div className="flex items-center justify-between">
                    <h3 className="font-bold text-lg text-zinc-900">{day}</h3>
                    <div className="flex items-baseline gap-1">
                        <span className="text-zinc-700 line-through text-sm">{originalPrice}</span>
                        <span className="text-2xl font-black text-primary">{price}</span>
                    </div>
                </div>

                <p className="text-zinc-800 text-sm leading-relaxed">{description}</p>

                <div className="flex items-center justify-between pt-2 border-t border-zinc-900/10">
                    <span className="text-xs text-zinc-700 uppercase tracking-wide font-semibold">Mínimo</span>
                    <span className="font-bold text-zinc-900">{minWeight}</span>
                </div>
            </div>

            {/* Animated border on hover */}
            <div className="absolute inset-0 rounded-2xl border-2 border-transparent transition-colors duration-300 group-hover:border-white/40 pointer-events-none" />
        </div>
    )
}
