import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  MapPin,
  Phone,
  Sparkles,
  Globe2,
  Search,
  Bot,
  TrendingUp,
  ShieldCheck,
  Zap,
  Workflow,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { heroImage, services, site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "CUL Group | Web Design, Local SEO & AI Automation",
      },
      {
        name: "description",
        content:
          "CUL Group helps businesses build a stronger online presence with custom websites, local SEO, Google Business Profile optimization, AI automation and digital marketing.",
      },
      {
        property: "og:title",
        content: "CUL Group | Digital Solutions for Business Growth",
      },
      {
        property: "og:description",
        content:
          "Custom websites, local search optimization and practical AI automation for businesses ready to grow online.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const serviceIcons = [Globe2, Search, Bot, TrendingUp];

  return (
    <>
      {/* PREMIUM HERO */}
      <section className="relative isolate overflow-hidden">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-40 -top-40 -z-10 size-[520px] rounded-full bg-amber-200/30 blur-[120px]"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-40 -left-40 -z-10 size-[420px] rounded-full bg-stone-300/40 blur-[100px]"
        />

        <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-16 pt-14 sm:px-8 sm:pt-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16 lg:px-10 lg:pb-24 lg:pt-24">
          <Reveal direction="right">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card/80 px-4 py-2 text-xs font-semibold tracking-wide text-muted-foreground shadow-sm">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-500 opacity-50" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-600" />
              </span>
              DIGITAL STRATEGY. BUILT AROUND YOU.
            </div>

            <h1 className="mt-7 max-w-3xl font-display text-5xl font-bold leading-[1.02] tracking-[-0.055em] text-foreground sm:text-6xl lg:text-7xl xl:text-[5.3rem]">
              Your next stage of growth starts{" "}
              <span className="relative inline-block">
                <span className="relative z-10">online.</span>
                <span
                  aria-hidden="true"
                  className="absolute bottom-1 left-0 -z-0 h-3 w-full -rotate-2 rounded-sm bg-amber-300/70 sm:bottom-2 sm:h-4"
                />
              </span>
            </h1>

            <p className="mt-7 max-w-xl text-base leading-8 text-muted-foreground sm:text-lg">
              We help businesses show up, stand out and turn their digital
              presence into a practical growth tool — through thoughtful
              website design, local SEO and intelligent automation.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                to="/contact"
                className="group inline-flex min-h-13 items-center justify-center gap-3 rounded-full bg-foreground px-7 py-4 text-sm font-semibold text-background shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:bg-foreground/85 hover:shadow-xl"
              >
                Let's discuss your project
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/work"
                className="inline-flex min-h-13 items-center justify-center gap-2 rounded-full border border-border bg-background/70 px-7 py-4 text-sm font-semibold text-foreground transition-all duration-300 hover:border-foreground/30 hover:bg-card"
              >
                Explore our work
                <ArrowRight className="size-4" />
              </Link>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3 text-sm text-muted-foreground">
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4" />
                Tailored solutions
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4" />
                Clear communication
              </span>
              <span className="inline-flex items-center gap-2">
                <CheckCircle2 className="size-4" />
                Built for your goals
              </span>
            </div>

            <a
              href={site.phoneHref}
              className="mt-7 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <Phone className="size-4" />
              Prefer a call? {site.phone}
            </a>
          </Reveal>

          <Reveal direction="left" delay={150}>
            <div className="relative mx-auto w-full max-w-xl">
              <div className="absolute -inset-3 rotate-3 rounded-[2rem] border border-foreground/10 bg-card/60 sm:-inset-4" />

              <div className="relative overflow-hidden rounded-[1.7rem] border border-border bg-card p-2 shadow-2xl shadow-black/10 sm:p-3">
                <div className="relative overflow-hidden rounded-[1.25rem]">
                  <img
                    src={heroImage}
                    alt="CUL Group digital design and business solutions"
                    width={1200}
                    height={1400}
                    fetchPriority="high"
                    className="aspect-[4/4.5] w-full object-cover transition-transform duration-700 hover:scale-[1.025] sm:aspect-[4/4.2]"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-black/5" />

                  <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/25 bg-black/25 px-3 py-2 text-xs font-medium text-white backdrop-blur-md">
                    <Sparkles className="size-3.5" />
                    Digital, thoughtfully done
                  </div>

                  <div className="absolute bottom-5 left-5 right-5 text-white sm:bottom-7 sm:left-7 sm:right-7">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/75">
                      THE CUL GROUP
                    </p>
                    <h2 className="mt-2 max-w-sm font-display text-3xl font-semibold leading-tight sm:text-4xl">
                      Better digital experiences. Clearer direction.
                    </h2>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-5 -left-2 flex items-center gap-3 rounded-2xl border border-border bg-background p-4 shadow-xl sm:-left-8 sm:p-5">
                <div className="flex size-11 items-center justify-center rounded-xl bg-foreground text-background">
                  <Zap className="size-5" />
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    Strategy meets execution
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    One partner for your digital needs
                  </p>
                </div>
              </div>

              <div className="absolute -right-1 top-1/3 hidden rounded-2xl border border-border bg-background/95 p-4 shadow-xl backdrop-blur sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-amber-100 text-amber-900">
                    <Globe2 className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Built for the web</p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Design · Search · Automation
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICE MARQUEE */}
      <section
        className="overflow-hidden border-y border-border bg-card py-5"
        aria-label="CUL Group services"
      >
        <div className="flex w-max animate-marquee gap-8 pr-8 sm:gap-12 sm:pr-12">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-8 sm:gap-12">
              {services.map((service) => (
                <span
                  key={`${copy}-${service.slug}`}
                  className="flex items-center gap-8 whitespace-nowrap font-display text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground sm:gap-12 sm:text-sm"
                >
                  {service.name}
                  <span className="size-1.5 rounded-full bg-amber-500" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-32">
        <div className="grid gap-7 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <Reveal direction="right">
            <p className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              <span className="h-px w-7 bg-foreground/50" />
              What we do
            </p>
            <h2 className="mt-5 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
              Everything you need to move your business forward.
            </h2>
          </Reveal>

          <Reveal direction="left" delay={100}>
            <p className="max-w-lg text-base leading-8 text-muted-foreground lg:ml-auto">
              From your first website to smarter workflows, we bring your
              digital essentials together with a focus on quality, usability
              and your business goals.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:mt-16">
          {services.map((service, index) => {
            const ServiceIcon = serviceIcons[index] ?? Globe2;

            return (
              <Reveal
                key={service.slug}
                direction={index % 2 === 0 ? "left" : "right"}
                delay={index * 90}
              >
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="group relative flex h-full flex-col overflow-hidden rounded-[1.6rem] border border-border bg-card transition-all duration-500 hover:-translate-y-1.5 hover:border-foreground/20 hover:shadow-2xl hover:shadow-black/5"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.name}
                      width={1200}
                      height={750}
                      loading="lazy"
                      className="aspect-[16/8.5] w-full object-cover transition-transform duration-700 group-hover:scale-[1.045]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-transparent to-transparent opacity-80" />
                    <span className="absolute left-5 top-5 flex size-12 items-center justify-center rounded-2xl border border-white/30 bg-white/90 text-neutral-900 shadow-lg backdrop-blur-sm">
                      <ServiceIcon className="size-5" />
                    </span>
                    <span className="absolute bottom-5 right-5 flex size-10 items-center justify-center rounded-full bg-white text-neutral-900 transition-transform duration-300 group-hover:rotate-[-45deg]">
                      <ArrowRight className="size-4" />
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6 sm:p-8">
                    <p className="text-xs font-semibold uppercase tracking-[0.16em] text-muted-foreground">
                      0{index + 1} / Digital solutions
                    </p>
                    <h3 className="mt-3 font-display text-xl font-bold tracking-tight text-foreground sm:text-2xl">
                      {service.name}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-7 text-muted-foreground sm:text-base">
                      {service.tagline}
                    </p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                      Explore this service
                      <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </section>
            {/* HOW WE HELP */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-0 size-96 rounded-full bg-white/5 blur-[100px]"
        />

        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <Reveal direction="right">
              <p className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-background/60">
                <span className="h-px w-7 bg-background/50" />
                The CUL approach
              </p>

              <h2 className="mt-5 font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
                Good work starts with understanding your business.
              </h2>

              <p className="mt-6 max-w-lg text-base leading-8 text-background/70">
                No unnecessary complexity. No one-size-fits-all solutions.
                Just a thoughtful process designed around your audience,
                priorities and next steps.
              </p>

              <Link
                to="/about"
                className="group mt-8 inline-flex items-center gap-3 rounded-full border border-background/25 px-6 py-3.5 text-sm font-semibold transition-all duration-300 hover:border-background/60 hover:bg-background/10"
              >
                Get to know CUL Group
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </Reveal>

            <div className="space-y-0">
              {[
                {
                  number: "01",
                  title: "Understand",
                  description:
                    "We learn about your business, customers, competition and what you want to achieve.",
                  icon: Search,
                },
                {
                  number: "02",
                  title: "Plan",
                  description:
                    "We recommend a practical approach with clear priorities, deliverables and expectations.",
                  icon: Workflow,
                },
                {
                  number: "03",
                  title: "Create",
                  description:
                    "We build your solution with attention to design, usability, performance and detail.",
                  icon: Globe2,
                },
                {
                  number: "04",
                  title: "Improve",
                  description:
                    "We help you identify opportunities to refine your online presence as your needs evolve.",
                  icon: TrendingUp,
                },
              ].map((item, index) => {
                const StepIcon = item.icon;

                return (
                  <Reveal key={item.number} direction="left" delay={index * 90}>
                    <div className="group flex gap-5 border-b border-background/15 py-6 first:pt-0 last:border-b-0">
                      <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl border border-background/15 bg-background/[0.06] transition-colors duration-300 group-hover:bg-background/15">
                        <StepIcon className="size-5" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3">
                          <span className="text-xs font-semibold tracking-widest text-background/45">
                            {item.number}
                          </span>
                          <h3 className="font-display text-xl font-semibold">
                            {item.title}
                          </h3>
                        </div>
                        <p className="mt-2 max-w-lg text-sm leading-7 text-background/65">
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

      {/* TRUST & CAPABILITIES */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
        <Reveal direction="up">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              The details matter
            </p>

            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Built with purpose. Designed for real people.
            </h2>

            <p className="mt-5 text-base leading-8 text-muted-foreground">
              Every project deserves a thoughtful foundation. We focus on
              the practical details that make digital experiences easier to
              use, manage and improve.
            </p>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              icon: ShieldCheck,
              title: "Security-minded",
              description:
                "Considered implementation and sensible security practices.",
            },
            {
              icon: Zap,
              title: "Performance-focused",
              description:
                "Attention to loading speed, usability and responsive layouts.",
            },
            {
              icon: Search,
              title: "Search-ready",
              description:
                "SEO fundamentals that help search engines understand your content.",
            },
            {
              icon: Workflow,
              title: "Automation-aware",
              description:
                "Practical workflows that can reduce repetitive business tasks.",
            },
          ].map((item, index) => {
            const FeatureIcon = item.icon;

            return (
              <Reveal key={item.title} direction="up" delay={index * 80}>
                <article className="group h-full rounded-3xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-foreground/20 hover:shadow-xl hover:shadow-black/5 sm:p-7">
                  <div className="flex size-12 items-center justify-center rounded-2xl bg-background text-foreground ring-1 ring-border transition-colors duration-300 group-hover:bg-foreground group-hover:text-background">
                    <FeatureIcon className="size-5" />
                  </div>

                  <h3 className="mt-5 font-display text-lg font-bold text-foreground">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>

        <Reveal direction="up" delay={120}>
          <div className="mt-8 flex flex-col gap-4 rounded-3xl border border-border bg-card p-6 sm:flex-row sm:items-center sm:justify-between sm:p-8">
            <div className="flex items-start gap-4">
              <div className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-background ring-1 ring-border">
                <MapPin className="size-5" />
              </div>

              <div>
                <h3 className="font-display text-lg font-bold text-foreground">
                  A partner for your next digital step
                </h3>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">
                  Based in {site.location}. Working with your business goals
                  in mind.
                </p>
              </div>
            </div>

            <Link
              to="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-background"
            >
              Start a conversation
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* PREMIUM CTA */}
      <section className="px-5 pb-20 sm:px-8 sm:pb-24 lg:px-10 lg:pb-28">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-foreground text-background">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-20 -top-32 size-96 rounded-full border border-background/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-8 -top-20 size-72 rounded-full border border-background/10"
          />
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -bottom-40 left-1/3 size-80 rounded-full bg-white/[0.04] blur-3xl"
          />

          <div className="relative grid gap-10 p-7 sm:p-10 lg:grid-cols-[1fr_0.7fr] lg:items-center lg:gap-16 lg:p-16">
            <Reveal direction="right">
              <p className="inline-flex items-center gap-2 rounded-full border border-background/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-background/75">
                <Sparkles className="size-3.5" />
                Let's build something meaningful
              </p>

              <h2 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
                Ready for a stronger online presence?
              </h2>

              <p className="mt-5 max-w-xl text-base leading-8 text-background/70">
                Tell us where your business is today and where you want it to
                go. Let's explore the right website, search or automation
                solution for your goals.
              </p>

              <ul className="mt-6 space-y-3 text-sm text-background/80">
                {[
                  "A conversation about your business goals",
                  "Practical recommendations for your next steps",
                  "Clear communication from the start",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 size-4 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal direction="left" delay={120}>
              <div className="rounded-3xl border border-background/15 bg-background/[0.06] p-6 backdrop-blur-sm sm:p-8">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-background/55">
                  Get in touch
                </p>

                <h3 className="mt-3 font-display text-2xl font-bold">
                  Tell us about your project.
                </h3>

                <p className="mt-3 text-sm leading-7 text-background/65">
                  Reach out to discuss your requirements and explore the
                  available options.
                </p>

                <Link
                  to="/contact"
                  className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-background px-6 py-4 text-sm font-bold text-foreground transition-all duration-300 hover:-translate-y-0.5 hover:bg-background/90"
                >
                  Contact CUL Group
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={site.phoneHref}
                  className="mt-4 flex items-center justify-center gap-2 rounded-full border border-background/20 px-6 py-3.5 text-sm font-semibold transition-colors hover:bg-background/10"
                >
                  <Phone className="size-4" />
                  {site.phone}
                </a>

                <a
                  href={`mailto:${site.email}`}
                  className="mt-5 block break-all text-center text-sm text-background/65 underline decoration-background/25 underline-offset-4 transition-colors hover:text-background"
                >
                  {site.email}
                </a>

                <p className="mt-5 text-center text-xs text-background/45">
                  {site.hours}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
