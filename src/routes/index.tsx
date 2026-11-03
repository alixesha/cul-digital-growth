import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, CheckCircle2, MapPin, Phone, Quote, Star } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { caseStudies, heroImage, services, site, stats, testimonials } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "The CUL Group — Web Design, SEO & AI Automation in San Francisco",
      },
      {
        name: "description",
        content:
          "The CUL Group builds websites, ranks you on Google and Google Maps, automates your business with AI and runs marketing campaigns that grow revenue. Call (415) 539-1681.",
      },
      {
        property: "og:title",
        content: "The CUL Group — Web Design, SEO & AI Automation in San Francisco",
      },
      {
        property: "og:description",
        content:
          "Website design & development, SEO & Google Maps, AI & business automation, and digital marketing — all under one roof in San Francisco.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* Split-screen hero: image enters from the left, copy from the right */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
        <Reveal direction="left" className="order-first lg:order-none">
          <div className="relative overflow-hidden rounded-4xl">
            <img
              src={heroImage}
              alt="The CUL Group studio in San Francisco"
              width={1200}
              height={1400}
              className="aspect-[4/5] w-full object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
            />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-background/90 px-5 py-4 backdrop-blur-sm sm:right-auto sm:gap-10">
              <div>
                <p className="font-display text-2xl font-bold text-foreground">San Francisco</p>
                <p className="text-xs text-muted-foreground">Digital agency for local growth</p>
              </div>
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="size-4 fill-foreground text-foreground" aria-hidden />
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal direction="right">
          <p className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
            <MapPin className="size-3.5" aria-hidden />
            San Francisco, United States
          </p>
          <h1 className="mt-6 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
            Websites, search &amp; AI that <span className="underline decoration-border decoration-4 underline-offset-8">grow</span> your business.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            The CUL Group is a full-service digital agency. We design websites that convert, put you at
            the top of Google and Google Maps, automate your busywork with AI and run campaigns that
            turn ad spend into revenue.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground/85"
            >
              Get a free consultation
              <ArrowRight className="size-4" aria-hidden />
            </Link>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              See our work
            </Link>
          </div>
          <a
            href={site.phoneHref}
            className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Phone className="size-4" aria-hidden />
            Or call us directly — {site.phone}
          </a>
        </Reveal>
      </section>

      {/* Services marquee */}
      <section className="overflow-hidden border-y border-border bg-card py-4" aria-hidden>
        <div className="flex w-max animate-marquee gap-10 pr-10">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex gap-10">
              {services.map((service) => (
                <span
                  key={`${copy}-${service.slug}`}
                  className="flex items-center gap-10 whitespace-nowrap font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground"
                >
                  {service.name}
                  <span className="size-1.5 rounded-full bg-foreground/40" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-end">
          <Reveal direction="right">
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">What we do</p>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Four services. One growth partner.
            </h2>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <p className="max-w-md text-muted-foreground lg:ml-auto">
              Everything your business needs to win online — designed, built and managed by one team, so
              nothing falls through the cracks.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {services.map((service, i) => (
            <Reveal key={service.slug} direction="left" delay={i * 100}>
              <Link
                to="/services/$slug"
                params={{ slug: service.slug }}
                className="group block overflow-hidden rounded-3xl border border-border bg-card transition-shadow hover:shadow-xl"
              >
                <div className="overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.name}
                    width={1200}
                    height={1200}
                    loading="lazy"
                    className="aspect-[16/10] w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="p-7">
                  <h3 className="font-display text-xl font-semibold text-foreground">{service.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{service.tagline}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-foreground">
                    Learn more
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Stats band */}
      <section className="bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} direction="right" delay={i * 100}>
              <p className="font-display text-5xl font-bold tracking-tight">{stat.value}</p>
              <p className="mt-2 text-sm text-background/70">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Process */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal direction="right">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">How we work</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            A simple, proven path from first call to lasting growth.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { step: "01", title: "Discover", text: "A free consultation where we learn your goals, market and bottleneck." },
            { step: "02", title: "Strategize", text: "A clear plan with timelines, deliverables and the numbers we'll move." },
            { step: "03", title: "Build", text: "We design, develop and launch — keeping you in the loop at every step." },
            { step: "04", title: "Grow", text: "We measure, report and refine every month so results keep compounding." },
          ].map((item, i) => (
            <Reveal key={item.step} direction="right" delay={i * 100}>
              <p className="font-display text-sm font-semibold text-muted-foreground">{item.step}</p>
              <h3 className="mt-3 font-display text-xl font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Case studies preview */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <Reveal direction="right">
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Results</p>
              <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
                Recent work, real numbers.
              </h2>
            </Reveal>
            <Reveal direction="right" delay={100}>
              <Link
                to="/work"
                className="inline-flex items-center gap-2 rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
              >
                View all case studies
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </Reveal>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            {caseStudies.slice(0, 2).map((study, i) => (
              <Reveal key={study.title} direction="left" delay={i * 120}>
                <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-border bg-background">
                  <img
                    src={study.image}
                    alt={study.title}
                    width={1200}
                    height={1200}
                    loading="lazy"
                    className="aspect-[16/9] w-full object-cover"
                  />
                  <div className="flex flex-1 flex-col p-7">
                    <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                      {study.industry}
                    </p>
                    <h3 className="mt-2 font-display text-xl font-semibold text-foreground">{study.title}</h3>
                    <div className="mt-5 grid grid-cols-3 gap-4 border-t border-border pt-5">
                      {study.metrics.map((metric) => (
                        <div key={metric.label}>
                          <p className="font-display text-lg font-bold text-foreground">{metric.value}</p>
                          <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal direction="right">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Testimonials</p>
          <h2 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What our clients say.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {testimonials.map((item, i) => (
            <Reveal key={item.author} direction="right" delay={i * 120}>
              <figure className="flex h-full flex-col rounded-3xl border border-border bg-card p-8">
                <Quote className="size-7 text-foreground/30" aria-hidden />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground/90">
                  {item.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-4">
                  <p className="text-sm font-semibold text-foreground">{item.author}</p>
                  <p className="text-xs text-muted-foreground">{item.business}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal direction="right">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Ready to grow? Let's talk about your business.
            </h2>
            <p className="mt-4 max-w-lg text-background/75">
              Book a free consultation. We'll look at your website, your Google presence and your
              competitors — then show you exactly where the opportunity is.
            </p>
            <ul className="mt-6 space-y-2.5 text-sm text-background/85">
              {["No pressure, no obligation", "A clear plan you can act on", "Straight answers, plain English"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-2.5">
                    <CheckCircle2 className="size-4" aria-hidden />
                    {item}
                  </li>
                )
              )}
            </ul>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <div className="rounded-3xl border border-background/15 bg-background/5 p-8">
              <p className="text-sm uppercase tracking-widest text-background/60">Call or write today</p>
              <a
                href={site.phoneHref}
                className="mt-3 block font-display text-3xl font-bold tracking-tight transition-opacity hover:opacity-80 sm:text-4xl"
              >
                {site.phone}
              </a>
              <a
                href={`mailto:${site.email}`}
                className="mt-2 block text-sm text-background/75 transition-opacity hover:opacity-80"
              >
                {site.email}
              </a>
              <Link
                to="/contact"
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
              >
                Send us a message
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
