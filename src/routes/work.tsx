import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { caseStudies } from "@/data/site";

export const Route = createFileRoute("/work")({
  head: () => ({
    meta: [
      { title: "Our Work — Case Studies | The CUL Group, San Francisco" },
      {
        name: "description",
        content:
          "Real results for real San Francisco businesses: websites, local SEO, AI automation and marketing campaigns by The CUL Group.",
      },
      { property: "og:title", content: "Our Work — Case Studies | The CUL Group" },
      {
        property: "og:description",
        content: "Case studies with real numbers from websites, SEO, AI automation and marketing work.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: WorkPage,
});

function WorkPage() {
  return (
    <>
      <section className="mx-auto max-w-7xl px-4 pb-8 pt-12 sm:px-6 lg:px-8 lg:pt-20">
        <Reveal direction="right">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Our work</p>
          <h1 className="mt-4 max-w-2xl font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Results we'd put our name on.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            A selection of recent projects — each one a different challenge, each one measured by the
            numbers that matter to the client.
          </p>
        </Reveal>
      </section>

      <section className="mx-auto max-w-7xl space-y-8 px-4 pb-20 sm:px-6 lg:px-8 lg:pb-28">
        {caseStudies.map((study, i) => (
          <Reveal key={study.title} direction="left" delay={i * 60}>
            <article className="grid overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-5">
              <div className="lg:col-span-2">
                <img
                  src={study.image}
                  alt={study.title}
                  width={1200}
                  height={1200}
                  loading="lazy"
                  className="h-full max-h-[380px] w-full object-cover"
                />
              </div>
              <div className="flex flex-col justify-center p-8 lg:col-span-3 lg:p-12">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                    {study.industry}
                  </span>
                  {study.services.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-foreground px-3 py-1 text-xs font-medium text-background"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h2 className="mt-4 font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {study.title}
                </h2>
                <p className="mt-3 max-w-2xl leading-relaxed text-muted-foreground">{study.summary}</p>
                <div className="mt-7 grid grid-cols-3 gap-4 border-t border-border pt-6">
                  {study.metrics.map((metric) => (
                    <div key={metric.label}>
                      <p className="font-display text-xl font-bold text-foreground sm:text-2xl">{metric.value}</p>
                      <p className="mt-1 text-xs text-muted-foreground">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </section>

      <section className="bg-foreground text-background">
        <div className="mx-auto max-w-7xl px-4 py-16 text-center sm:px-6 lg:px-8">
          <Reveal direction="right">
            <h2 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">
              Your business could be the next case study.
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-background/75">
              Tell us your goal and we'll show you the plan — and the numbers we intend to move.
            </p>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-background px-7 py-3.5 text-sm font-semibold text-foreground transition-opacity hover:opacity-90"
            >
              Start the conversation
              <ArrowRight className="size-4" aria-hidden />
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
