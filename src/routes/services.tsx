import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { services } from "@/data/site";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Web Design, SEO, AI Automation & Marketing | The CUL Group" },
      {
        name: "description",
        content:
          "Explore The CUL Group's services: website design & development, SEO & Google Maps, AI & business automation, and digital marketing & growth.",
      },
      {
        property: "og:title",
        content: "Services — Web Design, SEO, AI Automation & Marketing | The CUL Group",
      },
      {
        property: "og:description",
        content: "Four services, one growth partner: websites, search, automation and marketing.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <Reveal direction="right">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Services</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Everything you need to win online.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Each service works beautifully on its own — and even better together. Start where it hurts
            most; we'll build from there.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl space-y-6 px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        {services.map((service, i) => (
          <Reveal key={service.slug} direction="left" delay={i * 60}>
            <article className="grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-2">
              {/* Image enters from the left, copy from the right */}
              <img
                src={service.image}
                alt={service.name}
                width={1200}
                height={1200}
                loading="lazy"
                className="h-full max-h-[420px] w-full object-cover"
              />
              <div className="flex flex-col justify-center p-8 lg:p-14">
                <p className="font-display text-sm font-semibold text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h2 className="mt-2 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {service.name}
                </h2>
                <p className="mt-3 text-lg font-medium text-foreground/90">{service.tagline}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{service.summary}</p>
                <ul className="mt-5 flex flex-wrap gap-2">
                  {service.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="rounded-full border border-border bg-background px-3.5 py-1.5 text-xs font-medium text-muted-foreground"
                    >
                      {outcome}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/services/$slug"
                  params={{ slug: service.slug }}
                  className="group mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground/85"
                >
                  Explore this service
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                </Link>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Reveal direction="right">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Not sure which service you need?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-background/75">
              Most businesses don't need everything at once. Tell us where you are and we'll point you
              to the highest-impact first move.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              Get a recommendation
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
