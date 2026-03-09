"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { usePathname } from "next/navigation"

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    handleScroll()
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const isDarkBanner =
    pathname.startsWith("/services") ||
    pathname.startsWith("/contactus") ||
    pathname.startsWith("/aboutus")

  const useWhiteText = isDarkBanner && !scrolled

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? " bg-white lg:bg-background/95 lg:shadow-sm lg:backdrop-blur-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div
            className={`relative h-12 w-12 overflow-hidden rounded-full shadow-md transition-colors duration-300 ${
              scrolled ? "bg-primary lg:bg-white" : "bg-white"
            }`}
          >
            <Image
              src="/health-logo.png"
              alt="Health Dialogue Kozhikode logo"
              fill
              sizes="48px"
              className="object-contain"
              priority
            />
          </div>
          <span
            className={`text-lg font-bold transition-colors duration-300 ${
              useWhiteText ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            Health Dialogue <br /> Kozhikode
          </span>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          <Link
            href="/"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              useWhiteText ? "text-primary-foreground" : "text-foreground"
            }`}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              useWhiteText ? "text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            Services
          </Link>
          <Link
            href="/aboutus"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              useWhiteText ? "text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            About Us
          </Link>
          <Link
            href="/contactus"
            className={`text-sm font-medium transition-colors hover:text-primary ${
              useWhiteText ? "text-primary-foreground" : "text-muted-foreground"
            }`}
          >
            Contact Us
          </Link>
        </nav>

        <div className="hidden lg:inline-block">
          <Link
            href="/contactus"
            className="rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            Contact Us
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-foreground"
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-10 w-10  bg-white  rounded-full p-2" />}
        </button>
      </div>

      {/* Mobile side navigation */}
      {isOpen && (
        <div className="lg:hidden">
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/40  "
            onClick={() => setIsOpen(false)}
            aria-hidden
          />
          {/* Slide-in panel */}
          <div className="fixed right-0 top-0 z-50 flex h-full w-72 flex-col bg-card shadow-xl">
            <div className="flex items-center justify-between px-6 py-5 border-b border-border">
              <span className="text-base font-semibold text-foreground">Menu</span>
              <button
                onClick={() => setIsOpen(false)}
                className="text-foreground"
                aria-label="Close navigation menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="flex flex-1 flex-col gap-4 px-6 py-5">
              <Link
                href="/"
                className="text-sm font-medium text-foreground"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services"
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link
                href="/aboutus"
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                About Us
              </Link>
              <Link
                href="/contactus"
                className="text-sm font-medium text-muted-foreground"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </Link>
              <div className="mt-4">
                <Link
                  href="/contactus"
                  className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                  onClick={() => setIsOpen(false)}
                >
                  Book a Session
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}
