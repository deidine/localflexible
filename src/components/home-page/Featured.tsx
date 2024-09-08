import Link from 'next/link'
import React from 'react'

export default function Featured() {
  return (

    <section id='Featured' className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Categories</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Explore Our Wide Selection</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Whether you need parts for your truck or your regular car, we've got you covered. Browse our extensive
            inventory and find the perfect fit for your vehicle.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-2 lg:gap-12">
        <Link
          href="#"
          className="group relative block h-[300px] overflow-hidden rounded-xl bg-primary/10 transition-all hover:scale-[1.02]"
          prefetch={false}
        >
          <img src="/truck.jpeg" alt="Truck Parts"  className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-primary/60 opacity-0 transition-all group-hover:opacity-100">
            <h3 className="text-3xl font-bold text-primary-foreground">Truck Parts</h3>
          </div>
        </Link>
        <Link
          href="#"
          className="group relative block h-[300px] overflow-hidden rounded-xl bg-primary/10 transition-all hover:scale-[1.02]"
          prefetch={false}
        >
          <img src="/car.jpg" alt="Car Parts"  className="object-cover" />
          <div className="absolute inset-0 flex items-center justify-center bg-primary/60 opacity-0 transition-all group-hover:opacity-100">
            <h3 className="text-3xl font-bold text-primary-foreground">Car Parts</h3>
          </div>
        </Link>
      </div>
    </div>
  </section>  )
}
