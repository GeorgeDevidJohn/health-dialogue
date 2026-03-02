import { Brain, Heart, Users, Shield, GrabIcon,GraduationCap } from "lucide-react"
import { Graduate } from "next/font/google"

const services = [
  {
    icon: Brain,
    title: "Individual Counseling",
    description: "Personalized therapy sessions focused on emotional healing and personal growth.",
  },
  {
    icon: Users,
    title: "Parental Counseling",
    description: "Guidance and practical strategies to support confident, mindful parenting decisions.",
  },
  {
    icon: GraduationCap,
    title: "Career Guidance",
    description: "Expert advice to clarify goals and choose fulfilling career pathways.",
  },
  {
    icon: Shield,
    title: "Stress Management",
    description: "Effective techniques to reduce stress and build emotional resilience.",
  },
  {
    icon: Users,
    title: "Family Counseling",
    description: "Strengthen communication, rebuild trust, and resolve conflicts within family relationships.",
  },
  {
    icon: Shield,
    title: "Depression Counseling",
    description: "Compassionate support to overcome sadness and restore emotional balance.",
  },
  {
    icon: Heart,
    title: "Couple Therapy",
    description: "Improve communication, rebuild intimacy, and strengthen your relationship partnership.",
  },
  {
    icon: Brain,
    title: "Anxiety Management",
    description: "Learn coping skills to manage anxiety and regain daily confidence.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Why Choose Us</p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            <span className="text-balance">Getting You Back To Your Best Self</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </p>
        </div>

        {/* Carousel-style card row */}
        <div className="mt-16">
          <div className="flex gap-6 overflow-x-auto pb-4 lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
            {services.map((service) => (
              <div
                key={service.title}
                className="group min-w-[260px] flex-1 rounded-2xl bg-card p-8 shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 transition-colors group-hover:bg-primary">
                  <service.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-card-foreground">{service.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 flex justify-center">
          <a
            href="/services"
            className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
          >
            Learn More
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
