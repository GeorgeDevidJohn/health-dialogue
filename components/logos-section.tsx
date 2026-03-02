import Image from "next/image"
import { Check } from "lucide-react"

const features = [
  {
    title: "Anxiety & stress",
    question: "Feeling anxious, stressed, or emotionally drained?",
    description: "Daily life can feel overwhelming. Therapy helps you build coping skills and find calm.",
  },
  {
    title: "Relationships & career",
    question: "Struggling with relationships or career pressure?",
    description: "Navigate conflicts and pressure with clarity and professional support.",
  },
  {
    title: "Burnout & trauma",
    question: "Experiencing burnout, trauma, or self-doubt?",
    description: "Process difficult experiences and rebuild your sense of self in a safe space.",
  },
  {
    title: "Personal growth",
    question: "Want to grow personally and emotionally?",
    description: "Invest in yourself and move forward with intention and self-awareness.",
  },
]

export function LogosSection() {
  return (
    <section className="bg-gradient-to-br from-primary via-emerald-700 to-slate-900 opacity-95 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left: Title + features */}
          <div>
            <h2 className="mb-8 font-serif text-3xl font-bold leading-tight text-primary-foreground md:text-4xl">
              Why Consider Therapy?
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {features.map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary-foreground/20">
                    <Check className="h-5 w-5 text-primary-foreground" strokeWidth={2.5} />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-primary-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm leading-snug text-primary-foreground/85">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <p className="mt-8 text-base font-medium italic text-primary-foreground/95 md:text-lg">
              Therapy is not a weakness — it&apos;s a powerful step toward clarity, healing, and
              growth.
            </p>
          </div>

          {/* Right: Side image with soft shape */}
          <div className="relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              <div
                className="absolute -inset-4 rounded-3xl "
                aria-hidden
              />
              <div className="relative overflow-hidden rounded-2xl ">
                <Image
                  src="/images/why-therapy-side1.png"
                  alt="Person in a supportive, growth-oriented setting"
                  width={480}
                  height={520}
                  className="h-auto w-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
