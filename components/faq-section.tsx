"use client"

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Will you provide services both online and offline?",
    answer: "Yes, we offer both online and offline therapy sessions. In-person sessions are available for local clients, while secure online consultations are provided for international clients or anyone who prefers virtual support. Online sessions are conducted upon request to ensure flexibility and accessibility for all clients."
  },
  {
    question: "How long will a session last?",
    answer: "Each session typically lasts between 45 minutes to 1 hours, depending on the type of therapy and individual client needs. "
  },
  {
    question: "What should I expect during the initial consultation?",
    answer: "During the initial consultation, we will discuss your concerns, goals, and background to better understand your needs. This session helps create a comfortable environment where you can openly share your experiences. We will also outline a personalized therapy plan and explain the recommended approach moving forward."
  },
  {
    question: "Is everything I share kept confidential?",
    answer: "Yes, confidentiality is a core principle of our practice. Everything you share during sessions is kept strictly private and secure. Information will only be disclosed if required by law or if there is a risk of harm to you or others, and this will always be discussed with you beforehand."
  },
]

export function FaqSection() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
          {/* Left content */}
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
              Frequently Asked Questions
            </p>
            <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
              <span className="text-balance">Questions? We Have Answers</span>
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
            We stand committed to supporting individuals in distress and creating a more compassionate, connected society.
            </p>
            <a
              href="/contactus"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-opacity hover:opacity-80"
            >
              See More
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>

          {/* Right accordion */}
          <div>
            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border-b border-border">
                  <AccordionTrigger className="py-5 text-left font-semibold text-foreground hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}
