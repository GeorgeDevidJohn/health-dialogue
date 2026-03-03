import Image from "next/image"
import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "George Devid",
    role: "Our Client",
    quote: "I felt heard and supported through every session. The counsellor truly understood my struggles and helped me find my way forward.",
    rating: 5,
  },
  {
    name: "Tessa Rose",
    role: "Our Client",
    quote: "The counselling sessions were a game-changer for me. I gained valuable insights and practical tools to manage my anxiety and improve my relationships.",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left - Testimonials */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Testimonials</p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">What Our Clients Say About Us</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
            Hear from individuals and families who found clarity, healing, and growth through our support.
            </p>

            <div className="mt-10 flex flex-col gap-6">
              {testimonials.map((t) => (
                <div key={t.name} className="rounded-2xl bg-card p-6 shadow-sm">
                  <div className="mb-4 flex items-start justify-between">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                        <span className="text-sm font-bold text-primary">{t.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-semibold text-card-foreground">{t.name}</p>
                        <p className="text-xs text-muted-foreground">{t.role}</p>
                      </div>
                    </div>
                    <Quote className="h-6 w-6 text-primary/30" />
                  </div>
                  <p className="text-sm leading-relaxed text-muted-foreground">{t.quote}</p>
                  <div className="mt-3 flex gap-0.5">
                    {[...Array(t.rating)].map((_, i) => (
                      <svg key={i} className="h-4 w-4 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Featured testimonial with image */}
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <Image
                src="/images/testimonial-john.png"
                alt="John Wick, Founder, sharing a testimonial for MindTalk"
                width={600}
                height={600}
                className="h-[500px] w-full object-cover"
              />
            </div>
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-card/95 p-6 backdrop-blur-sm">
              <Quote className="mb-2 h-8 w-8 text-primary/40" />
              <p className="text-sm leading-relaxed text-muted-foreground">
                {'"We are here to listen, support, and unite all people to build a healthier, compassionate society for those in distress."'}
              </p>
              <div className="mt-4 flex items-center gap-3">
                <div className="h-10 w-10 overflow-hidden rounded-full bg-primary/10">
                  <Image src="/images/testimonial-john.png" alt="John Wick" width={40} height={40} className="h-full w-full object-cover" />
                </div>
                <div>
                  <p className="font-semibold text-card-foreground">Ebin Sebastian</p>
                  <p className="text-xs text-muted-foreground">Director & Consultant Psychologist (Msc, Clinical Psychology)</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
