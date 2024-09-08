import Link from 'next/link'
import React from 'react'

export default function Hero() {
  return (
   
    <section id='Hero' className="w-full bg-primary text-primary-foreground">
    <div className="container px-4 md:px-6 py-12 md:py-24 lg:py-32 xl:py-48 grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
      <div className="space-y-4">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
          Your One-Stop Shop for Automotive Parts
        </h1>
        <p className="max-w-[600px] text-lg md:text-xl">
          localFlexible Auto Parts offers a wide range of high-quality parts for both trucks and regular cars. Our
          expertise and commitment to customer satisfaction make us the trusted choice for all your automotive
          needs.
        </p>
        <div className="flex flex-col gap-2 min-[400px]:flex-row">
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md bg-primary-foreground px-8 text-sm font-medium text-primary shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Shop Truck Parts
          </Link>
          <Link
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
            prefetch={false}
          >
            Shop Car Parts
          </Link>

        </div>
      </div>
      <div className="relative h-[400px] sm:h-[500px] lg:h-auto">
     
        <img src="/logo.png" alt="Automotive Parts"  className="object-cover  rounded-[40px] rounded-xl" />
      </div>
    </div>
  </section>
  )
}
