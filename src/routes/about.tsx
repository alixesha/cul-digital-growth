
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Compass,
  Handshake,
  LineChart,
  ShieldCheck,
  Sparkles,
  Target,
  Globe2,
  MoveUpRight,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { aboutImage, site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About The CUL Group — Digital Growth Agency" },
      {
        name: "description",
        content:
          "Discover The CUL Group — a digital growth partner combining web design, SEO, AI automation and marketing. Based in San Francisco.",
      },
      { property: "og:title", content: "About The CUL Group" },
      {
        property: "og:description",
        content:
          "One connected team for websites, search visibility, AI automation and digital growth.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

const values = [
  {
    icon: Handshake,
    number: "01",
    title: "Partnership first",
    text: "We believe the best work happens when we're working alongside you. Your goals shape the strategy, and collaboration guides every decision.",
  },
  {
    icon: Target,
    number: "02",
    title: "Purposeful execution",
    text: "Every design choice, campaign and automation should have a reason. We focus on meaningful work instead of unnecessary complexity.",
  },
  {
    icon: LineChart,
    number: "03",
    title: "Growth with direction",
    text: "We connect your digital presence with your business objectives, helping you make informed decisions and build for sustainable growth.",
  },
  {
    icon: ShieldCheck,
    number: "04",
    title: "Built for the long term",
    text: "We value thoughtful design, maintainable technology and dependable systems that can evolve as your business grows.",
  },
];

const capabilities = [
  "Website design & development",
  "SEO & Google Maps visibility",
  "AI-powered business automation",
  "Digital marketing & growth",
];

function AboutPage() {
  return (
    <main className="overflow-hidden bg-background">

      {/* HERO */}
      <section className="relative px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
                The CUL Group / Our Story
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-8 max-w-6xl font-display text-5xl font-medium leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-8xl">
              Different disciplines.
              <br />
              <span className="italic text-primary">One clear vision.</span>
            </h1>
          </Reveal>

          <div className="mt-12 grid gap-8 border-t border-border pt-8 lg:grid-cols-2 lg:gap-20">
            <Reveal direction="left">
              <p className="max-w-xl text-xl leading-relaxed text-foreground sm:text-2xl">
                We bring design, technology and strategy together to help businesses build a stronger digital future.
              </p>
            </Reveal>
            <Reveal direction="right">
              <p className="max-w-lg text-sm leading-8 text-muted-foreground sm:text-base">
                The CUL Group brings essential digital services under one roof. From your first website to search visibility, intelligent automation and marketing, our approach is built around creating a connected digital experience for your business.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EDITORIAL IMAGE */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="group relative overflow-hidden">
              <img
                src={aboutImage}
                alt="Creative collaboration and digital strategy"
                width={1800}
                height={1000}
                className="aspect-[4/3] w-full object-cover transition-transform duration-1000 group-hover:scale-[1.025] sm:aspect-[16/8]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/10" />
              <div className="absolute bottom-6 left-6 right-6 flex flex-col justify-between gap-5 sm:bottom-10 sm:left-10 sm:right-10 sm:flex-row sm:items-end">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/70">
                    Our philosophy
                  </p>
                  <p className="mt-3 max-w-xl font-display text-3xl leading-tight text-white sm:text-5xl">
                    Good digital work should move business forward.
                  </p>
                </div>
                <span className="flex size-12 shrink-0 items-center justify-center rounded-full border border-white/40 text-white">
                  <MoveUpRight size={21} />
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <Reveal direction="left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
              01 / The thinking
            </p>
            <h2 className="mt-6 font-display text-4xl font-medium leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Digital should work as one.
            </h2>
          </Reveal>

          <Reveal direction="right">
            <div className="space-y-6 text-sm leading-8 text-muted-foreground sm:text-base">
              <p>
                A website is only one part of a business's digital presence. It needs to work alongside search visibility, marketing and the systems that keep daily operations moving.
              </p>
              <p>
                When these pieces are disconnected, businesses can end up managing multiple providers, separate strategies and tools that don't communicate with each other.
              </p>
              <p>
                Our approach is to bring these disciplines together. We look at the bigger picture, understand what your business needs and create a digital direction that connects every part of the experience.
              </p>
            </div>

            <div className="mt-10 border-t border-border pt-8">
              <div className="flex items-start gap-4">
                <Sparkles className="mt-1 size-5 shrink-0 text-primary" />
                <p className="font-display text-2xl italic leading-snug text-foreground sm:text-3xl">
                  One connected strategy. A more thoughtful way to grow.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CAPABILITIES */}
      <section className="bg-card px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:gap-24">
          <Reveal direction="left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
              02 / What we bring together
            </p>
            <h2 className="mt-6 font-display text-4xl font-medium leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Everything connected. Nothing overlooked.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-8 text-muted-foreground">
              Our services are designed to complement each other, giving your business a more consistent and considered digital presence.
            </p>
            <Link
              to="/services"
              className="mt-8 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:text-primary"
            >
              Explore our services
              <ArrowRight size={16} />
            </Link>
          </Reveal>

          <div className="border-t border-border">
            {capabilities.map((item, i) => (
              <Reveal key={item} direction="right" delay={i * 90}>
                <div className="group flex items-center justify-between gap-4 border-b border-border py-7">
                  <div className="flex items-center gap-5">
                    <span className="font-display text-sm italic text-primary">
                      0{i + 1}
                    </span>
                    <h3 className="font-display text-xl text-foreground transition-transform duration-300 group-hover:translate-x-2 sm:text-2xl">
                      {item}
                    </h3>
                  </div>
                  <MoveUpRight className="size-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-primary" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex flex-col justify-between gap-6 border-b border-border pb-10 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
                  03 / What guides us
                </p>
                <h2 className="mt-5 max-w-2xl font-display text-4xl font-medium text-foreground sm:text-5xl lg:text-6xl">
                  Principles behind the work.
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-7 text-muted-foreground">
                A few simple principles shape how we think, collaborate and approach every project.
              </p>
            </div>
          </Reveal>

          <div className="mt-8 grid gap-x-10 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.number} direction="right" delay={i * 100}>
                <div className="group border-b border-border py-9">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm italic text-primary">
                      {value.number}
                    </span>
                    <value.icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <h3 className="mt-7 font-display text-2xl font-medium text-foreground sm:text-3xl">
                    {value.title}
                  </h3>
                  <p className="mt-4 max-w-md text-sm leading-7 text-muted-foreground">
                    {value.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* LOCATION / APPROACH */}
      <section className="relative overflow-hidden bg-foreground px-4 py-24 text-background sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute -right-32 -top-32 size-96 rounded-full border border-background/10" />
        <div className="pointer-events-none absolute -right-16 -top-16 size-64 rounded-full border border-background/10" />

        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-24">
          <Reveal direction="left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
              04 / Our perspective
            </p>
            <h2 className="mt-6 font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              Rooted in {site.location}.
              <br />
              <span className="italic text-primary">Ready for what's next.</span>
            </h2>
          </Reveal>

          <Reveal direction="right">
            <p className="text-base leading-8 text-background/70">
              We work with a practical understanding that every business has its own audience, challenges and ambitions. Our role is to bring clarity to the digital side of that journey, wherever your business is headed.
            </p>
            <div className="mt-10 flex items-center gap-4 border-t border-background/15 pt-7">
              <Globe2 className="size-5 text-primary" />
              <div>
                <p className="text-[10px] uppercase tracking-[0.25em] text-background/50">
                  Based in
                </p>
                <p className="mt-1 text-sm text-background">{site.location}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="relative overflow-hidden border border-border px-7 py-14 text-center sm:px-14 sm:py-20">
              <div className="pointer-events-none absolute left-1/2 top-0 size-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/10 blur-3xl" />
              <div className="relative">
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
                  Your next chapter
                </p>
                <h2 className="mx-auto mt-6 max-w-3xl font-display text-4xl font-medium leading-tight text-foreground sm:text-5xl lg:text-7xl">
                  Let's build something that moves you forward.
                </h2>
                <p className="mx-auto mt-6 max-w-lg text-sm leading-7 text-muted-foreground">
                  Tell us where you want to go. We'll help you explore the digital possibilities.
                </p>
                <Link
                  to="/contact"
                  className="mt-9 inline-flex items-center gap-3 rounded-full bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Start a conversation
                  <ArrowRight size={16} />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
