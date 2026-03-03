import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, Clock } from "lucide-react"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"

const CONTACT_EMAIL = "healthdngo@gmail.com"
const PHONE_PRIMARY = "+91 75105 71656"
const PHONE_SECONDARY = "+91 70125 71656"

const ADDRESS_LINES = [
  "Health Dialogue Kozhikode",
  "Mental Wellness Centre",
  "Ozanam Bhavan",
  "Medical College, Kozhikode 673008",
  "Kerala, INDIA",
]

const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=HEALTH+DIALOGUE+Mental+Wellness+Centre+Ozanam+Bhavan+Medical+College+Kozhikode+673008+Kerala+India"

export default function ContactUsPage() {
  return (
    <main>
      <Navigation />

      {/* Banner */}
      <section className="relative overflow-hidden bg-primary pb-20 pt-32 lg:pb-28 lg:pt-40">
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary via-emerald-700 to-slate-900 opacity-95"
          aria-hidden
        />
        <div className="relative mx-auto flex max-w-7xl flex-col gap-12 px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-xl text-primary-foreground">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em]">
              Contact Us
            </p>
            <h1 className="font-serif text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
              Let&apos;s talk about your mental wellbeing.
            </h1>
            <p className="mt-5 text-base leading-relaxed text-primary-foreground/90">
              Reach out to book an appointment, ask a question, or learn more about how Health Dialogue Kozhikode can support you
              and your loved ones. Every message is read with care and handled confidentially.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="inline-flex items-center gap-2 rounded-full bg-primary-foreground px-7 py-3.5 text-sm font-semibold text-primary transition-opacity hover:opacity-90"
              >
                Email us
              </a>
              <a
                href={`tel:${PHONE_PRIMARY.replace(/\\s/g, "")}`}
                className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/40 bg-transparent px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
              >
                Call now
              </a>
            </div>
          </div>

          <div className="relative w-full max-w-md self-stretch">
            <div className="relative h-full overflow-hidden rounded-3xl bg-primary-foreground/10 p-6 backdrop-blur-sm">
              <div className="space-y-4 text-sm text-primary-foreground/90">
                <div className="flex items-start gap-3">
                  <Mail className="mt-0.5 h-4 w-4 text-primary-foreground" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary-foreground/70">
                      Email
                    </p>
                    <a href={`mailto:${CONTACT_EMAIL}`} className="mt-1 block text-sm hover:underline">
                      {CONTACT_EMAIL}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="mt-0.5 h-4 w-4 text-primary-foreground" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary-foreground/70">
                      Phone
                    </p>
                    <div className="mt-1 space-y-1">
                      <a href="tel:+917510571656" className="block hover:underline">
                        {PHONE_PRIMARY}
                      </a>
                      <a href="tel:+917012571656" className="block hover:underline">
                        {PHONE_SECONDARY}
                      </a>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 text-primary-foreground" />
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-wide text-primary-foreground/70">
                      Address
                    </p>
                    <p className="mt-1 text-sm leading-relaxed">
                      {ADDRESS_LINES.map((line, idx) => (
                        <span key={line}>
                          {line}
                          {idx < ADDRESS_LINES.length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                    <Link
                      href={GOOGLE_MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-2 inline-flex text-xs font-semibold text-primary-foreground underline underline-offset-4"
                    >
                      View on Google Maps
                    </Link>
                  </div>
                </div>
               
              </div>
            </div>

            {/* Decorative image strip (using hero image for visual continuity) */}
            <div className="pointer-events-none absolute -bottom-10 -right-10 -z-10 hidden h-40 w-40 overflow-hidden rounded-3xl opacity-70 lg:block">
              <Image
                src="/images/hero-banner.jpeg"
                alt="Calm and supportive therapy setting"
                fill
                sizes="160px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Info + visual section */}
      <section className="bg-background py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl">
                A safe space to begin, at your own pace.
              </h2>
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground md:text-base">
                Whether you&apos;re reaching out for yourself, your child, your partner, or your family, this is a
                gentle first step. You don&apos;t need to have the perfect words, a diagnosis, or a clear plan—just a
                willingness to start a conversation.
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl bg-secondary p-5">
                  <p className="text-sm font-semibold text-foreground">Confidential & judgment-free</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Your story stays with us. We provide a private, respectful environment for every interaction.
                  </p>
                </div>
                <div className="rounded-2xl bg-secondary p-5">
                  <p className="text-sm font-semibold text-foreground">Professional, evidence-based care</p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Sessions are led by qualified professionals using approaches grounded in psychological research.
                  </p>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="overflow-hidden rounded-3xl">
                <Image
                  src="/images/about-intro.jpeg"
                  alt="Client speaking with a therapist in a comfortable setting"
                  width={640}
                  height={480}
                  className="h-[320px] w-full object-cover md:h-[380px] lg:h-[420px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map location */}
      <section className="bg-background pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-6 max-w-2xl">
            <h2 className="font-serif text-2xl font-bold text-foreground md:text-3xl">
              Find us on the map.
            </h2>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">
              Our centre is located near Medical College, Kozhikode. Use the interactive map below to plan your visit or
              share the location with someone who may need support.
            </p>
          </div>
          <div className="overflow-hidden rounded-3xl shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3912.901338599077!2d75.83557809999999!3d11.268662500000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba65b9b5b000125%3A0x3fcb43bb1c1b388b!2s7R9P%2BF68%2C%20Ummalathoor%2C%20Kozhikode%2C%20Kerala%2C%20India!5e0!3m2!1sen!2sca!4v1772557453448!5m2!1sen!2sca"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>

      {/* Simple CTA strip reusing footer contact anchor */}
      <section className="bg-secondary py-12 lg:py-14">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-4 px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div>
            <h2 className="font-serif text-2xl font-semibold text-foreground md:text-3xl">
              Ready to schedule your first session?
            </h2>
            <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Use the details above to call or email us directly. We&apos;ll help you choose the right service and book
              a convenient time at our Kozhikode centre.
            </p>
          </div>
          <Link
            href={GOOGLE_MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Get directions
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  )
}

