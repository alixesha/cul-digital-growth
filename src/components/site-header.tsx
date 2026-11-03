
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Menu, Phone, X } from "lucide-react";
import { site } from "@/data/site";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/work", label: "Selected Work" },
  { to: "/contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-[#171613]/95 backdrop-blur-xl">
      <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-5 px-5 sm:px-8 lg:px-12">
        <Link
          to="/"
          onClick={() => setOpen(false)}
          className="group flex shrink-0 items-center gap-3"
        >
          <span className="flex size-10 items-center justify-center border border-[#c6a66b]/70 text-xs font-bold tracking-[0.15em] text-[#d7bc86] transition-colors group-hover:bg-[#c6a66b] group-hover:text-[#171613]">
            CUL
          </span>
          <span className="flex flex-col">
            <span className="font-display text-xl leading-none tracking-tight text-[#f3eee4] sm:text-2xl">
              The CUL Group
            </span>
            <span className="mt-1.5 text-[9px] uppercase tracking-[0.24em] text-[#b4aa98]">
              Digital growth studio
            </span>
          </span>
        </Link>

        <nav
          className="hidden items-center gap-7 lg:flex xl:gap-9"
          aria-label="Main navigation"
        >
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              activeOptions={{ exact: item.to === "/" }}
              activeProps={{
                className: "text-[#d7bc86]",
              }}
              className="relative py-2 text-[12px] font-medium tracking-wide text-[#c4beb3] transition-colors hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <a
          href={site.phoneHref}
          className="hidden items-center gap-2 border border-[#c6a66b]/60 px-4 py-3 text-xs font-semibold text-[#e3d0a8] transition-colors hover:bg-[#c6a66b] hover:text-[#171613] xl:inline-flex"
        >
          <Phone className="size-3.5" />
          {site.phone}
          <ArrowUpRight className="size-3.5" />
        </a>

        <button
          type="button"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="inline-flex size-11 items-center justify-center border border-white/15 text-[#f3eee4] transition-colors hover:border-[#c6a66b] lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/10 bg-[#171613] lg:hidden">
          <nav
            className="mx-auto flex max-w-[1440px] flex-col px-5 py-5 sm:px-8"
            aria-label="Mobile navigation"
          >
            {nav.map((item, index) => (
              <Link
                key={item.to}
                to={item.to}
                activeOptions={{ exact: item.to === "/" }}
                activeProps={{ className: "text-[#d7bc86]" }}
                onClick={() => setOpen(false)}
                className="flex items-center justify-between border-b border-white/10 py-4 font-display text-2xl text-[#e9e2d5] transition-colors hover:text-[#d7bc86]"
              >
                <span>{item.label}</span>
                <span className="text-xs text-[#8e8678]">
                  {String(index + 1).padStart(2, "0")}
                </span>
              </Link>
            ))}

            <a
              href={site.phoneHref}
              className="mt-5 inline-flex min-h-12 items-center justify-center gap-2 bg-[#c6a66b] px-5 py-3 text-sm font-semibold text-[#171613]"
            >
              <Phone className="size-4" />
              Call {site.phone}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
