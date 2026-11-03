import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2, Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import type { FormEvent } from "react";
import { Reveal } from "@/components/reveal";
import { services, site } from "@/data/site";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact The CUL Group — Free Consultation | San Francisco" },
      {
        name: "description",
        content:
          "Get in touch with The CUL Group. Call (415) 539-1681 or send a message for a free consultation on your website, SEO, AI automation or marketing.",
      },
      { property: "og:title", content: "Contact The CUL Group — Free Consultation" },
      {
        property: "og:description",
        content: "Call (415) 539-1681 or send us a message — free, honest advice on growing your business online.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

const contactDetails = [
  { icon: Phone, label: "Phone", value: site.phone, href: site.phoneHref },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Location", value: site.location },
  { icon: Clock, label: "Hours", value: site.hours },
];

function ContactPage() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "");
    const email = String(data.get("email") ?? "");
    const phone = String(data.get("phone") ?? "");
    const service = String(data.get("service") ?? "");
    const message = String(data.get("message") ?? "");

    const subject = `New project inquiry — ${name}`;
    const body = [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Service of interest: ${service}`,
      "",
      message,
    ]
      .filter(Boolean)
      .join("\n");

    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8 lg:pb-28 lg:pt-20">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        {/* Copy enters from the right */}
        <Reveal direction="right">
          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">Contact</p>
          <h1 className="mt-4 font-display text-4xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-5xl">
            Let's talk about your growth.
          </h1>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
            Call, write or send the form below. Every inquiry gets a personal response within one
            business day — and your first consultation is always free.
          </p>

          <ul className="mt-10 space-y-5">
            {contactDetails.map((item) => (
              <li key={item.label} className="flex items-center gap-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-card text-foreground">
                  <item.icon className="size-5" aria-hidden />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {item.label}
                  </p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="font-medium text-foreground transition-opacity hover:opacity-75"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <ul className="mt-10 space-y-2.5 text-sm text-muted-foreground">
            {["Free first consultation", "Plain-English advice, no jargon", "Response within one business day"].map(
              (item) => (
                <li key={item} className="flex items-center gap-2.5">
                  <CheckCircle2 className="size-4 text-foreground" aria-hidden />
                  {item}
                </li>
              )
            )}
          </ul>
        </Reveal>

        {/* Form enters from the right with a slight delay */}
        <Reveal direction="right" delay={140}>
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-border bg-card p-8 sm:p-10"
            aria-label="Contact form"
          >
            <h2 className="font-display text-2xl font-bold tracking-tight text-foreground">
              Send us a message
            </h2>
            <p className="mt-1.5 text-sm text-muted-foreground">
              Fill this in and your email app will open with everything ready to send.
            </p>

            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Name *
                </span>
                <input
                  required
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Jane Smith"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-ring focus:ring-2 focus:ring-ring/30"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Email *
                </span>
                <input
                  required
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="jane@company.com"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-ring focus:ring-2 focus:ring-ring/30"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Phone
                </span>
                <input
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="(415) 555-0100"
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-ring focus:ring-2 focus:ring-ring/30"
                />
              </label>
              <label className="block">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Service of interest
                </span>
                <select
                  name="service"
                  defaultValue=""
                  className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors focus:border-ring focus:ring-2 focus:ring-ring/30"
                >
                  <option value="" disabled>
                    Choose a service…
                  </option>
                  {services.map((service) => (
                    <option key={service.slug} value={service.name}>
                      {service.name}
                    </option>
                  ))}
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Tell us about your project *
                </span>
                <textarea
                  required
                  name="message"
                  rows={5}
                  placeholder="What are you trying to grow, and what have you tried so far?"
                  className="mt-2 w-full resize-none rounded-xl border border-input bg-background px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-ring focus:ring-2 focus:ring-ring/30"
                />
              </label>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-colors hover:bg-foreground/85 sm:w-auto"
            >
              <Send className="size-4" aria-hidden />
              Send message
            </button>
          </form>
        </Reveal>
      </div>
    </section>
  );
}
