
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  MoveUpRight,
  Sparkles,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/reveal";
import { services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      {
        title: "Our Services — Web Design, SEO, AI & Marketing | The CUL Group",
      },
      {
        name: "description",
        content:
          "Explore The CUL Group's digital services: premium website design, SEO, Google Maps visibility, AI automation and digital marketing.",
      },
      {
        property: "og:title",
        content: "Our Services — The CUL Group",
      },
      {
        property: "og:description",
        content:
          "Websites, search visibility, AI automation and digital marketing. One connected digital growth partner.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="overflow-hidden bg-background">

      {/* HERO */}
      <section className="px-4 pb-16 pt-20 sm:px-6 lg:px-8 lg:pb-24 lg:pt-28">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="flex items-center gap-3">
              <span className="h-px w-10 bg-primary" />
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
                The CUL Group / What We Do
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="mt-8 max-w-5xl font-display text-5xl font-medium leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-8xl">
              Digital solutions.
              <br />
              <span className="italic text-primary">Designed to move you forward.</span>
            </h1>
          </Reveal>

          <div className="mt-12 grid gap-8 border-t border-border pt-8 lg:grid-cols-2 lg:gap-20">
            <Reveal direction="left">
              <p className="max-w-xl text-xl leading-relaxed text-foreground sm:text-2xl">
                A connected approach to building your presence, reaching your audience and growing your business.
              </p>
            </Reveal>
            <Reveal direction="right">
              <p className="max-w-lg text-sm leading-8 text-muted-foreground sm:text-base">
                From the first impression to the systems behind the scenes, we bring together the digital capabilities businesses need to compete and grow. Choose a service or combine them into one connected strategy.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* SERVICE INDEX */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 sm:grid-cols-4">
          {services.map((service, i) => (
            <a
              key={service.slug}
              href={`#${service.slug}`}
              className="group border-b border-r border-border p-5 transition-colors hover:bg-background sm:border-b-0 sm:p-7"
            >
              <span className="font-display text-sm italic text-primary">
                0{i + 1}
              </span>
              <p className="mt-3 text-sm font-medium leading-snug text-foreground transition-colors group-hover:text-primary">
                {service.shortName}
              </p>
              <ArrowRight className="mt-5 size-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-primary" />
            </a>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <div className="mb-14 flex flex-col justify-between gap-5 border-b border-border pb-8 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
                  Our capabilities
                </p>
                <h2 className="mt-4 font-display text-3xl font-medium text-foreground sm:text-5xl">
                  Four ways to move forward.
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-7 text-muted-foreground">
                Different capabilities. One connected vision for your business.
              </p>
            </div>
          </Reveal>

          <div className="space-y-20 lg:space-y-28">
            {services.map((service, i) => (
              <Reveal key={service.slug}>
                <article
                  id={service.slug}
                  className="grid scroll-mt-24 items-center gap-9 lg:grid-cols-2 lg:gap-16"
                >
                  {/* IMAGE */}
                  <div className={`group relative overflow-hidden ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                    <img
                      src={service.image}
                      alt={service.name}
                      width={1400}
                      height={1100}
                      loading="lazy"
                      className="aspect-[5/4] w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
                    <div className="absolute bottom-6 left-6 flex items-center gap-3">
                      <span className="font-display text-5xl italic text-white/90">
                        0{i + 1}
                      </span>
                      <span className="h-px w-12 bg-white/70" />
                      <span className="text-[10px] uppercase tracking-[0.25em] text-white">
                        The CUL Group
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className={i % 2 === 1 ? "lg:order-1" : ""}>
                    <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
                      Service / 0{i + 1}
                    </p>

                    <h3 className="mt-5 font-display text-3xl font-medium leading-tight text-foreground sm:text-4xl lg:text-5xl">
                      {service.name}
                    </h3>

                    <p className="mt-5 font-display text-xl italic text-primary sm:text-2xl">
                      {service.tagline}
                    </p>

                    <p className="mt-5 text-sm leading-8 text-muted-foreground sm:text-base">
                      {service.summary}
                    </p>

                    <div className="mt-8 border-t border-border pt-6">
                      <p className="text-[10px] font-semibold uppercase tracking-[0.25em] text-foreground">
                        What this can help deliver
                      </p>

                      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                        {service.outcomes.map((outcome) => (
                          <li
                            key={outcome}
                            className="flex items-start gap-3 text-sm text-muted-foreground"
                          >
                            <Check className="mt-0.5 size-4 shrink-0 text-primary" />
                            {outcome}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Link
                      to="/services/$slug"
                      params={{ slug: service.slug }}
                      className="group mt-9 inline-flex items-center gap-4 border-b border-primary pb-3 text-xs font-semibold uppercase tracking-[0.2em] text-foreground transition-colors hover:text-primary"
                    >
                      Explore this service
                      <MoveUpRight className="size-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Link>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative overflow-hidden bg-foreground px-4 py-24 text-background sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full border border-background/10" />
        <div className="pointer-events-none absolute -right-12 -top-12 size-56 rounded-full border border-background/10" />

        <div className="relative mx-auto max-w-7xl">
          <Reveal>
            <div className="grid items-end gap-10 lg:grid-cols-2">
              <div>
                <div className="flex items-center gap-3">
                  <Sparkles className="size-4 text-primary" />
                  <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
                    Let's find your next move
                  </p>
                </div>

                <h2 className="mt-7 max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-7xl">
                  Not sure where to begin?
                  <br />
                  <span className="italic text-primary">Let's talk.</span>
                </h2>
              </div>

              <div>
                <p className="max-w-md text-sm leading-8 text-background/70 sm:text-base">
                  Every business has different priorities. Tell us what you're trying to achieve, and let's explore the right digital direction for you.
                </p>

                <Link
                  to="/contact"
                  className="group mt-8 inline-flex items-center gap-4 rounded-full bg-primary px-8 py-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:-translate-y-1"
                >
                  Get in touch
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

    </main>
  );
}
