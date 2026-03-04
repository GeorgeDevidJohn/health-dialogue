 "use client"

import Image from "next/image"
import Link from "next/link"
import { Phone, Mail, MapPin, Clock, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-foreground">
     

      {/* Footer Content */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3">
              <div className="relative h-10 w-10 overflow-hidden rounded-full bg-white">
                <Image
                  src="/health-logo.png"
                  alt="Health Dialogue Kozhikode logo"
                  fill
                  sizes="40px"
                  className="object-contain"
                />
              </div>
              <span className="text-lg font-bold text-primary-foreground">Health Dialogue Kozhikode</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-primary-foreground/60">
            Health Dialogue Kozhikode is a compassionate mental wellness centre in Kozhikode, Kerala, dedicated to building healthy communities and healing relationships.
              </p>
            <div className="mt-4 flex items-center gap-3">
              <a
                href="https://www.instagram.com/healthdialogue_kozhikode"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Health Dialogue Kozhikode on Instagram"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                <Instagram className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="mb-5 font-semibold text-primary-foreground">Explore</h4>
            <nav className="flex flex-col gap-3">
              <Link href="/" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Home</Link>
              <Link href="/aboutus" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">About Us</Link>
              <Link href="/services" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Service</Link>
              <Link href="/contactus" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Contact Us</Link>
            </nav>
          </div>

          {/* Services */}
          <div>
            <h4 className="mb-5 font-semibold text-primary-foreground">Our Services</h4>
            <nav className="flex flex-col gap-3">
              <Link href="#" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Depression Counseling</Link>
              <Link href="#" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Career Guidance</Link>
              <Link href="#" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Parental Counseling</Link>
              <Link href="#" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Stress Management</Link>
              <Link href="#" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Family Counseling</Link>
              <Link href="#" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Couple Therapy</Link>
              <Link href="#" className="text-sm text-primary-foreground/60 transition-colors hover:text-primary">Anxiety Management</Link>
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-5 font-semibold text-primary-foreground">Contact Us</h4>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary-foreground/60">(+91) 701-257-1656</span>
                
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary-foreground/60">(+91) 751-057-1656</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary-foreground/60">healthdngo@gmail.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4 text-primary" />
                <span className="text-sm text-primary-foreground/60">Mental Wellness Centre, Ozanam Bhavan,<br></br> Kozhikode, Kerala, India, 673008</span>
              </div>
            
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto max-w-7xl px-6 py-6 lg:px-8">
          <p className="text-center text-sm text-primary-foreground/40">
            {"Copyright \u00A9 2026 Health Dialogue Kozhikode | Powered by Health Dialogue Kozhikode"}
          </p>
        </div>
      </div>
    </footer>
  )
}
