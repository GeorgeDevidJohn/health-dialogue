import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden bg-secondary pb-16 pt-28 lg:pb-24 lg:pt-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Content */}
          <div className="relative z-10">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-primary">
              Welcome To Health Dialogue
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl">
              <span className="text-balance">The Healthy Mind Is A Wealthy Soul</span>
            </h1>
            <p className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground">
            You don’t have to navigate life’s challenges alone. At Health Dialogue, we provide compassionate, confidential, and professional mental health support tailored to your unique journey.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/aboutus"
                className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                About Us
              </Link>
              <Link
                href="/contactus"
                className="inline-flex items-center gap-2 rounded-full border border-primary bg-transparent px-8 py-3.5 text-sm font-semibold text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                Book Now
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Stats */}
            <div className="mt-12 flex flex-wrap gap-8">
              <div>
                <p className="text-3xl font-bold text-foreground">25+</p>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="border-l border-border pl-8">
                <p className="text-3xl font-bold text-foreground">7.8K+</p>
                <p className="text-sm text-muted-foreground">Active Members</p>
              </div>
              <div className="border-l border-border pl-8">
                <p className="text-3xl font-bold text-foreground">99%</p>
                <p className="text-sm text-muted-foreground">Satisfied Client</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/hero-banner.jpeg"
                alt="Health Dialogue - Healthy Communities & Healthy Relationships"
                width={800}
                height={600}
                className="h-[500px] w-full object-cover lg:h-[600px]"
                priority
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl bg-card/90 p-4 backdrop-blur-sm">
                <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/images/consultant-ebin.png"
                    alt="Ebin Sebastian, Director & Consultant Psychologist"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold text-card-foreground">Ebin Sebastian</p>
                  <p className="text-xs text-muted-foreground">Director & Consultant Psychologist</p>
                </div>
              </div>
            </div>
            {/* Review badge */}
            <div className="absolute -left-4 top-8 rounded-2xl bg-card p-4 shadow-lg lg:-left-8">
              <p className="text-2xl font-bold text-foreground">1000+</p>
              <p className="text-xs text-muted-foreground">Happy Souls</p>
              <div className="mt-1 flex">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="h-3.5 w-3.5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
