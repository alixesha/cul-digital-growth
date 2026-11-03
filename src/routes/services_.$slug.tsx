
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  Phone,
  Sparkles,
  Target,
  Layers3,
  Workflow,
  ShieldCheck,
  MoveUpRight,
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
      { title: `${loaderData.service.name} | The CUL Group` },
      {
        name: "description",
        content: `${loaderData.service.tagline} ${loaderData.service.summary}`,
      },
      { property: "og:title", content: `${loaderData.service.name} | The CUL Group` },
      { property: "og:description", content: loaderData.service.tagline },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServiceDetailPage,
});

function ServiceDetailPage() {
  const { service } = Route.useLoaderData();

  const others = services.filter((item) => item.slug !== service.slug);

  const featureIcons = [
    Target,
    Layers3,
    Workflow,
    ShieldCheck,
    Sparkles,
    CheckCircle2,
  ];

  return (
    <main className="overflow-hidden bg-background">

      {/* HERO */}
      <section className="px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <Link
              to="/services"
              className="inline-flex items-center gap-3 text-[10px] font-semibold uppercase tracking-[0.25em] text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft size={15} />
              All services
            </Link>
          </Reveal>

          <div className="mt-12 grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">

            <Reveal direction="left">
              <div className="flex items-center gap-3">
                <span className="h-px w-10 bg-primary" />
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
                  The CUL Group / Digital Solutions
                </p>
              </div>

              <h1 className="mt-8 font-display text-5xl font-medium leading-[0.98] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
                {service.name}
                <span className="text-primary">.</span>
              </h1>

              <p className="mt-7 max-w-xl font-display text-2xl italic leading-snug text-primary sm:text-3xl">
                {service.tagline}
              </p>

              <p className="mt-6 max-w-xl text-sm leading-8 text-muted-foreground sm:text-base">
                {service.summary}
              </p>

              <div className="mt-9 flex flex-wrap gap-3">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 text-xs font-semibold uppercase tracking-widest text-primary-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Discuss your project
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </Link>

                <a
                  href={site.phoneHref}
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-4 text-xs font-semibold text-foreground transition-colors hover:bg-card"
                >
                  <Phone size={15} />
                  Call us
                </a>
              </div>

              <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 border-t border-border pt-6">
                {["Tailored solutions", "Clear communication", "Business-focused"].map((item) => (
                  <span key={item} className="flex items-center gap-2 text-xs text-muted-foreground">
                    <CheckCircle2 size={15} className="text-primary" />
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal direction="right">
              <div className="group relative">
                <div className="absolute -inset-3 rotate-2 border border-primary/20 transition-transform duration-700 group-hover:rotate-0" />
                <img
                  src={service.image}
                  alt={service.name}
                  width={1400}
                  height={1200}
                  className="relative aspect-[5/4] w-full object-cover"
                />
                <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between border border-white/20 bg-black/40 p-5 backdrop-blur-md">
                  <div>
                    <p className="text-[9px] uppercase tracking-[0.3em] text-white/60">
                      A connected approach
                    </p>
                    <p className="mt-2 font-display text-xl text-white">
                      Made for your business.
                    </p>
                  </div>
                  <Sparkles className="size-6 text-primary" />
                </div>
              </div>
            </Reveal>

          </div>
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="border-y border-border bg-card px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-24">

          <Reveal direction="left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
              01 / The opportunity
            </p>
            <h2 className="mt-6 font-display text-4xl font-medium leading-tight text-foreground sm:text-5xl lg:text-6xl">
              A smarter approach to your digital presence.
            </h2>
          </Reveal>

          <Reveal direction="right">
            <p className="text-sm leading-8 text-muted-foreground sm:text-base">
              Every business has different goals, challenges and customers. Our approach starts with understanding what matters to you and where this service fits into your wider business objectives.
            </p>
            <p className="mt-6 text-sm leading-8 text-muted-foreground sm:text-base">
              We bring strategy, thoughtful design and practical technology together to create solutions shaped around your needs. Clear communication and quality remain central throughout the process.
            </p>
            <div className="mt-9 flex items-center gap-4 border-t border-border pt-7">
              <Sparkles className="size-5 shrink-0 text-primary" />
              <p className="font-display text-xl italic text-foreground sm:text-2xl">
                Thoughtful work. Practical solutions. Connected growth.
              </p>
            </div>
          </Reveal>

        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <div className="flex flex-col justify-between gap-6 border-b border-border pb-9 sm:flex-row sm:items-end">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
                  02 / What's included
                </p>
                <h2 className="mt-5 max-w-2xl font-display text-4xl font-medium text-foreground sm:text-5xl">
                  The details behind the solution.
                </h2>
              </div>
              <p className="max-w-xs text-sm leading-7 text-muted-foreground">
                Explore the key elements that make up this service.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {service.deliverables.map((item, i) => {
              const Icon = featureIcons[i % featureIcons.length];

              return (
                <Reveal key={item.title} delay={i * 80}>
                  <article className="group h-full border border-border bg-card p-7 transition-all duration-500 hover:-translate-y-2 hover:border-primary/50">
                    <div className="flex items-center justify-between">
                      <span className="font-display text-sm italic text-primary">
                        0{i + 1}
                      </span>
                      <Icon className="size-5 text-muted-foreground transition-colors group-hover:text-primary" />
                    </div>

                    <h3 className="mt-9 font-display text-2xl font-medium text-foreground">
                      {item.title}
                    </h3>

                    <p className="mt-4 text-sm leading-7 text-muted-foreground">
                      {item.description}
                    </p>

                    <div className="mt-7 h-px w-10 bg-primary transition-all duration-500 group-hover:w-full" />
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="relative overflow-hidden bg-foreground px-4 py-24 text-background sm:px-6 lg:px-8 lg:py-32">
        <div className="pointer-events-none absolute -right-40 -top-40 size-[500px] rounded-full border border-background/10" />
        <div className="pointer-events-none absolute -right-20 -top-20 size-[350px] rounded-full border border-background/10" />

        <div className="relative mx-auto max-w-7xl">

          <Reveal>
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
              03 / Our process
            </p>
            <h2 className="mt-6 max-w-3xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
              A clear process.
              <br />
              <span className="italic text-background/50">Thoughtful execution.</span>
            </h2>
            <p className="mt-6 max-w-xl text-sm leading-8 text-background/65">
              A collaborative approach that keeps your goals at the center of every decision.
            </p>
          </Reveal>

          <div className="mt-16 grid gap-9 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((phase, i) => (
              <Reveal key={phase.step} delay={i * 100}>
                <div className="border-t border-background/20 pt-7">
                  <span className="font-display text-5xl italic text-primary/80">
                    {phase.step}
                  </span>
                  <h3 className="mt-6 font-display text-2xl text-background">
                    {phase.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-background/60">
                    {phase.description}
                  </p>
                  <div className="mt-7 flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-background/40">
                    <span className="size-1.5 rounded-full bg-primary" />
                    Phase 0{i + 1}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-2 lg:gap-24">

          <Reveal direction="left">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
              04 / The bigger picture
            </p>
            <h2 className="mt-6 font-display text-4xl font-medium leading-tight text-foreground sm:text-5xl lg:text-6xl">
              Built around what matters to your business.
            </h2>
            <p className="mt-6 text-sm leading-8 text-muted-foreground">
              Our goal is to create work that serves a purpose beyond appearance. We focus on usability, thoughtful execution and how each solution supports your wider digital presence.
            </p>
          </Reveal>

          <Reveal direction="right">
            <div className="space-y-0 border-t border-border">
              {[
                "A solution shaped around your goals",
                "A consistent digital experience",
                "Clear communication throughout",
                "A foundation designed to evolve",
              ].map((item, i) => (
                <div key={item} className="flex items-center gap-4 border-b border-border py-6">
                  <Check className="size-5 shrink-0 text-primary" />
                  <p className="text-sm text-foreground sm:text-base">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>

        </div>
      </section>

      {/* OTHER SERVICES */}
      <section className="border-t border-border bg-card px-4 py-24 sm:px-6 lg:px-8 lg:py-28">
        <div className="mx-auto max-w-7xl">

          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-5">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary">
                  05 / Explore further
                </p>
                <h2 className="mt-5 font-display text-3xl font-medium text-foreground sm:text-5xl">
                  More ways to move forward.
                </h2>
              </div>
              <Link
                to="/services"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground transition-colors hover:text-primary"
              >
                All services
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {others.map((other, i) => (
              <Reveal key={other.slug} delay={i * 90}>
                <Link
                  to="/services/$slug"
                  params={{ slug: other.slug }}
                  className="group block h-full border border-border bg-background transition-all duration-500 hover:-translate-y-2"
                >
                  <div className="overflow-hidden">
                    <img
                      src={other.image}
                      alt={other.name}
                      width={1200}
                      height={900}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-7">
                    <p className="text-[10px] uppercase tracking-[0.25em] text-primary">
                      Explore another service
                    </p>
                    <h3 className="mt-4 font-display text-xl font-medium text-foreground sm:text-2xl">
                      {other.name}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground">
                      {other.tagline}
                    </p>
                    <span className="mt-7 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-foreground group-hover:text-primary">
                      Discover more
                      <MoveUpRight size={16} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal>
          <div className="relative mx-auto max-w-7xl overflow-hidden bg-primary px-7 py-16 text-primary-foreground sm:px-12 lg:px-16 lg:py-24">
            <div className="pointer-events-none absolute -right-20 -top-24 size-80 rounded-full border border-primary-foreground/20" />

            <div className="relative grid items-end gap-10 lg:grid-cols-2">
              <div>
                <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-primary-foreground/70">
                  Your next move
                </p>
                <h2 className="mt-6 max-w-2xl font-display text-4xl font-medium leading-tight sm:text-5xl lg:text-6xl">
                  Let's make your next idea happen.
                </h2>
              </div>

              <div>
                <p className="text-sm leading-8 text-primary-foreground/75">
                  Tell us about your business and what you're looking to achieve. Let's explore the right solution together.
                </p>
                <Link
                  to="/contact"
                  className="mt-8 inline-flex items-center gap-3 rounded-full bg-background px-8 py-4 text-xs font-semibold uppercase tracking-widest text-foreground transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  Start a conversation
                  <ArrowRight size={16} />
                </Link>
                <p className="mt-6 text-xs text-primary-foreground/65">
                  {site.phone} · {site.email}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

    </main>
  );
}
