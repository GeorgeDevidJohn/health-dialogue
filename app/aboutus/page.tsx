import Image from "next/image"
import Link from "next/link"
import { HeartHandshake, Users, Brain, Sparkles } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const team = [
  {
    name: "Rev. Dr. Jose Panthackal ",
    role: "Clinical Psychologist (BET & HRT)",
    image: "/images/jose.jpeg",
    description:
      "MSc, DHRT, Ps. D" },
  {
    name: "Rev. Dr. Gimmi Akkattu ",
    role: "Clinical Psychologist",
    image: "/images/gimmi.jpeg",
    description:
      "MA, M. Sc., Ph. D in Clinical Counselling Psychology, De La Salle University, Philippines",
  },
  {
    name: "Rev. Dr. Johnson Joseph",
    role: "Associate Professor and HOD",
    image: "/images/johnson.jpeg",
    description:
      "Department of Psychology",
  },
  {
    name: "Agusthy P D",
    role: "Consultant Psychologist",
    image: "/images/sojan.jpg.jpeg",
    description:
      "MSc Counseling and Family Therapy , Diploma in Learning Disorder",
  },
  {
    name: "Mithra M Anil",
    role: "Clinical psychologist ",
    image: "/images/mithra.jpeg",
    description:
      "Mphil in clinical Psychology - Shri Khushal Das University, Rajasthan",
  },
  {
    name: "Dr Ayushlal P M ",
    role: "Consultant Psychologist",
    image: "/images/ayushal.jpeg",
    description:
      "BAMS MD (Ay-Psy), PGDYT, Specialist Ayurveda Psychiatry and Psychology, Clinical Hypnotherapist, Assistant Professor, Dept. Of Kayachikitsa, Rohilkhand Ayurveda Medical College and Hospital, Bareilly, Uttarpradesh",
  },
]

export default function AboutUsPage() {
  return (
    <main>
      <Navigation />

      {/* Banner */}
      <section className="relative overflow-hidden bg-secondary pb-20 pt-32 lg:pb-24 lg:pt-40">
        <div className="absolute inset-0 bg-gradient-to-br from-primary via-emerald-700 to-slate-900 opacity-95" aria-hidden />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-xl text-primary-foreground">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]">
              About Health Dialogue
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Building healthier minds, families, and communities.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/90">
              Health Dialogue is a mental wellness centre in Kozhikode dedicated to creating safe, warm spaces where
              people can heal, grow, and reconnect with themselves and each other. We combine clinical expertise with
              deep compassion for real-life struggles.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/services"
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
              >
                Explore our services
              </Link>
              <Link
                href="/contactus"
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/60 bg-transparent px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Meet with a therapist
              </Link>
            </div>
          </div>

          <div className="relative w-full max-w-md">
            <div className="overflow-hidden rounded-3xl bg-primary-foreground/5">
              <Image
                src="/images/about-us-imag.jpeg"
                alt="Therapist and client in conversation in a calm setting"
                width={640}
                height={480}
                className="h-[320px] w-full object-cover md:h-[380px] lg:h-[420px]"
              />
            </div>
            <div className="absolute -bottom-8 left-6 right-6 rounded-2xl bg-card/95 p-4 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary">
                Our promise
              </p>
              <p className="mt-1 text-sm text-muted-foreground">
                Warm, non-judgmental care grounded in ethics, confidentiality, and respect for every story.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our story / philosophy */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-start gap-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,1.4fr)]">
            <div>
              <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
                Our story
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                Health Dialogue was born from a simple but powerful belief: when people feel truly heard and understood,
                healing begins. What started as a small practice has grown into a dedicated mental wellness centre,
                bringing together psychologists and counselors who share the same heart for people and communities.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                We see therapy not just as a way to reduce symptoms, but as a collaborative journey toward a more
                grounded, meaningful life. Whether you&apos;re navigating stress, trauma, relationships, parenting, or
                big life changes, we walk alongside you with curiosity, care, and clinical clarity.
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                Our work is culturally rooted in Kerala while keeping pace with global, evidence-based practices. We
                welcome individuals, couples, parents, and families from all walks of life, with deep respect for your
                background, values, and lived experiences.
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl bg-secondary p-6">
                <h3 className="text-base font-semibold text-foreground">Our mission</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  To make high-quality mental health care accessible, human, and deeply relational—supporting people to
                  build healthier minds, families, and communities.
                </p>
              </div>
              <div className="rounded-2xl bg-secondary p-6">
                <h3 className="text-base font-semibold text-foreground">Our vision</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  A world where seeking therapy is seen as a strength, and mental wellbeing is valued as much as
                  physical health in every household.
                </p>
              </div>
            </div>
          </div>

          {/* Pillars */}
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-2xl bg-secondary p-5">
              <HeartHandshake className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-sm font-semibold text-foreground">Relationship-centred care</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                We prioritise trust, safety, and partnership in every therapeutic relationship.
              </p>
            </div>
            <div className="rounded-2xl bg-secondary p-5">
              <Brain className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-sm font-semibold text-foreground">Evidence-based practice</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Our team is trained in approaches backed by psychological research and updated best practices.
              </p>
            </div>
            <div className="rounded-2xl bg-secondary p-5">
              <Users className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-sm font-semibold text-foreground">Whole-family perspective</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                We look at individuals within the context of their families, communities, and cultures.
              </p>
            </div>
            <div className="rounded-2xl bg-secondary p-5">
              <Sparkles className="h-6 w-6 text-primary" />
              <h3 className="mt-3 text-sm font-semibold text-foreground">Growth & prevention</h3>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                Beyond crisis support, we focus on emotional skills that prevent burnout and support long-term growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Teams */}
      <section className="bg-secondary py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Our Team
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
              The people behind Health Dialogue.
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              Our team brings together training in psychology, counselling, and family systems with a shared passion
              for creating safe spaces where people feel seen, supported, and empowered to change.
            </p>
          </div>

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member) => (
              <article key={member.name} className="group flex flex-col rounded-3xl bg-card p-4 shadow-sm">
                <div className="mb-5 overflow-hidden rounded-2xl">
                  <Image
                    src={member.image}
                    alt={member.name}
                    width={400}
                    height={480}
                    className="h-[360px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">{member.name}</h3>
                <p className="mt-1 text-sm font-medium text-primary">{member.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {member.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <section className="bg-background py-12 lg:py-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
              Want to know if we&apos;re the right fit for you?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              A brief conversation can help you decide which therapist or service best matches your needs. We&apos;re
              happy to answer questions before you book a full session.
            </p>
          </div>
          <Link
            href="/contactus"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact our team
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

