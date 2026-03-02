import Image from "next/image"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    title: "Every Story Has Its Own Purpose",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "/images/blog-1.jpg",
    date: "22",
    month: "Nov",
    author: "MindTalk",
  },
  {
    title: "Take Some Time To Travel Within",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "/images/blog-2.jpg",
    date: "22",
    month: "Nov",
    author: "MindTalk",
  },
  {
    title: "Don't Bury Your Emotions Within",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.",
    image: "/images/blog-3.jpg",
    date: "22",
    month: "Nov",
    author: "MindTalk",
  },
]

export function BlogSection() {
  return (
    <section className="bg-secondary py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">
            News & Article
          </p>
          <h2 className="font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
            Our Latest Blog
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="group overflow-hidden rounded-2xl bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md">
              <div className="relative overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  width={400}
                  height={250}
                  className="h-[220px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute left-4 top-4 rounded-lg bg-primary px-3 py-1.5 text-center">
                  <p className="text-lg font-bold leading-tight text-primary-foreground">{post.date}</p>
                  <p className="text-xs font-medium text-primary-foreground/80">{post.month}</p>
                </div>
              </div>
              <div className="p-6">
                <div className="mb-3 flex items-center gap-2 text-xs text-muted-foreground">
                  <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span>{post.author}</span>
                </div>
                <h3 className="mb-3 font-serif text-lg font-semibold leading-snug text-card-foreground transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
                <a href="#" className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-opacity hover:opacity-80">
                  Read More
                  <ArrowRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
