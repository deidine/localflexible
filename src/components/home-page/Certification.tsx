import React from 'react'

export default function Certification() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
    <div className="container px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">Accolades & Certifications</div>
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Trusted by Industry Leaders</h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our commitment to quality and customer satisfaction has earned us recognition from the top names in
            the automotive industry.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 lg:grid-cols-4 lg:gap-12">
        <img
          src="/placeholder.svg"
          alt="Certification 1"
          width={150}
          height={150}
          className="mx-auto"
          style={{ aspectRatio: "150/150", objectFit: "cover" }}
        />
        <img
          src="/placeholder.svg"
          alt="Certification 2"
          width={150}
          height={150}
          className="mx-auto"
          style={{ aspectRatio: "150/150", objectFit: "cover" }}
        />
        <img
          src="/placeholder.svg"
          alt="Certification 3"
          width={150}
          height={150}
          className="mx-auto"
          style={{ aspectRatio: "150/150", objectFit: "cover" }}
        />
        <img
          src="/placeholder.svg"
          alt="Certification 4"
          width={150}
          height={150}
          className="mx-auto"
          style={{ aspectRatio: "150/150", objectFit: "cover" }}
        />
      </div>
    </div>
  </section>  )
}
