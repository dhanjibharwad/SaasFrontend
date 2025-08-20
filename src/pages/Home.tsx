import React from "react";
import Hero from "./Hero"; // your animated hero
import { Link } from "react-router-dom";
import ModulesSection from "../components/ModulesSection";
import PanelsSection from "../components/PanelsSection";

const card =
  "rounded-2xl border border-slate-200/70 bg-white/90 shadow-[0_10px_30px_rgba(0,0,0,.05)] p-6";

// const SectionTitle: React.FC<{ title: string; eyebrow?: string; desc?: string }> = ({
//   title,
//   eyebrow,
//   desc,
// }) => (
//   <header className="mb-8">
//     {eyebrow && (
//       <span className="inline-flex items-center gap-2 bg-white/80 text-slate-700 border border-slate-200 px-3 py-1.5 rounded-full text-xs font-bold shadow-sm">
//         {eyebrow}
//       </span>
//     )}
//     <h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
//       {title}
//     </h2>
//     {desc && <p className="mt-2 text-slate-600 max-w-3xl">{desc}</p>}
//   </header>
// );

/** New list item (replaces <Bullet/>) */
type LiProps = {
  children: React.ReactNode;
  className?: string;
};

const Li = ({ children, className = "" }: LiProps) => (
  <li
    className={
      `group relative flex items-start gap-3 rounded-xl border border-slate-200 
       bg-white/90 px-4 py-3 text-slate-700 shadow-[0_4px_16px_rgba(0,0,0,.04)]
       transition hover:shadow-[0_8px_24px_rgba(0,0,0,.08)] ${className}`
    }
  >
    {/* Accent icon */}
    <span
      className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center
                 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-indigo-600
                 text-white shadow-md"
      aria-hidden="true"
    >
      <svg viewBox="0 0 20 20" width="14" height="14" fill="none">
        <path d="M5 10l3 3 7-7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>

    {/* Text */}
    <span className="leading-relaxed">
      {children}
    </span>

    {/* Subtle left glow on hover (purely visual) */}
    <span className="pointer-events-none absolute inset-y-1 left-1 w-[2px] rounded-full bg-slate-200 transition-opacity group-hover:opacity-0" />
  </li>
);



const Home: React.FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Top hero */}
      <Hero />


