// src/components/ModulesSection.tsx
import React from "react";

/** Small gradient bullet icon */
const Bullet: React.FC = () => (
  <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full
                   bg-gradient-to-r from-sky-400 to-sky-500 text-white text-[10px] shadow">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </span>
);

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex items-start gap-2 text-slate-600 leading-relaxed">
      <Bullet />
      <span>{children}</span>
    </li>
  );
}

type ModuleItem = { title: string; lines: string[] };

const DATA: ModuleItem[] = [
  { title: "Registration & Authentication", lines: ["Buyer / Vendor / Admin roles", "2FA & password reset"] },
  { title: "Subscriptions & Pricing", lines: ["Plan tiers, upgrade/downgrade", "Billing & history"] },
  { title: "RFQ Management", lines: ["Create RFQ, status dashboard", "Compare offers and close"] },
  { title: "Vendor Management", lines: ["Profiles & catalogue", "Groups, filters & verification"] },
  { title: "Offer Management", lines: ["Submit offers with files", "Compare by price/lead/warranty"] },
  { title: "Tickets & Support", lines: ["Raise tickets & chat", "SLA and escalation hooks"] },
  { title: "Reports & Analytics", lines: ["RFQ/participation exports", "Charts & date filters"] },
  { title: "Badge System", lines: ["Apply & level up badges", "Display on profiles"] },
  { title: "Dashboard & Notifications", lines: ["Quick stats & alerts", "Inbox + rules & triggers"] },
];

const card =
  "relative rounded-3xl bg-white/90 backdrop-blur-sm border border-white/80 " +
  "shadow-[0_10px_30px_rgba(17,12,46,0.08)] ring-1 ring-slate-100/60 " +
  "p-6 sm:p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl";

const tilts = ["-rotate-1", "rotate-1", "-rotate-[1.25deg]", "rotate-[1.25deg]"];

export default function ModulesSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* soft ambient gradient + blobs */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-pink-50" />
      <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-violet-400/25 blur-3xl -z-10" />
      <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-fuchsia-400/20 blur-3xl -z-10" />

      <div className="mx-auto w-[min(1200px,92%)]">
        {/* Section header (eyebrow + title + description) */}
        <div className="max-w-3xl">
          <span className="inline-block text-l font-bold tracking-[.2em] uppercase
                           bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            Modules
          </span>
          <h2 className="mt-3 text-3xl md:text-5xl font-extrabold leading-tight text-slate-900">
            Everything you need to run RFQs at scale
          </h2>
          <p className="mt-4 text-slate-600 leading-relaxed">
            Clean, extensible building blocks covering access control, subscriptions, RFQ process, vendors,
            offers, support, analytics, badges, notifications and settings.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {DATA.map((item, i) => (
            <article key={item.title} className={`${card} ${tilts[i % tilts.length]} hover:rotate-0`}>
              {/* subtle inner glow */}
              <div className="absolute inset-0 -z-10 rounded-3xl bg-gradient-to-br from-violet-50/70 to-fuchsia-50/40" />
              <h3 className="text-lg sm:text-xl font-semibold text-slate-900">{item.title}</h3>
              <ul className="mt-4 space-y-2">
                {item.lines.map((line) => (
                  <Li key={line}>{line}</Li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
