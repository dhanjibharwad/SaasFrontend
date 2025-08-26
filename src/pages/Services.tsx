import React from "react";

type Service = { title: string; blurb: string };

export default function Services() {
  const items: Service[] = [
    {
      title: "Software Design",
      blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.",
    },
    {
      title: "Data Security",
      blurb: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec id elit non mi porta.",
    },
    {
      title: "App Integration",
      blurb: "Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis vestibulum.",
    },
    {
      title: "Social Marketing",
      blurb: "Cras mattis consectetur purus sit amet fermentum. Etiam porta sem malesuada magna mollis.",
    },
    {
      title: "Development",
      blurb: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.",
    },
    {
      title: "Business Strategy",
      blurb: "Maecenas faucibus mollis interdum. Vestibulum id ligula porta felis euismod semper.",
    },
  ];

  return (
    <main className="relative min-h-screen overflow-hidden bg-gradient-to-b from-[#eef7ff] via-[#f9eefe] to-[#fff3f7] px-5 pb-24 pt-16 text-slate-900">
      <style>{`
        @keyframes rise { 
          from { opacity:0; transform:translateY(12px) scale(.98) } 
          to { opacity:1; transform:translateY(0) scale(1) } 
        }
        .animate-rise { animation:rise .7s ease both }
        .tilt-3d { transform-style:preserve-3d; perspective:1000px }
        .card-tilt:hover { transform: translateY(-6px) rotateX(.6deg) rotateY(.6deg) }
      `}</style>

      <div className="mx-auto w-full max-w-[1200px]">
        {/* Heading */}
        <div className="mb-8">
          <span className="bg-gradient-to-r from-[#6b9cff] to-[#7b5cff] bg-clip-text text-sm font-extrabold tracking-wide text-transparent">
            SERVICES
          </span>
          <h1 className="mt-2 text-4xl font-extrabold leading-tight md:text-6xl">
            Feel The Power Of
            <br />
            Technology Software
            <br />
            Service
          </h1>
          <p className="mt-4 max-w-2xl text-[15.5px] leading-7 text-slate-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.
            Proin a felis non enim iaculis euismod. Sed posuere, massa at porttitor efficitur.
          </p>
        </div>

        {/* Grid */}
        <div className="tilt-3d grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {items.map((it, i) => (
            <article
              key={it.title}
              className={[
                "group relative overflow-hidden rounded-[26px] border p-6 shadow-[0_15px_45px_rgba(14,18,46,0.08)] transition-all duration-300 will-change-transform",
                "animate-rise",
                "card-tilt",
                "border-slate-200/60 bg-white",
              ].join(" ")}
              style={{ animationDelay: `${0.07 * (i + 1)}s` }}
            >
              {/* gradient overlay with diagonal sweep */}
              <span
                className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-[#3da5ff] via-[#7b5cff] to-[#ff60b2]
                           opacity-0 translate-x-[-100%] translate-y-[-100%]
                           transition-all duration-700
                           group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0"
              />

              {/* Icon */}
              <div
                className="mb-3 inline-grid h-14 w-14 place-items-center rounded-2xl border border-indigo-500/30 bg-gradient-to-br from-indigo-500/10 to-sky-500/10 
                           transition-colors duration-300 group-hover:border-white/50 group-hover:bg-white/10"
              >
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                  <rect
                    x="3"
                    y="4"
                    width="18"
                    height="14"
                    rx="3"
                    className="stroke-indigo-500 transition-colors group-hover:stroke-white"
                    strokeWidth="2"
                  />
                  <path
                    d="M7 9h10M7 12h6"
                    className="stroke-indigo-500 transition-colors group-hover:stroke-white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {/* Title */}
              <h3 className="text-[22px] font-extrabold text-slate-900 transition-colors duration-500 group-hover:text-white">
                {it.title}
              </h3>

              {/* Blurb */}
              <p className="mt-2 text-[15.5px] leading-7 text-slate-600 transition-colors duration-500 group-hover:text-indigo-50">
                {it.blurb}
              </p>

              {/* CTA */}
              <a
                href="#"
                className="mt-4 inline-flex items-center gap-2 font-extrabold text-slate-900 transition-colors duration-500 group-hover:text-white"
              >
                Read More
                <svg
                  className="transition-transform group-hover:translate-x-1"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </article>    // end card here 
          ))}
        </div>
      </div>
    </main>
  );
}