<section id="about" className="relative py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 lg:gap-14 grid-cols-1 lg:grid-cols-12">
          {/* Left: Illustration */}
          <div className="lg:col-span-6 flex justify-center">
            <img
              src="/src/assets/saas21.png" // <-- replace with your image path
              alt="Team collaborating with charts, target and puzzle blocks"
              className="w-full max-w-2xl h-auto object-contain"
              loading="lazy"
            />
          </div>

          {/* Right: Content */}
          <div className="lg:col-span-6">
            <span className="inline-block text-l font-bold tracking-[.2em] uppercase">
              <span className="bg-gradient-to-r from-amber-500 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
                About Us
              </span>
            </span>

            <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
              We&apos;re Best In Buisness
              <br className="hidden md:block" /> Development
            </h2>

            <p className="mt-5 max-w-2xl text-slate-600 leading-relaxed">
              Scale your software operations through a custom engineering team.
              Meet the demand of your company’s operations with a high-performing
              nearshore team skilled in the technologies you need.
            </p>

            <div className="mt-8">
              <Link
                to="/about"
                className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white
                           bg-gradient-to-r from-amber-400 via-pink-500 to-fuchsia-600
                           shadow-lg hover:shadow-xl transition-all duration-200"
              >
                See About Us
                <svg
                  className="w-4 h-4"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M5 12h14" />
                  <path d="M12 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* Modules grid */}
      {/* <section className="relative py-14">
        <div className="mx-auto w-[min(1200px,92%)]">
          <SectionTitle
            eyebrow="Modules"
            title="Everything you need to run RFQs at scale"
            desc="Clean, extensible building blocks covering access control, subscriptions, RFQ process, vendors, offers, support, analytics, badges, notifications and settings."
          />

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {[
              ["Registration & Authentication", ["Buyer / Vendor / Admin roles", "2FA & password reset"]],
              ["Subscriptions & Pricing", ["Plan tiers, upgrade/downgrade", "Billing & history"]],
              ["RFQ Management", ["Create RFQ, status dashboard", "Compare offers and close"]],
              ["Vendor Management", ["Profiles & catalogue", "Groups, filters & verification"]],
              ["Offer Management", ["Submit offers with files", "Compare by price/lead/warranty"]],
              ["Tickets & Support", ["Raise tickets & chat", "SLA and escalation hooks"]],
              ["Reports & Analytics", ["RFQ/participation exports", "Charts & date filters"]],
              ["Badge System", ["Apply & level up badges", "Display on profiles"]],
              ["Dashboard & Notifications", ["Quick stats & alerts", "Inbox + rules & triggers"]],
              ["Settings & Preferences", ["Profile, region & language", "Notification toggles"]],
            ].map(([title, lines]) => (
              <article key={title as string} className={card}>
                <h3 className="font-semibold text-slate-900">{title}</h3>
                <ul className="mt-3 space-y-2">
                  {(lines as string[]).map((l) => (
                    <Li key={l}>{l}</Li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section> */}

      <ModulesSection />


      {/* Panels overview */}
      {/* <section className="relative py-14">
        <div className="mx-auto w-[min(1200px,92%)]">
          <SectionTitle
            eyebrow="Panels"
            title="Admin, Buyer, and Supplier portals"
            desc="Purpose-built workspaces keep each role focused while sharing one secure data model."
          />

          <div className="grid gap-5 lg:grid-cols-3">
            
            <article className={card}>
              <h3 className="font-semibold text-slate-900">Admin</h3>
              <ul className="mt-3 space-y-2">
                <Li>User management & settings</Li>
                <Li>Financials & subscriptions</Li>
                <Li>Tickets & reports</Li>
              </ul>
            </article>

            
            <article className={card}>
              <h3 className="font-semibold text-slate-900">Buyer</h3>
              <ul className="mt-3 space-y-2">
                <Li>Dashboard: active RFQs, alerts</Li>
                <Li>Create RFQs, track status & logs</Li>
                <Li>Vendor search, groups, favorites</Li>
                <Li>Reports: history, comparisons, performance</Li>
                <Li>Tickets & 2FA login</Li>
              </ul>
            </article>

            
            <article className={card}>
              <h3 className="font-semibold text-slate-900">Supplier</h3>
              <ul className="mt-3 space-y-2">
                <Li>Quick stats: active/submitted RFQs</Li>
                <Li>Offers with filters & date range</Li>
                <Li>RFQ participation reports</Li>
                <Li>Tickets, badge level & upgrade</Li>
                <Li>Subscription details & payments</Li>
              </ul>
            </article>
          </div>
        </div>
      </section> */}

      <PanelsSection />


      <section id="about" className="relative py-16 md:py-24">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid items-center gap-10 lg:gap-14 grid-cols-1 lg:grid-cols-12">
      {/* Left -> Right: Illustration (now on the RIGHT at lg+) */}
      <div className="lg:col-span-6 lg:order-2 flex justify-center">
        <img
          src="/src/assets/saas3.png" // <-- replace with your image path
          alt="Team collaborating with charts, target and puzzle blocks"
          className="w-full max-w-2xl h-auto object-contain"
          loading="lazy"
        />
      </div>

      {/* Right -> Left: Content (now on the LEFT at lg+) */}
      <div className="lg:col-span-6 lg:order-1">
        <span className="inline-block text-l font-bold tracking-[.2em] uppercase">
          <span className="bg-gradient-to-r from-amber-500 via-pink-600 to-fuchsia-600 bg-clip-text text-transparent">
            What we Offer
          </span>
        </span>

        <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
          We Delevier Best
          <br className="hidden md:block" /> Solutions
        </h2>

        <p className="mt-5 max-w-2xl text-slate-600 leading-relaxed">
         We offer a unified RFQ platform with dedicated portals for Admin, Buyer, and Supplier so each role gets a focused workspace on one shared data model. Buyers can create RFQs, track status and logs, manage vendors (groups, profiles, search), receive structured offers, compare side-by-side on commercial terms, and award with approvals everything is recorded end-to-end. Suppliers get a clean flow to register, accept/decline RFQs, submit offers, and monitor badges, subscriptions, tickets, and reports. The platform also includes secure login with optional 2FA, plans & billing, tickets/chat support, reports & analytics, badges, and rich settings with alerts/notifications.
        </p>

        <div className="mt-8">
          <Link
            to="/about"
            className="inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-white
                       bg-gradient-to-r from-amber-400 via-pink-500 to-fuchsia-600
                       shadow-lg hover:shadow-xl transition-all duration-200"
          >
            Explore
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14" />
              <path d="M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Workflow */}
      <section className="relative py-20 md:py-24">
  {/* soft header gradient like above sections */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-violet-50" />

  <div className="mx-auto w-[min(1200px,92%)]">
    {/* Styled header — same content as before */}
    <div className="max-w-3xl">
      <span className="text-l font-bold tracking-[.25em] uppercase
                       bg-gradient-to-r from-amber-500 via-pink-600 to-fuchsia-600
                       bg-clip-text text-transparent">
        Workflow
      </span>

      <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
        Transparent RFQ-to-Award Steps
      </h2>

      <p className="mt-6 text-slate-600 leading-relaxed">
        Each RFQ flows through a consistent lifecycle so teams can compare offers fairly and close with confidence.
      </p>
    </div>

    {/* Cards (unchanged content; styling aligned with the first div) */}
    <div className="mt-8 grid gap-6 lg:grid-cols-2">
      {/* Buyer steps */}
      <article className={card}>
        {/* gradient accent bar like the header vibe */}
        <div className="h-1.5 w-14 rounded-full bg-gradient-to-r from-amber-500 via-pink-600 to-fuchsia-600 mb-4" />
        <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900">Buyer journey</h3>

        <ol className="mt-4 space-y-3">
          {[
            "Register & log in",
            "Prepare RFQ (standards, categories, timeline, attachments)",
            "Post RFQ to selected suppliers",
            "Receive offers",
            "Prepare comparison (value, lead time, warranty, etc.)",
            "Close RFQ and notify all vendors",
          ].map((step, i) => (
            <li key={i} className="flex gap-3">
              {/* gradient number chip for the screenshot vibe */}
              <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full
                               bg-gradient-to-r from-violet-600 to-fuchsia-600 text-white text-xs font-bold">
                {i + 1}
              </span>
              <span className="text-slate-700">{step}</span>
            </li>
          ))}
        </ol>
      </article>

      {/* Supplier actions */}
      <article className={card}>
        {/* gradient accent bar like the header vibe */}
        <div className="h-1.5 w-14 rounded-full bg-gradient-to-r from-amber-500 via-pink-600 to-fuchsia-600 mb-4" />
        <h3 className="text-2xl md:text-3xl font-extrabold leading-tight text-slate-900">Supplier actions</h3>

        <ul className="mt-4 space-y-2">
          <Li>Create profile & receive RFQs</Li>
          <Li>Accept/Reject RFQ and set tentative submit date</Li>
          <Li>Submit offer with docs; log kept for comments</Li>
          <Li>Get auto-closure updates when awarded</Li>
        </ul>
      </article>
    </div>
  </div>
</section>



      


    
     

     

      {/* CTA */}
      <section className="relative py-14">
  <div className="mx-auto w-[min(1200px,92%)]">
    <div
      className="
        relative overflow-hidden rounded-3xl
        bg-white/90 backdrop-blur-xl
        border border-white/80 ring-1 ring-slate-100
        shadow-[0_10px_30px_rgba(17,12,46,.08)]
        p-8 md:p-10
      "
    >
      {/* decorative gradient blobs */}
      <div className="pointer-events-none absolute -top-20 -left-16 h-48 w-48 rounded-full bg-amber-400/30 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-24 -right-10 h-60 w-60 rounded-full bg-fuchsia-500/20 blur-3xl -z-10" />
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-72 w-72 rounded-full bg-purple-500/10 blur-3xl -z-10" />

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        {/* left: copy */}
        <div className="max-w-2xl">
          <div className="h-1.5 w-16 rounded-full bg-gradient-to-r from-amber-500 via-pink-600 to-fuchsia-600 mb-4" />
          <h3 className="text-slate-900 text-2xl md:text-3xl font-extrabold">
            Ready to launch your RFQ platform?
          </h3>
          <p className="text-slate-600 mt-2 leading-relaxed">
            Get a guided demo and see how the workflow fits your use-case.
          </p>
        </div>

        {/* right: actions */}
        <div className="w-full sm:w-auto flex flex-wrap gap-3">
          <a
            href="#book-demo"
            className="
              inline-flex items-center justify-center gap-2
              px-5 py-3 rounded-full font-semibold text-white
              bg-gradient-to-r from-orange-400 via-pink-500 to-indigo-600
              shadow-lg hover:shadow-xl transition-all active:scale-[0.99]
              focus:outline-none focus-visible:ring-2 focus-visible:ring-pink-400/60
            "
          >
            Book a demo
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>

          <a
            href="#contact"
            className="
              inline-flex items-center justify-center
              px-5 py-3 rounded-full font-semibold
              border border-slate-300 text-slate-800
              hover:bg-slate-50 transition-colors
              focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300
            "
          >
            Contact sales
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

    </main>
  );
};

export default Home;
