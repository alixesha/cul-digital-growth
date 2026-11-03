import heroImage from "@/assets/hero.jpg";
import aboutImage from "@/assets/about.jpg";
import webImage from "@/assets/service-web.jpg";
import seoImage from "@/assets/service-seo.jpg";
import aiImage from "@/assets/service-ai.jpg";
import marketingImage from "@/assets/service-marketing.jpg";
import caseCafeImage from "@/assets/case-cafe.jpg";
import caseRealEstateImage from "@/assets/case-realestate.jpg";

export const site = {
  name: "The CUL Group",
  phone: "(415) 539-1681",
  phoneHref: "tel:+14155391681",
  email: "hello@theculgroup.com",
  location: "San Francisco, United States",
  hours: "Mon–Fri, 9am–6pm PT",
  domain: "https://theculgroup.com",
};

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  tagline: string;
  summary: string;
  image: string;
  outcomes: string[];
  deliverables: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
};

export const services: Service[] = [
  {
    slug: "web-design-development",
    name: "Website Design & Development",
    shortName: "Web Design",
    tagline: "Fast, beautiful websites that turn visitors into customers.",
    summary:
      "Custom, conversion-focused websites engineered for speed, clarity and measurable results — never templates.",
    image: webImage,
    outcomes: [
      "2.8x average lift in conversion rate",
      "90+ PageSpeed score on every build",
      "Launch in as little as 4–6 weeks",
    ],
    deliverables: [
      { title: "Custom UI/UX design", description: "A bespoke design system built around your brand — no cookie-cutter templates." },
      { title: "Mobile-first development", description: "Flawless experiences on every device, built on modern, maintainable code." },
      { title: "E-commerce & booking", description: "Online stores, scheduling and payment flows that make buying effortless." },
      { title: "CMS & landing pages", description: "Edit your own content with a friendly CMS and campaign-ready landing pages." },
      { title: "Speed optimization", description: "Core Web Vitals tuning so pages load instantly and rank better." },
      { title: "Hosting & support", description: "Managed hosting, security, backups and ongoing improvements." },
    ],
    process: [
      { step: "01", title: "Discover", description: "We map your goals, audience and competitors into a clear site strategy." },
      { step: "02", title: "Design", description: "Wireframes to polished UI — you approve every screen before we build." },
      { step: "03", title: "Build & QA", description: "Pixel-perfect development, tested across devices, browsers and speed budgets." },
      { step: "04", title: "Launch & iterate", description: "We go live, monitor analytics and keep improving what converts." },
    ],
  },
  {
    slug: "seo-google-maps",
    name: "SEO & Google Maps",
    shortName: "SEO & Maps",
    tagline: "Get found first — on Google Search and Google Maps.",
    summary:
      "Local and organic SEO that puts your business at the top when nearby customers search for what you do.",
    image: seoImage,
    outcomes: [
      "+184% average lift in local search traffic",
      "Top-3 Google map pack rankings",
      "Transparent monthly reporting",
    ],
    deliverables: [
      { title: "Google Business Profile", description: "Fully optimized profile with posts, photos, services and Q&A management." },
      { title: "Keyword & competitor research", description: "We find the searches that bring buyers — not just browsers." },
      { title: "On-page & technical SEO", description: "Content, structure and schema tuned so Google understands and rewards you." },
      { title: "Review strategy", description: "Systems that earn more 5-star reviews and turn them into rankings." },
      { title: "Citations & directories", description: "Consistent business data across the web that builds local authority." },
      { title: "Rank tracking & reporting", description: "Plain-English monthly reports showing rankings, calls and leads." },
    ],
    process: [
      { step: "01", title: "Audit", description: "A full sweep of your current visibility, listings and competitors." },
      { step: "02", title: "Optimize", description: "Profile, website and citations rebuilt around winning keywords." },
      { step: "03", title: "Earn signals", description: "Reviews, content and links that push you up the map pack." },
      { step: "04", title: "Report & refine", description: "Monthly reviews where we double down on what's working." },
    ],
  },
  {
    slug: "ai-business-automation",
    name: "AI & Business Automation",
    shortName: "AI Automation",
    tagline: "AI assistants and automations that run your busywork.",
    summary:
      "Custom AI assistants, lead follow-up and workflow automation that save your team hours every single day.",
    image: aiImage,
    outcomes: [
      "20+ hours saved every week",
      "Leads followed up in under 60 seconds",
      "AI trained on your business, your voice",
    ],
    deliverables: [
      { title: "AI chat assistants", description: "Website and WhatsApp assistants that answer, qualify and book 24/7." },
      { title: "Automated lead follow-up", description: "Instant SMS and email responses so no lead ever goes cold." },
      { title: "CRM & workflow integration", description: "Your tools — calendar, CRM, invoicing — connected and talking to each other." },
      { title: "Scheduling & quoting", description: "Automated bookings, quotes and invoices with zero manual entry." },
      { title: "AI content & reporting", description: "Draft content, summaries and performance reports generated automatically." },
      { title: "Training & support", description: "We train your team and keep improving the systems as you grow." },
    ],
    process: [
      { step: "01", title: "Map workflows", description: "We shadow your processes and find the hours hiding in repetitive tasks." },
      { step: "02", title: "Design the system", description: "A blueprint for your AI assistants and automations, with clear ROI targets." },
      { step: "03", title: "Build & connect", description: "We implement, integrate with your tools and test with real scenarios." },
      { step: "04", title: "Train & improve", description: "Your team learns the system; we monitor and refine it monthly." },
    ],
  },
  {
    slug: "digital-marketing-growth",
    name: "Digital Marketing & Growth",
    shortName: "Digital Marketing",
    tagline: "Full-funnel campaigns that turn ad spend into revenue.",
    summary:
      "Paid ads, funnels and email campaigns managed end-to-end — tracked from the first click to closed business.",
    image: marketingImage,
    outcomes: [
      "3.2x average return on ad spend",
      "Every lead tracked from click to close",
      "Campaigns live within 7 days",
    ],
    deliverables: [
      { title: "Google Ads & PPC", description: "Search and Performance Max campaigns managed for profit, not vanity metrics." },
      { title: "Meta & Instagram ads", description: "Creative testing and audience building on the platforms your customers scroll." },
      { title: "Landing pages & funnels", description: "Pages designed to convert the traffic your campaigns earn." },
      { title: "Email & retargeting", description: "Sequences that bring back the 97% who don't buy on the first visit." },
      { title: "Conversion tracking", description: "Call, form and sale tracking so you know exactly what every dollar returns." },
      { title: "Monthly growth reviews", description: "Strategy sessions with clear numbers and next steps — no jargon." },
    ],
    process: [
      { step: "01", title: "Strategy", description: "Offer, audience and budget aligned into a channel plan with targets." },
      { step: "02", title: "Build", description: "Campaigns, creatives, pixels and landing pages launched within a week." },
      { step: "03", title: "Optimize", description: "Weekly testing on ads, audiences and pages to cut costs per lead." },
      { step: "04", title: "Scale", description: "Winners get more budget; the funnel compounds month over month." },
    ],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);

export const stats = [
  { value: "120+", label: "Projects delivered" },
  { value: "10+", label: "Years of experience" },
  { value: "98%", label: "Client retention" },
  { value: "3.2x", label: "Average ROI" },
];

export type CaseStudy = {
  title: string;
  industry: string;
  services: string[];
  image: string;
  summary: string;
  metrics: { value: string; label: string }[];
};

export const caseStudies: CaseStudy[] = [
  {
    title: "Harbor Light Café",
    industry: "Café & Bakery · San Francisco",
    services: ["Website Design", "SEO & Google Maps"],
    image: caseCafeImage,
    summary:
      "A neighborhood café that was invisible on Google Maps. We rebuilt their site, optimized their Google Business Profile and built a review engine — they now hold a top-3 map pack position for their busiest searches.",
    metrics: [
      { value: "+240%", label: "Direction requests" },
      { value: "2.4x", label: "Weekend foot traffic" },
      { value: "4.9★", label: "Google rating" },
    ],
  },
  {
    title: "Golden Gate Realty Group",
    industry: "Real Estate · Bay Area",
    services: ["Website Design & Development"],
    image: caseRealEstateImage,
    summary:
      "A boutique brokerage stuck on a slow, dated site. We designed a fast, elegant listings experience with lead capture on every property — qualified inquiries more than doubled within one quarter.",
    metrics: [
      { value: "+180%", label: "Qualified leads" },
      { value: "1.2s", label: "Average load time" },
      { value: "62%", label: "More time on site" },
    ],
  },
  {
    title: "Fog City Dental",
    industry: "Healthcare · San Francisco",
    services: ["AI & Business Automation"],
    image: aiImage,
    summary:
      "A busy dental practice losing patients to missed calls. We deployed an AI receptionist that answers instantly, books appointments and follows up on every inquiry — day and night.",
    metrics: [
      { value: "20 hrs", label: "Saved per week" },
      { value: "96%", label: "Of calls answered" },
      { value: "<60s", label: "Lead follow-up" },
    ],
  },
  {
    title: "Marina Strength Club",
    industry: "Fitness · Marina District",
    services: ["Digital Marketing & Growth"],
    image: marketingImage,
    summary:
      "A gym ready to grow beyond word of mouth. We built full-funnel Meta and Google campaigns with dedicated landing pages and email nurture — memberships climbed three months in a row.",
    metrics: [
      { value: "4.1x", label: "Return on ad spend" },
      { value: "+312%", label: "New memberships" },
      { value: "-38%", label: "Cost per lead" },
    ],
  },
];

export const testimonials = [
  {
    quote:
      "The CUL Group rebuilt our website and our entire Google presence. Within three months we were ranking in the map pack and new customers mention it every week.",
    author: "Restaurant Owner",
    business: "San Francisco",
  },
  {
    quote:
      "They automated our booking and follow-up completely. I got my evenings back and we're booking more appointments than ever.",
    author: "Clinic Director",
    business: "Bay Area",
  },
  {
    quote:
      "Every other agency talked impressions. The CUL Group talked revenue — and then delivered it. Best marketing decision we've made.",
    author: "Retail Founder",
    business: "San Francisco",
  },
];

export { heroImage, aboutImage };
