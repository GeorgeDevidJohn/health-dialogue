import Link from "next/link"
import { Brain, Heart, Users, Shield, GraduationCap } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const detailedServices = [
  {
    icon: Brain,
    title: "Individual Counseling",
    tagline: "One-on-one support tailored to your story.",
    description:
      "Individual sessions focus on helping you process emotions, understand patterns, and build healthier ways of coping. Together, we create a safe space to explore anxiety, mood, self-worth, and past experiences at a pace that feels right for you.",
  },
  {
    icon: Users,
    title: "Parental Counseling",
    tagline: "Confident, compassionate parenting support.",
    description:
      "Parenting doesn’t come with a manual. We help you navigate behavioural challenges, emotional outbursts, and family transitions with practical tools you can use at home. Sessions are designed to support both you and your child’s emotional wellbeing.",
  },
  {
    icon: GraduationCap,
    title: "Career Guidance",
    tagline: "Clarity for your next professional step.",
    description:
      "Career guidance sessions combine psychological insight with practical planning. We explore your strengths, values, and interests to help you choose courses, career paths, or transitions that feel meaningful—not just mandatory.",
  },
  {
    icon: Shield,
    title: "Stress Management",
    tagline: "Tools to handle daily pressure with ease.",
    description:
      "Stress is part of life, but burnout doesn’t have to be. In these sessions, you’ll learn science-backed relaxation strategies, boundary-setting skills, and mindset shifts that reduce overwhelm and restore your sense of balance.",
  },
  {
    icon: Users,
    title: "Family Counseling",
    tagline: "Healing conversations for the whole family.",
    description:
      "Family counseling creates a structured space to talk, listen, and be heard. We work on communication, conflict resolution, and rebuilding trust so each member feels safer, more respected, and more understood at home.",
  },
  {
    icon: Shield,
    title: "Depression Management Therapy",
    tagline: "Gentle support when life feels heavy.",
    description:
      "If you’re feeling stuck, drained, or disconnected, you don’t have to go through it alone. Depression counseling helps you understand what’s driving your low mood and gradually rebuild energy, motivation, and hope through small, realistic steps.",
  },
  {
    icon: Heart,
    title: "Couple Therapy",
    tagline: "Rebuilding connection, respect, and trust.",
    description:
      "Couple sessions focus on improving communication, resolving recurring conflicts, and deepening emotional intimacy. We provide a neutral space where both partners can feel heard while learning healthier ways to relate and respond to each other.",
  },
  {
    icon: Brain,
    title: "Anxiety Management",
    tagline: "From constant worry to calm and clarity.",
    description:
      "Anxiety management combines practical coping techniques with deeper emotional work. You’ll learn how to recognise triggers, calm your body, challenge unhelpful thoughts, and gradually feel more in control of your day-to-day life.",
  },
]

export default function ServicesPage() {
  return (
    <main>
      <Navigation />

      {/* Banner */}
      <section className="relative overflow-hidden bg-primary pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary via-emerald-700 to-slate-900 opacity-95"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-10 px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-xl text-primary-foreground">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]">
              Our Services
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Compassionate care for every season of life.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/90">
              From individual therapy to family and couple sessions, Health Dialogue Kozhikode offers evidence-based,
              relationship-centred care for children, teens, and adults. Explore our services to find the support
              that fits you best.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="#all-services"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
              >
                View all services
              </Link>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-transparent px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Book a session
              </Link>
            </div>
          </div>

          <div className="grid w-full max-w-md gap-4 rounded-3xl bg-primary-foreground/10 p-6 backdrop-blur-sm lg:ml-auto">
            <h2 className="font-serif text-lg font-semibold text-primary-foreground">
              What you can expect
            </h2>
            <ul className="space-y-3 text-sm text-primary-foreground/90">
              <li>• Confidential, non-judgmental space to talk openly.</li>
              <li>• Evidence-based approaches adapted to your needs.</li>
              <li>• Support for individuals, couples, parents, and families.</li>
              <li>• In-person sessions at our Kozhikode centre.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Detailed services */}
      <section id="all-services" className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
              Counseling services tailored to your needs.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Each service is designed to address specific emotional, relational, or life challenges while keeping your
              whole wellbeing in mind. You can begin with one focus and adjust as your goals evolve.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:mt-16 lg:grid-cols-3">
            {detailedServices.map((service) => (
              <article
                key={service.title}
                className="flex flex-col rounded-2xl bg-card p-7 shadow-sm ring-1 ring-border/60 transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-semibold text-card-foreground">{service.title}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{service.tagline}</p>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-14 lg:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
              Not sure where to start?
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              A short consultation can help you understand which service is the best fit for you or your family. We&apos;ll
              listen to your concerns and recommend a path that feels supportive and realistic.
            </p>
          </div>
          <Link
            href="/contactus"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Talk to our team
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

