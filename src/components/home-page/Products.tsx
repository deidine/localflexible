import React from 'react'
import { Button } from '../ui/button'

export default function Products() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Featured Products</div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Check Out Our Top Sellers</h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Browse our selection of the most popular and best-selling automotive parts.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
              <div className="flex flex-col items-center justify-center space-y-4">
                <img
                  src="/BSB_Flexible.jpg"
                  alt="Product 1"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <h3 className="text-2xl font-bold">Hydraulic Fittings and Hose Components</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <img
                  src="/machine.jpeg"
                  alt="Product 2"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <h3 className="text-2xl font-bold">Hydraulic Hose Crimping Machine and Parts Inventory</h3>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4">
                <img
                  src="/O.jpeg"
                  alt="Product 3"
                  width={300}
                  height={300}
                  className="rounded-lg object-cover"
                  style={{ aspectRatio: "300/300", objectFit: "cover" }}
                />
                <h3 className="text-2xl font-bold">Hydraulic Hose Assembly with Multiple Connections</h3>
              </div>
            </div>
          </div>
        </section>  )
}
