import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, Handshake, LineChart, ShieldCheck } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { aboutImage, site, stats } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About The CUL Group — San Francisco Digital Agency" },
      {
        name: "description",
        content:
          "Meet The CUL Group — a San Francisco digital agency combining design, SEO, AI automation and marketing under one roof. Call (415) 539-1681.",
      },
      { property: "og:title", content: "About The CUL Group — San Francisco Digital Agency" },
      {
        property: "og:description",
        content: "One team for websites, search, AI automation and growth marketing — based in San Francisco.",
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
    title: "Partners, not vendors",
    text: "We win when you win. Every engagement is built around your revenue, not our retainer.",
  },
  {
    icon: LineChart,
    title: "Numbers over noise",
    text: "Traffic, rankings and impressions mean nothing on their own. We report what moves your bottom line.",
  },
  {
    icon: Compass,
    title: "Straight answers",
    text: "No jargon, no smoke. You'll always know what we're doing, why, and what it returned.",
  },
  {
    icon: ShieldCheck,
    title: "Built to last",
    text: "We use modern, maintainable technology so your investment keeps paying off for years.",
  },
];

function AboutPage() {
  return (
    <>
      {/* Split hero: image from the left, story from the right */}
      <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-16 pt-12 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:pb-24 lg:pt-20">
        <Reveal direction="left" className="order-first lg:order-none">
          <img
            src={aboutImage}
            alt="The CUL Group team collaborating on a project"
            width={1200}
            height={1400}
            className="aspect-[4/5] w-full rounded-4xl object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
          />
        </Reveal>
        <Reveal direction="right">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">About us</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            One team for everything digital.
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            The CUL Group was founded on a simple observation: small and growing businesses were being
            forced to juggle a web designer here, an SEO freelancer there and a marketing agency
            somewhere else — and nothing worked together.
          </p>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We bring it all under one roof. From {site.location}, we design and build websites, win
            local search on Google and Google Maps, automate operations with AI, and run marketing
            campaigns that pay for themselves. One strategy, one team, one bill — and results you can
            actually measure.
          </p>
        </Reveal>
      </section>

      {/* Stats */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} direction="right" delay={i * 100}>
              <p className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Values */}
      <section className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
        <Reveal direction="right">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Our values</p>
          <h2 className="mt-3 max-w-xl font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            How we work with every client.
          </h2>
        </Reveal>
        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {values.map((value, i) => (
            <Reveal key={value.title} direction="right" delay={i * 100}>
              <div className="flex h-full gap-5 rounded-3xl border border-border bg-card p-8">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-foreground text-background">
                  <value.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <h3 className="font-display text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{value.text}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Approach + CTA */}
      <section className="bg-foreground text-background">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal direction="right">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Built for San Francisco businesses — and beyond.
            </h2>
            <p className="mt-4 max-w-lg text-background/75">
              From cafés in the Mission to clinics in Sunset and boutiques in the Marina, we understand
              how local customers find, judge and choose businesses. We use that knowledge in every
              build, every ranking strategy and every campaign.
            </p>
          </Reveal>
          <Reveal direction="right" delay={120}>
            <div className="rounded-3xl border border-background/15 bg-background/5 p-8">
              <h3 className="font-display text-xl font-semibold">Want to see what we'd do for you?</h3>
              <p className="mt-2 text-sm text-background/75">
                We'll review your online presence and send you a short, honest assessment — free.
              </p>
              <Link
                to="/contact"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
              >
                Request your free review
                <ArrowRight className="size-4" aria-hidden />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
