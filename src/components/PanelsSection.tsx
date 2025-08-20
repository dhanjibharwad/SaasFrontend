// src/components/PanelsSection.tsx
import React from "react";
// import SectionTitle from "@/components/SectionTitle"; // ← adjust if needed

/** tiny gradient tick */
const Tick: React.FC = () => (
  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full
                   bg-gradient-to-r from-sky-400 to-sky-500 text-white shadow">
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
      <path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  </span>
);

/** bullet that keeps your text intact */
const Li: React.FC<React.PropsWithChildren> = ({ children }) => (
  <li className="flex items-start gap-3 text-slate-600">
    <Tick />
    <span className="leading-relaxed">{children}</span>
  </li>
);

/** decorative icon (no extra text content) */
const IconBadge: React.FC = () => (
  <div className="h-12 w-12 rounded-2xl bg-gradient-to-br from-sky-400 to-violet-600 opacity-90
                  shadow-lg grid place-items-center text-white">
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
      <path d="M4 7h16M7 12h10M9 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  </div>
);

const card =
  "rounded-3xl bg-white/90 backdrop-blur border border-white/80 " +
  "ring-1 ring-slate-100/70 shadow-[0_10px_30px_rgba(17,12,46,.08)] p-7 md:p-8 flex flex-col";

export default function PanelsSection() {
  return (
  <section className="relative py-20 md:py-24">
  {/* soft header gradient like the reference */}
  <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sky-50 via-white to-violet-50" />

  <div className="mx-auto w-[min(1200px,92%)]">
    {/* Header (your exact copy) */}
    <div className="mb-8 lg:text-right">
      <span className="text-l font-bold tracking-[.2em] uppercase
                       bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600
                       bg-clip-text text-transparent">
        Panels
      </span>
      <h2 className="mt-3 text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900 lg:text-right">
        Admin, Buyer, and Supplier
      </h2>
      <p className="mt-4 max-w-3xl text-slate-600 lg:ml-auto lg:text-right">
        Purpose-built workspaces keep each role focused while sharing one secure data model.
      </p>
    </div>

    {/* Cards (layout + styling like the image) */}
    <div className="grid gap-6 lg:grid-cols-3">
      {/* Admin */}
      <article className={card}>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Admin</h3>
          <IconBadge />
        </div>

        <hr className="my-6 border-slate-200/80" />

        <ul className="space-y-3">
          <Li>User management & settings</Li>
          <Li>Financials & subscriptions</Li>
          <Li>Tickets & reports</Li>
        </ul>
      </article>

      {/* Buyer */}
      <article className={card}>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Buyer</h3>
          <IconBadge />
        </div>

        <hr className="my-6 border-slate-200/80" />

        <ul className="space-y-3">
          <Li>Dashboard: active RFQs, alerts</Li>
          <Li>Create RFQs, track status & logs</Li>
          <Li>Vendor search, groups, favorites</Li>
          <Li>Reports: history, comparisons, performance</Li>
          <Li>Tickets & 2FA login</Li>
        </ul>
      </article>

      {/* Supplier */}
      <article className={card}>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold bg-gradient-to-r from-orange-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">Supplier</h3>
          <IconBadge />
        </div>

        <hr className="my-6 border-slate-200/80" />

        <ul className="space-y-3">
          <Li>Quick stats: active/submitted RFQs</Li>
          <Li>Offers with filters & date range</Li>
          <Li>RFQ participation reports</Li>
          <Li>Tickets, badge level & upgrade</Li>
          <Li>Subscription details & payments</Li>
        </ul>
      </article>
    </div>
  </div>
</section>

  );
}
