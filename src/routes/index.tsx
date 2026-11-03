
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Globe2,
  Search,
  Bot,
  TrendingUp,
  ShieldCheck,
  Zap,
  Workflow,
  Phone,
  MapPin,
  Sparkles,
  MoveUpRight,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { heroImage, services, site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "CUL Group | Digital Experiences & Business Growth",
      },
      {
        name: "description",
        content:
          "The CUL Group helps businesses grow online through custom website design, local SEO, Google Business Profile optimization, AI automation and digital marketing.",
      },
      {
        property: "og:title",
        content: "The CUL Group | Digital, Thoughtfully Done",
      },
      {
        property: "og:description",
        content:
          "Thoughtful websites, smarter digital strategy and practical automation for ambitious businesses.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const serviceIcons = [Globe2, Search, Bot, TrendingUp];

const process = [
  {
    number: "01",
    title: "Discover",
    description:
      "We take time to understand your business, your audience and what success looks like for you.",
    icon: Search,
  },
  {
    number: "02",
    title: "Strategise",
    description:
      "We identify the right opportunities and create a clear direction for your digital presence.",
    icon: Workflow,
  },
  {
    number: "03",
    title: "Create",
    description:
      "We bring the strategy to life through considered design, technology and execution.",
    icon: Globe2,
  },
  {
    number: "04",
    title: "Evolve",
    description:
      "We help you identify the next opportunities as your business and digital needs develop.",
    icon: TrendingUp,
  },
];

const principles = [
  {
    number: "01",
    title: "Purposeful design",
    description:
      "Every detail has a reason. We focus on experiences that look considered and feel effortless to use.",
    icon: Sparkles,
  },
  {
    number: "02",
    title: "Built with care",
    description:
      "We value responsive layouts, performance, usability and thoughtful implementation.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Smarter systems",
    description:
      "We explore practical technology and automation that can make everyday business tasks easier.",
    icon: Zap,
  },
];

function Index() {
  return (
    <main className="overflow-hidden bg-background text-foreground">

      {/* HERO */}
      <section className="relative isolate min-h-[88vh] overflow-hidden">
        <div
          className="pointer-events-none absolute -right-40 -top-32 -z-10 size-[550px] rounded-full bg-primary/10 blur-[150px]"
          aria-hidden="true"
        />

        <div className="mx-auto grid max-w-[1440px] items-center gap-12 px-5 pb-20 pt-16 sm:px-8 sm:pt-24 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-14 lg:pb-28 lg:pt-28">

          <Reveal direction="right">
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.3em] text-primary sm:text-xs">
                The CUL Group · Digital Agency
              </p>
            </div>

            <h1 className="mt-8 max-w-3xl font-display text-[3.5rem] font-medium leading-[0.98] tracking-[-0.055em] sm:text-7xl lg:text-[5.8rem] xl:text-[6.4rem]">
              Your next stage of growth starts{" "}
              <span className="font-display italic text-primary">
                online.
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              We create thoughtful digital experiences that help businesses
              show up with confidence, connect with the right people and move
              forward with purpose.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex min-h-14 items-center justify-center gap-5 rounded-full bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_-12px_hsl(var(--primary)/0.5)]"
              >
                Start a conversation
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="group inline-flex min-h-14 items-center justify-center gap-4 rounded-full border border-border px-8 py-4 text-sm font-semibold transition-all duration-300 hover:border-primary hover:text-primary"
              >
                Explore our services
                <MoveUpRight className="size-4 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </Link>
            </div>

            <div className="mt-12 flex flex-wrap items-center gap-x-7 gap-y-4 border-t border-border pt-7">
              {["Thoughtful strategy", "Considered design", "Practical technology"].map(
                (item) => (
                  <span
                    key={item}
                    className="flex items-center gap-2 text-xs text-muted-foreground"
                  >
                    <Check className="size-3.5 text-primary" />
                    {item}
                  </span>
                ),
              )}
            </div>
          </Reveal>

          <Reveal direction="left" delay={180}>
            <div className="relative mx-auto w-full max-w-[620px]">

              <div className="absolute -inset-3 rounded-[2rem] border border-primary/20 sm:-inset-5" />

              <div className="relative overflow-hidden rounded-[1.7rem] bg-card">
                <img
                  src={heroImage}
                  alt="The CUL Group digital design and business solutions"
                  width={1200}
                  height={1400}
                  fetchPriority="high"
                  className="aspect-[4/4.7] w-full object-cover transition-transform duration-1000 hover:scale-105 sm:aspect-[4/4.5]"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-black/10" />

                <div className="absolute left-6 top-6 flex items-center gap-3 rounded-full border border-white/25 bg-black/25 px-4 py-2.5 backdrop-blur-md">
                  <span className="size-2 rounded-full bg-primary" />
                  <span className="text-[10px] font-medium uppercase tracking-[0.2em] text-white">
                    Digital, thoughtfully done
                  </span>
                </div>

                <div className="absolute bottom-7 left-6 right-6 sm:bottom-10 sm:left-9 sm:right-9">
                  <p className="text-[10px] uppercase tracking-[0.3em] text-white/65">
                    A better way forward
                  </p>
                  <h2 className="mt-3 max-w-md font-display text-3xl font-medium leading-tight text-white sm:text-5xl">
                    Make your digital presence mean more.
                  </h2>
                  <div className="mt-6 h-px w-full bg-white/30" />
                  <div className="mt-4 flex items-center justify-between text-[10px] uppercase tracking-[0.2em] text-white/70">
                    <span>Strategy · Design · Growth</span>
                    <span>01 — 04</span>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-3 hidden items-center gap-3 border border-border bg-card px-5 py-4 shadow-2xl sm:flex sm:-left-8">
                <div className="flex size-10 items-center justify-center bg-primary text-primary-foreground">
                  <Sparkles className="size-5" />
                </div>
                <div>
                  <p className="text-xs font-semibold">One thoughtful partner</p>
                  <p className="mt-1 text-[10px] text-muted-foreground">
                    Across your digital journey
                  </p>
                </div>
              </div>

              <div className="absolute -right-3 top-1/4 hidden border border-border bg-card px-4 py-4 shadow-xl lg:block">
                <p className="text-[9px] uppercase tracking-[0.2em] text-muted-foreground">
                  Our focus
                </p>
                <p className="mt-2 font-display text-xl italic text-primary">
                  Your growth.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* MOVING SERVICE STRIP */}
      <section className="overflow-hidden border-y border-border bg-card py-6">
        <div className="flex w-max animate-marquee gap-10">
          {[0, 1, 2].map((copy) => (
            <div key={copy} className="flex items-center gap-10">
              {services.map((service) => (
                <span
                  key={`${copy}-${service.slug}`}
                  className="flex items-center gap-10 whitespace-nowrap font-display text-lg italic text-muted-foreground sm:text-xl"
                >
                  {service.name}
                  <span className="size-1.5 rounded-full bg-primary" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-40">
        <div className="grid gap-12 lg:grid-cols-[0.35fr_1fr] lg:gap-20">
          <Reveal direction="right">
            <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Our philosophy
            </p>
          </Reveal>

          <Reveal direction="left" delay={100}>
            <h2 className="max-w-5xl font-display text-4xl font-medium leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              The digital world moves fast. Your business deserves a partner
              who thinks{" "}
              <span className="italic text-primary">beyond the ordinary.</span>
            </h2>

            <div className="mt-9 flex flex-col gap-7 border-t border-border pt-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-xl text-sm leading-8 text-muted-foreground sm:text-base">
                At The CUL Group, we bring strategy, design and technology
                together to help businesses build a stronger and more useful
                online presence.
              </p>

              <Link
                to="/about"
                className="group inline-flex shrink-0 items-center gap-3 text-sm font-semibold transition-colors hover:text-primary"
              >
                Discover our approach
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-card py-24 sm:py-32 lg:py-36">
        <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-14">

          <Reveal direction="up">
            <div className="flex flex-col justify-between gap-7 lg:flex-row lg:items-end">
              <div>
                <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
                  <span className="h-px w-8 bg-primary" />
                  What we do
                </p>
                <h2 className="mt-6 max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
                  Digital solutions,{" "}
                  <span className="italic text-primary">considered.</span>
                </h2>
              </div>

              <p className="max-w-md text-sm leading-8 text-muted-foreground">
                The right digital foundations can change how your business
                presents itself, connects with customers and operates every day.
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => {
              const Icon = serviceIcons[index] ?? Globe2;

              return (
                <Reveal
                  key={service.slug}
                  direction={index % 2 === 0 ? "left" : "right"}
                  delay={index * 100}
                >
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="group block h-full border border-border bg-background transition-all duration-500 hover:-translate-y-2 hover:border-primary/50 hover:shadow-2xl"
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        width={1200}
                        height={750}
                        loading="lazy"
                        className="aspect-[16/9] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />

                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70" />

                      <div className="absolute left-6 top-6 flex size-12 items-center justify-center border border-white/30 bg-black/25 text-white backdrop-blur-md">
                        <Icon className="size-5" />
                      </div>

                      <div className="absolute bottom-5 right-5 flex size-11 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform duration-500 group-hover:rotate-45">
                        <ArrowRight className="size-5" />
                      </div>
                    </div>

                    <div className="p-7 sm:p-9">
                      <div className="flex items-center justify-between">
                        <p className="text-[10px] uppercase tracking-[0.22em] text-primary">
                          Digital solution
                        </p>
                        <span className="font-display text-lg italic text-muted-foreground">
                          0{index + 1}
                        </span>
                      </div>

                      <h3 className="mt-5 font-display text-2xl font-medium sm:text-3xl">
                        {service.name}
                      </h3>

                      <p className="mt-4 text-sm leading-7 text-muted-foreground">
                        {service.tagline}
                      </p>

                      <div className="mt-7 flex items-center gap-3 border-t border-border pt-5 text-xs font-semibold uppercase tracking-[0.12em] transition-colors group-hover:text-primary">
                        Discover this service
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-2" />
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>

          <Reveal direction="up" delay={100}>
            <div className="mt-12 flex flex-col items-start justify-between gap-5 border-t border-border pt-8 sm:flex-row sm:items-center">
              <p className="text-sm text-muted-foreground">
                Looking for something specific? Let's discuss your requirements.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center gap-3 text-sm font-semibold text-primary"
              >
                Talk to our team
                <ArrowRight className="size-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
      
      {/* PROCESS */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div
          className="pointer-events-none absolute -right-40 top-0 size-[500px] rounded-full bg-primary/10 blur-[140px]"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-36">
          <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr]">

            <Reveal direction="right">
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
                <span className="h-px w-8 bg-primary" />
                How we work
              </p>

              <h2 className="mt-7 font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
                Thoughtful from the{" "}
                <span className="italic text-primary">very beginning.</span>
              </h2>

              <p className="mt-7 max-w-md text-sm leading-8 text-background/65 sm:text-base">
                Great digital work is not just about how something looks. It
                starts with understanding the problem, finding the right
                direction and paying attention to every detail.
              </p>

              <Link
                to="/about"
                className="group mt-9 inline-flex items-center gap-4 border-b border-primary pb-3 text-sm font-semibold transition-colors hover:text-primary"
              >
                More about our approach
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>

            <div>
              {process.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.number} direction="left" delay={index * 100}>
                    <div className="group flex gap-5 border-b border-background/15 py-7 first:pt-0 sm:gap-8 sm:py-9">
                      <div className="font-display text-2xl italic text-primary/70 sm:text-3xl">
                        {item.number}
                      </div>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-4">
                          <h3 className="font-display text-2xl font-medium sm:text-3xl">
                            {item.title}
                          </h3>
                          <Icon className="size-5 text-primary transition-transform duration-300 group-hover:rotate-12" />
                        </div>

                        <p className="mt-3 max-w-lg text-sm leading-7 text-background/60">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* BRAND PRINCIPLES */}
      <section className="mx-auto max-w-[1440px] px-5 py-24 sm:px-8 sm:py-32 lg:px-14 lg:py-36">
        <Reveal direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
              The CUL difference
            </p>

            <h2 className="mt-6 font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              Details that make{" "}
              <span className="italic text-primary">a difference.</span>
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-sm leading-8 text-muted-foreground sm:text-base">
              We believe that quality is found in the details — from the first
              conversation to the final experience.
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-0 border-y border-border sm:grid-cols-3 sm:divide-x sm:divide-border">
          {principles.map((item, index) => {
            const Icon = item.icon;

            return (
              <Reveal key={item.number} direction="up" delay={index * 100}>
                <article className="group h-full px-5 py-9 transition-colors duration-300 hover:bg-card sm:px-8 sm:py-12 lg:px-10">
                  <div className="flex items-center justify-between">
                    <span className="font-display text-xl italic text-primary">
                      {item.number}
                    </span>
                    <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>

                  <h3 className="mt-10 font-display text-2xl font-medium">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-sm leading-8 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* LOCATION / CONTACT STRIP */}
      <section className="px-5 pb-24 sm:px-8 sm:pb-32 lg:px-14">
        <Reveal direction="up">
          <div className="mx-auto flex max-w-[1440px] flex-col gap-6 border-y border-border py-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-start gap-4">
              <MapPin className="mt-1 size-5 text-primary" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Based in
                </p>
                <p className="mt-2 text-sm text-muted-foreground">
                  {site.location}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="size-5 text-primary" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.18em]">
                  Speak with us
                </p>
                <a
                  href={site.phoneHref}
                  className="mt-2 block text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {site.phone}
                </a>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-3 text-sm font-semibold text-primary"
            >
              Contact CUL Group
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* FINAL CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-28 lg:px-14">
        <div className="relative mx-auto max-w-[1440px] overflow-hidden bg-foreground text-background">
          <div
            className="pointer-events-none absolute -right-20 -top-40 size-[500px] rounded-full border border-background/10"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -right-5 -top-24 size-[350px] rounded-full border border-background/10"
            aria-hidden="true"
          />

          <div className="relative grid gap-12 p-8 sm:p-12 lg:grid-cols-[1fr_0.65fr] lg:items-center lg:p-20">
            <Reveal direction="right">
              <p className="flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-primary">
                <span className="h-px w-8 bg-primary" />
                Your next chapter
              </p>

              <h2 className="mt-7 max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-7xl">
                Let's create something{" "}
                <span className="italic text-primary">worth remembering.</span>
              </h2>

              <p className="mt-7 max-w-lg text-sm leading-8 text-background/65 sm:text-base">
                Tell us about your business, your ideas and where you want to go.
                We would love to explore what we can build together.
              </p>
            </Reveal>

            <Reveal direction="left" delay={120}>
              <div className="border border-background/20 bg-background/[0.04] p-7 sm:p-9">
                <p className="text-[10px] uppercase tracking-[0.25em] text-primary">
                  Start a conversation
                </p>

                <h3 className="mt-5 font-display text-3xl font-medium">
                  Your idea deserves a thoughtful approach.
                </h3>

                <p className="mt-4 text-sm leading-7 text-background/60">
                  Get in touch and tell us what you have in mind.
                </p>

                <Link
                  to="/contact"
                  className="group mt-8 flex min-h-14 items-center justify-between gap-4 bg-primary px-6 py-4 text-sm font-semibold text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                >
                  Discuss your project
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={site.phoneHref}
                  className="mt-5 flex items-center gap-3 text-sm text-background/75 transition-colors hover:text-primary"
                >
                  <Phone className="size-4 text-primary" />
                  {site.phone}
                </a>

                <a
                  href={`mailto:${site.email}`}
                  className="mt-4 block break-all text-sm text-background/75 transition-colors hover:text-primary"
                >
                  {site.email}
                </a>

                <div className="mt-7 border-t border-background/15 pt-5">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-background/45">
                    Business hours
                  </p>
                  <p className="mt-2 text-xs text-background/65">
                    {site.hours}
                  </p>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
      }

                
