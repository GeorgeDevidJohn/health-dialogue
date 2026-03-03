import Image from "next/image"
import { Eye, Target } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Image with Vision/Mission Cards */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/about-intro.jpeg"
                alt="Therapy session with counselor taking notes"
                width={600}
                height={500}
                className="h-[400px] w-full object-cover lg:h-[500px]"
              />
            </div>
            {/* Vision & Mission Cards */}
            <div className="mt-6 grid grid-cols-2 gap-4">
              <div className="rounded-2xl bg-card p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Eye className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-card-foreground">Our Vision</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                Building healthy communities through compassionate dialogue and healing relationships.
                </p>
              </div>
              <div className="rounded-2xl bg-card p-6 shadow-sm">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                  <Target className="h-5 w-5 text-primary" />
                </div>
                <h3 className="mb-2 font-serif text-lg font-semibold text-card-foreground">Our Mission</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                Health Dialogue Kozhikode listens, supports, and unites all people to build a healthier, compassionate society for those in distress.
                </p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">About Us</p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">Quality Care From Quality Experts</span>
            </h2>
            <p className="mt-6 leading-relaxed text-muted-foreground">
            Health Dialogue Kozhikode is a compassionate mental wellness centre in Kozhikode, Kerala, dedicated to building healthy communities and healing relationships. We provide a safe, inclusive space for all, regardless of background, offering professional care, empathetic listening, and meaningful dialogue to support individuals and families in distress and emotional challenges.
            </p>
            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-start gap-4 rounded-xl bg-secondary p-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                  <svg className="h-5 w-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Professionals</h4>
                  <p className="mt-1 text-sm text-muted-foreground">All our therapists are fully  experienced in their respective specializations.</p>
                </div>
              </div>
              <div className="flex items-start gap-4 rounded-xl bg-secondary p-5">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary">
                  <svg className="h-5 w-5 text-primary-foreground" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-foreground">Compassionate Approach</h4>
                  <p className="mt-1 text-sm text-muted-foreground">We provide a safe, judgment-free environment to support your mental health journey.</p>
                </div>
              </div>
            </div>
            <a
              href="/aboutus"
              className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
            >
              Learn More
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
