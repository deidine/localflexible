import React from 'react'
import { WrenchIcon ,TruckIcon,
    TrophyIcon} from '../ui/icons'

export default function Services() {
  return (
    <section id='Services' className="w-full py-12 md:py-24 lg:py-32">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Our Services</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted Automotive Solutions</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            At localFlexible Auto Parts, we pride ourselves on providing top-notch services to our customers. From
            expert installation to fast shipping, we're here to make your automotive needs a breeze.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-3 lg:gap-12">
        <div className="flex flex-col items-center justify-center space-y-4">
          <WrenchIcon className="h-12 w-12 text-primary" />
          <h3 className="text-2xl font-bold">Expert Installation</h3>
          <p className="text-muted-foreground">
            Our team of experienced technicians can install your new parts with precision and care.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <TruckIcon className="h-12 w-12 text-primary" />
          <h3 className="text-2xl font-bold">Fast Shipping</h3>
          <p className="text-muted-foreground">
            We offer fast and reliable shipping to get your parts to you as quickly as possible.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center space-y-4">
          <TrophyIcon className="h-12 w-12 text-primary" />
          <h3 className="text-2xl font-bold">Certified Quality</h3>
          <p className="text-muted-foreground">
            All our parts are rigorously tested and certified to meet the highest industry standards.
          </p>
        </div>
      </div>
    </div>
  </section>  )
}
