
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { services, site } from "@/data/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#11110f] text-[#f0eadf]">
      <div className="mx-auto max-w-[1440px] px-5 pb-8 pt-16 sm:px-8 sm:pt-20 lg:px-12">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_0.8fr_0.8fr_1fr] lg:gap-10">
          <div>
            <Link to="/" className="inline-flex items-center gap-3">
              <span className="flex size-11 items-center justify-center border border-[#c6a66b]/70 text-xs font-bold tracking-[0.15em] text-[#d7bc86]">
                CUL
              </span>
              <span className="font-display text-2xl">The CUL Group</span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-[#a9a194]">
              Thoughtful websites, stronger search visibility and practical
              automation for businesses building their next chapter.
            </p>

            <p className="mt-6 text-[10px] uppercase tracking-[0.2em] text-[#c6a66b]">
              San Francisco · United States
            </p>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c6a66b]">
              Expertise
            </h3>
            <ul className="mt-5 space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    to="/services/$slug"
                    params={{ slug: service.slug }}
                    className="group inline-flex items-center gap-2 text-sm text-[#bcb5a9] transition-colors hover:text-white"
                  >
                    {service.shortName}
                    <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c6a66b]">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {[
                { to: "/", label: "Home" },
                { to: "/about", label: "About us" },
                { to: "/services", label: "Services" },
                { to: "/work", label: "Selected work" },
                { to: "/contact", label: "Contact" },
              ].map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    className="text-sm text-[#bcb5a9] transition-colors hover:text-white"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#c6a66b]">
              Start a conversation
            </h3>
            <p className="mt-5 text-sm leading-7 text-[#a9a194]">
              Have a project in mind? Let's discuss the right next step for
              your business.
            </p>

            <a
              href={site.phoneHref}
              className="mt-5 flex items-center gap-3 text-sm text-[#e7d4ad] transition-colors hover:text-white"
            >
              <Phone className="size-4 shrink-0" />
              {site.phone}
            </a>

            <a
              href={`mailto:${site.email}`}
              className="mt-4 flex items-start gap-3 break-all text-sm text-[#bcb5a9] transition-colors hover:text-white"
            >
              <Mail className="mt-0.5 size-4 shrink-0" />
              {site.email}
            </a>

            <p className="mt-4 flex items-start gap-3 text-sm text-[#bcb5a9]">
              <MapPin className="mt-0.5 size-4 shrink-0" />
              {site.location}
            </p>
          </div>
        </div>

        <div className="luxury-line mt-14 opacity-60" />

        <div className="flex flex-col gap-3 pt-6 text-[11px] text-[#8f887d] sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} The CUL Group. All rights reserved.</p>
          <a
            href={site.phoneHref}
            className="inline-flex items-center gap-2 transition-colors hover:text-[#d7bc86]"
          >
            Let's talk about your project
            <ArrowUpRight className="size-3.5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
