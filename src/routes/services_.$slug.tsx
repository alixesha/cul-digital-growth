
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Phone,
  Sparkles,
  Target,
  Layers3,
  Workflow,
  ShieldCheck,
} from "lucide-react";
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
      {
        title: `${loaderData.service.name} | The CUL Group`,
      },
      {
        name: "description",
        content: `${loaderData.service.tagline} ${loaderData.service.summary}`,
      },
      {
        property: "og:title",
        content: `${loaderData.service.name} | The CUL Group`,
      },
      {
        property: "og:description",
        content: loaderData.service.tagline,
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
    ],
  }),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();

  const others = services.filter(
    (item) => item.slug !== service.slug
  );

  const featureIcons = [
    Target,
    Layers3,
    Workflow,
    ShieldCheck,
    Sparkles,
    CheckCircle2,
  ];

  return (
    <>
      {/* HERO */}
      <section className="relative overflow-hidden border-b border-border">
        <div className="pointer-events-none absolute -right-40 top-0 size-[500px] rounded-full bg-accent/50 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">

          <Reveal direction="left">
            <div className="relative">
              <div className="absolute -inset-3 rotate-2 rounded-[2rem] border border-border bg-card" />

              <img
                src={service.image}
                alt={service.name}
                width={1200}
                height={1200}
                className="relative aspect-[4/3] w-full rounded-[1.7rem] object-cover shadow-xl"
              />

              <div className="absolute -bottom-5 -left-3 rounded-2xl border border-border bg-background p-4 shadow-xl sm:-left-6">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                    <Sparkles className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      Thoughtful digital solutions
                    </p>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Designed around your business
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="size-4" />
              All services
            </Link>

            <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              <span className="size-2 rounded-full bg-primary" />
              The CUL Group
            </div>

            <h1 className="mt-6 max-w-2xl font-display text-4xl font-bold leading-[1.08] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              {service.name}
              <span className="text-primary">.</span>
            </h1>

            <p className="mt-6 max-w-xl text-xl font-medium leading-relaxed text-foreground/90">
              {service.tagline}
            </p>

            <p className="mt-5 max-w-xl text-base leading-8 text-muted-foreground">
              {service.summary}
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all hover:-translate-y-1 hover:shadow-lg"
              >
                Let's discuss your project
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={site.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-4 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                <Phone className="size-4" />
                {site.phone}
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="size-4" />
                Tailored solutions
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="size-4" />
                Clear communication
              </span>
              <span className="flex items-center gap-2">
                <CheckCircle2 className="size-4" />
                Business-focused
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SERVICE INTRODUCTION */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-20">

          <Reveal direction="left">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              A smarter approach
            </p>

            <h2 className="mt-5 max-w-xl font-display text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Digital solutions built around your business.
            </h2>
          </Reveal>

          <Reveal direction="right">
            <p className="text-base leading-8 text-muted-foreground">
              Every business has different goals, challenges and customers.
              Our approach starts with understanding what matters to you.
              We bring strategy, thoughtful design and practical technology
              together to create a solution that fits your needs.
            </p>

            <p className="mt-5 text-base leading-8 text-muted-foreground">
              From the initial conversation to the final delivery, we focus
              on clear communication, usability and quality at every stage.
            </p>
          </Reveal>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">

          <Reveal direction="up">
            <div className="max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                What's included
              </p>

              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Everything you need to move forward.
              </h2>

              <p className="mt-5 leading-7 text-muted-foreground">
                Explore the key areas covered by this service and how each
                element supports your digital presence.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((item, i) => {
              const Icon = featureIcons[i % featureIcons.length];

              return (
                <Reveal
                  key={item.title}
                  direction="up"
                  delay={i * 90}
                >
                  <div className="group h-full rounded-3xl border border-border bg-background p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

                    <div className="flex size-12 items-center justify-center rounded-2xl bg-accent text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                      <Icon className="size-5" />
                    </div>

                    <h3 className="mt-7 font-display text-xl font-bold text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>

                    <div className="mt-6 h-px w-10 bg-primary transition-all duration-300 group-hover:w-full" />
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-foreground text-background">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full border border-background/10" />
        <div className="pointer-events-none absolute -right-20 -top-20 size-[350px] rounded-full border border-background/10" />

        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">

          <Reveal direction="up">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-background/60">
              Our approach
            </p>

            <h2 className="mt-4 max-w-2xl font-display text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
              A clear process.
              <span className="text-background/50"> Thoughtful execution.</span>
            </h2>

            <p className="mt-5 max-w-xl leading-7 text-background/65">
              A collaborative approach that keeps your goals at the center
              of every decision.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((phase, i) => (
              <Reveal
                key={phase.step}
                direction="up"
                delay={i * 120}
              >
                <div className="relative border-t border-background/20 pt-7">
                  <span className="font-display text-4xl font-bold text-background/25">
                    {phase.step}
                  </span>

                  <h3 className="mt-5 font-display text-xl font-bold">
                    {phase.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-background/65">
                    {phase.description}
                  </p>

                  {i !== service.process.length - 1 && (
                    <ArrowRight className="absolute right-0 top-9 hidden size-5 text-background/35 lg:block" />
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-24">

        <Reveal direction="up">
          <div className="flex flex-wrap items-end justify-between gap-5">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
                More possibilities
              </p>

              <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Explore our other services.
              </h2>
            </div>

            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-muted-foreground"
            >
              View all services
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {others.map((other, i) => (
            <Reveal
              key={other.slug}
              direction="up"
              delay={i * 100}
            >
              <Link
                to="/services/$slug"
                params={{ slug: other.slug }}
                className="group block h-full overflow-hidden rounded-3xl border border-border bg-card transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={other.image}
                    alt={other.name}
                    width={1200}
                    height={1200}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <div className="p-7">
                  <h3 className="font-display text-xl font-bold text-foreground">
                    {other.name}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {other.tagline}
                  </p>

                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    Explore service
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        <Reveal direction="up">
          <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-primary px-7 py-16 text-primary-foreground sm:px-12 lg:px-16 lg:py-20">

            <div className="pointer-events-none absolute -right-20 -top-32 size-96 rounded-full border border-primary-foreground/15" />
            <div className="pointer-events-none absolute -right-5 -top-16 size-64 rounded-full border border-primary-foreground/15" />

            <div className="relative max-w-2xl">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-foreground/65">
                Let's work together
              </p>

              <h2 className="mt-5 font-display text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
                Have a project in mind?
                Let's make it happen.
              </h2>

              <p className="mt-5 max-w-xl leading-7 text-primary-foreground/75">
                Tell us about your business, your goals and what you want
                to build. Let's explore the right next step together.
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-background px-7 py-4 text-sm font-bold text-foreground transition-all hover:-translate-y-1 hover:shadow-lg"
                >
                  Start a conversation
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 px-6 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
                >
                  <Phone className="size-4" />
                  {site.phone}
                </a>
              </div>

              <p className="mt-7 text-sm text-primary-foreground/65">
                {site.email} · {site.location}
              </p>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
