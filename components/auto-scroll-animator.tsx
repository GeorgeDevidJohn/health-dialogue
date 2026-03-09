"use client"

import { useEffect } from "react"

const SELECTORS = [
  "main section",
  "main section > div > div",
  "main section > div > div > div",
  "main h1",
  "main h2",
  "main h3",
  "main p",
  "main article",
  "main img",
  "main a.inline-flex",
  "main iframe",
  "main ul",
].join(", ")

export function AutoScrollAnimator() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(SELECTORS)

    elements.forEach((el) => {
      if (el.closest("header") || el.closest("nav")) return
      if (el.dataset.animated) return
      el.dataset.animated = "true"
      el.classList.add("scroll-fade")
    })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            ;(entry.target as HTMLElement).classList.add("scroll-fade-visible")
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.08 }
    )

    document
      .querySelectorAll<HTMLElement>(".scroll-fade")
      .forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return null
}
