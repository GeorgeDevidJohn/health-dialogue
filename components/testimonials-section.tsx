import Image from "next/image"

const teamMembers = [
  {
    name: "Rev. Dr. Jose Panthackal",
    role: "Clinical Psychologist (BET & HRT)",
    description: "MSc, DHRT, Ps. D.",
  },
  {
    name: "Rev. Dr. Gimmi Akkattu",
    role: "Clinical Psychologist",
    description:
      "MA, M. Sc., Ph. D in Clinical Counselling Psychology, De La Salle University, Philippines.",
  },
  {
    name: "Rev. Dr. Johnson Joseph",
    role: "Associate Professor and HOD, Department of Psychology",
    description: "Brings academic, teaching, and mentoring experience in psychology and mental health.",
  },
  {
    name: "Agusthy P D",
    role: "Consultant Psychologist",
    description:
      "MSc Counselling and Family Therapy; Diploma in Learning Disorder, with a focus on family systems and child development.",
  },
  {
    name: "Mithra M Anil",
    role: "Clinical Psychologist",
    description:
      "MPhil in Clinical Psychology — Shri Khushal Das University, Rajasthan; specialises in holistic assessment and psychotherapy.",
  },
  {
    name: "Dr Ayushlal P M",
    role: "BAMS MD (Ay-Psy)",
    description:
      "PGDYT; Specialist in Ayurveda Psychiatry and Psychology, Clinical Hypnotherapist, Assistant Professor, Dept. of Kayachikitsa, Rohilkhand Ayurveda Medical College and Hospital, Bareilly, Uttar Pradesh.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Text content and team list */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Our Team</p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">The experts behind Health Dialogue Kozhikode</span>
            </h2>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
              We bring together some of the best experts in mental health to support you through life&apos;s
              challenges. Our experienced professionals provide compassionate, confidential, and personalised care to
              guide you toward better emotional wellbeing—using holistic, evidence-based, and culturally sensitive
              approaches tailored to you and your family.
            </p>

            <div className="mt-8 space-y-4">
            {/* <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/about-us-imag.jpeg"
                alt="Health Dialogue team providing holistic mental health support"
                width={640}
                height={480}
                className="h-[320px] w-full object-cover md:h-[380px] lg:h-[420px]"
              />
            </div> */}

<div className="relative overflow-hidden rounded-3xl">
              <Image
                src="/images/about-us-imag.jpeg"
                alt="Health Dialogue Kozhikode - Healthy Communities & Healthy Relationships"
                width={640}
                height={480}
                className="h-[500px] w-full object-cover lg:h-[600px]"
                priority
              />
              {/* Overlay Card */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-4 rounded-2xl bg-card/90 p-4 backdrop-blur-sm">
                {/* <div className="h-12 w-12 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src="/images/consultant-ebin.png"
                    alt="Ebin Sebastian, Director & Consultant Psychologist (Msc, Clinical Psychology)"
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div> */}
                <div>
                <h3 className="font-serif text-base font-semibold text-foreground md:text-lg">
                Ebin Sebastian
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary md:text-sm">
                  Director & Consultant Psychologist (Msc. Clinical Psychology)
                  </p>
                </div>
              </div>
            </div>
            
              {/* {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="rounded-2xl bg-card/80 p-4 shadow-sm ring-1 ring-border/60"
                >
                  <h3 className="font-serif text-base font-semibold text-foreground md:text-lg">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary md:text-sm">
                    {member.role}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {member.description}
                  </p>
                </article>
              ))} */}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative">
            {/* <div className="overflow-hidden rounded-3xl shadow-lg">
              <Image
                src="/images/about-us-imag.jpeg"
                alt="Health Dialogue team providing holistic mental health support"
                width={640}
                height={480}
                className="h-[320px] w-full object-cover md:h-[380px] lg:h-[420px]"
              />
            </div> */}
             <div className="mt-8 space-y-4">
             {teamMembers.map((member) => (
                <article
                  key={member.name}
                  className="rounded-2xl bg-card/80 p-4 shadow-sm ring-1 ring-border/60"
                >
                  <h3 className="font-serif text-base font-semibold text-foreground md:text-lg">
                    {member.name}
                  </h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary md:text-sm">
                    {member.role}
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground md:text-sm">
                    {member.description}
                  </p>
                </article>
              ))}
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
