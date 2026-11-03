import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, ArrowRight, CheckCircle2, Phone } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { getService, services, site } from "@/data/site";

export const Route = createFileRoute("/services/$slug")({
  loader: ({ params }) => {
    const service = getService(params.slug);
    if (!service) throw notFound();
    return { service };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData.service.name} — The CUL Group, San Francisco` },
      { name: "description", content: `${loaderData.service.tagline} The CUL Group — ${loaderData.service.summary}` },
      { property: "og:title", content: `${loaderData.service.name} — The CUL Group` },
      { property: "og:description", content: loaderData.service.tagline },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();
  const others = services.filter((s) => s.slug !== service.slug);

  return (
    <>
      {/* Split hero: image from the left, copy from the right */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-10 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-16">
        <Reveal direction="left" className="order-first lg:order-none">
          <img
            src={service.image}
            alt={service.name}
            width={1200}
            height={1200}
            className="aspect-[4/3] w-full rounded-4xl object-cover"
          />
        </Reveal>
        <Reveal direction="right">
          <Link
            to="/services"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="size-4" aria-hidden />
            All services
          </Link>
          <h1 className="mt-5 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            {service.name}
          </h1>
          <p className="mt-5 text-xl font-medium text-foreground/90">{service.tagline}</p>
          <p className="mt-4 leading-relaxed text-muted-foreground">{service.summary}</p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground/85"
            >
              Start a project
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <a
              href={site.phoneHref}
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              <Phone className="size-4" aria-hidden />
              {site.phone}
            </a>
          </div>
        </Reveal>
      </section>

      {/* Outcomes */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-12 sm:grid-cols-3 sm:px-6 lg:px-8">
          {service.outcomes.map((outcome, i) => (
            <Reveal key={outcome} direction="right" delay={i * 100}>
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-foreground" aria-hidden />
                <p className="font-medium text-foreground">{outcome}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Deliverables */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">
        <Reveal direction="right">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">What's included</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Everything in this service.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {service.deliverables.map((item, i) => (
            <Reveal key={item.title} direction="right" delay={i * 80}>
              <div className="h-full rounded-3xl border border-border bg-card p-7">
                <h3 className="font-display text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <Reveal direction="right">
            <p className="text-xs font-semibold uppercase tracking-widest text-background/60">The process</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              How we deliver {service.shortName.toLowerCase()}.
            </h2>
          </Reveal>
          <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((phase, i) => (
              <Reveal key={phase.step} direction="right" delay={i * 100}>
                <p className="font-display text-sm font-semibold text-background/60">{phase.step}</p>
                <h3 className="mt-3 font-display text-xl font-semibold">{phase.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-background/75">{phase.description}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
        <Reveal direction="right">
          <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
            Explore our other services.
          </h2>
        </Reveal>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((other, i) => (
            <Reveal key={other.slug} direction="left" delay={i * 100}>
              <Link
                to="/services/$slug"
                params={{ slug: other.slug }}
                className="group block overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-lg"
              >
                <img
                  src={other.image}
                  alt={other.name}
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="aspect-[16/9] w-full object-cover"
                />
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground">{other.name}</h3>
                  <p className="mt-1.5 text-sm text-muted-foreground">{other.tagline}</p>
                  <span className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
