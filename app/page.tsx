import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { LogosSection } from "@/components/logos-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { TeamSection } from "@/components/team-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { FaqSection } from "@/components/faq-section"
import { BlogSection } from "@/components/blog-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <LogosSection />
      <AboutSection />
      <ServicesSection />
      {/* <TestimonialsSection /> */}
      <FaqSection />
      <Footer />
    </main>
  )
}
