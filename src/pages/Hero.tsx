import React from "react";

const Hero: React.FC = () => {
  return (
    <>
      <style>{`
        .hero-wrap{
          position:relative; overflow:hidden;
          background:
            radial-gradient(1200px 800px at 15% 0%, #8fffff 0%, #82C8E5 30%, transparent 60%),
            radial-gradient(1200px 900px at 85% 10%, #ffd7e8 0%, #ffd7e8 35%, transparent 65%),
            radial-gradient(1000px 700px at 50% 75%, #ffe8b6 0%, #ffe8b6 35%, transparent 70%),
            linear-gradient(180deg, #e9fbff, #f1e9ff 40%, #f7e7ff 70%, #ffffff 100%);
        }
        .hero{
          width:min(1200px, 92%); margin:0 auto; display:grid;
          grid-template-columns: 1.05fr .95fr; gap:40px; align-items:center;
          padding:120px 0 300px;
        }
        @media (max-width: 1000px){ .hero{ grid-template-columns:1fr; padding:56px 0 24px; } }

        .eyebrow{ display:inline-flex; align-items:center; gap:8px; background:#ffffffcc; color:#111;
          border:1px solid #eeeeee; padding:8px 14px; border-radius:999px; font-weight:700;
          box-shadow:0 8px 24px rgba(0,0,0,.05);
        }
        h1{ font-size: clamp(30px, 6vw, 64px); line-height:1.05; color:#0f172a; margin:18px 0 16px; letter-spacing:-.02em;}
        .gradient-word{ background:linear-gradient(90deg,#ff9a44,#ff5ac6 45%,#6a48ff 85%); -webkit-background-clip:text; background-clip:text; color:transparent; font-weight:900;}
        .lead{ color:#667085; font-size:18px; max-width:48ch; margin-bottom:24px;}
        .cta-row{display:flex; gap:14px; flex-wrap:wrap}
        .btn{ display:inline-flex; align-items:center; justify-content:center; padding:14px 20px; border-radius:999px; font-weight:800;
          border:1px solid #e6e6e6; background:#0c0c0c; color:#fff; box-shadow:0 8px 24px rgba(0,0,0,.12);}
        .btn.primary{ background:linear-gradient(90deg,#ffb34e,#ff5bc2); color:#fff; border:none;}
        .btn:hover{ transform:translateY(-1px); }

        .mock{ background:#fff; border-radius:22px; border:1px solid #f0f0f0;
          box-shadow:0 10px 30px rgba(0,0,0,.05), 0 30px 80px rgba(255, 90, 198, .15); overflow:hidden;}
        .mock-head{ height:64px; display:flex; align-items:center; gap:10px; padding:0 16px; border-bottom:1px solid #f3f3f3;}
        .dot{width:10px; height:10px; border-radius:999px; background:#e5e7eb}
        .mock-body{ padding:18px; }
        .stat-row{ display:grid; grid-template-columns: repeat(2, 1fr); gap:14px; margin-bottom:10px;}
        .stat{ background:#fafafa; border:1px solid #f0f0f0; border-radius:14px; padding:12px; display:flex; align-items:center; gap:10px; color:#0f172a; font-weight:800;}
        .stat small{ display:block; color:#6b7280; font-weight:600; }
        .chart{ position:relative; background:#fff; border:1px solid #f0f0f0; border-radius:16px; padding:12px; height:240px; overflow:hidden;}
        .curve{ position:absolute; inset:0; background:
            radial-gradient(120px 120px at 25% 70%, rgba(255, 90, 198,.15), transparent 60%),
            radial-gradient(160px 120px at 70% 35%, rgba(130, 108, 255,.18), transparent 60%);}
        .play{ position:absolute; right:18px; top:18px; width:74px; height:74px; border-radius:999px;
          background:radial-gradient(closest-side, rgba(255, 90, 198,.85) 65%, rgba(255, 90, 198,.35));
          display:grid; place-items:center; box-shadow:0 12px 28px rgba(255, 90, 198,.35);}
        .play::after{ content:""; width:0; height:0; border-left:16px solid #fff; border-top:10px solid transparent; border-bottom:10px solid transparent; margin-left:4px;}

        /* === Bottom BORDER-ONLY wave animation === */
        .wave{
          --h: 110px;              /* wave strip height */
          --c: #ffffff;            /* color of the lower area (page white) */
          position:absolute; left:0; right:0; bottom:-1px; height:var(--h);
          overflow:hidden; pointer-events:none;
          /* optional soft glow line at the seam */
          filter: drop-shadow(0 -1px 0 rgba(0,0,0,.04));
        }
        .wave svg{
          position:absolute; left:0; bottom:0;
          width:200%; height:100%;
          will-change: transform;
        }
        .wave .wave1{ animation:wave-x 12s linear infinite; opacity:0.95; }
        .wave .wave2{ animation:wave-x-2 18s linear infinite; opacity:0.5; bottom:6px; }

        @keyframes wave-x{
          0%{ transform: translateX(0); }
          100%{ transform: translateX(-50%); }
        }
        @keyframes wave-x-2{
          0%{ transform: translateX(0); }
          100%{ transform: translateX(-25%); } /* slower/parallax */
        }
      `}</style>

      <section className="hero-wrap">
        <div className="hero">
          {/* Left */}
          <div>
            <span className="eyebrow">Welcome To</span>
            <h1>
              Saas <span className="gradient-word">Application</span><br />For Business
            </h1>
            <p className="lead">
              Make your awesome business idea a reality with Soften. High-performing RFQ platform
               that drive your business forward.
            </p>

            <div className="cta-row">
              <a href="#get-started" className="btn primary">Get Started</a>
              <a href="#contact" className="btn">Contact Us</a>
            </div>
          </div>

          {/* Right: dashboard mock */}
          <div className="mock">
            <div className="mock-head">
              <span className="dot" /><span className="dot" /><span className="dot" />
              <div style={{ marginLeft: "auto", display: "flex", gap: 8 }}>
                <span className="dot" /><span className="dot" /><span className="dot" />
              </div>
            </div>
            <div className="mock-body">
              <div className="stat-row">
                <div className="stat">
                  <div style={{ width: 34, height: 34, borderRadius: 10, background: "#eef2ff" }} />
                  <div><strong>13,970</strong><small>Users</small></div>
                </div>
                <div className="stat">
                  <div style={{ width: 34, height: 34, borderRadius: 10, background: "#fff1f2" }} />
                  <div><strong>18,045+</strong><small>Total RFQs</small></div>
                </div>
              </div>

              <div className="chart">
                <div className="curve" />
                <div className="play" title="Play demo" />
                <svg width="100%" height="100%" viewBox="0 0 600 260" preserveAspectRatio="none">
                  <g stroke="#f1f5f9" strokeWidth="1">
                    {[...Array(6)].map((_, i) => (
                      <line key={i} x1="0" x2="600" y1={40 + i*36} y2={40 + i*36} />
                    ))}
                  </g>
                  <path d="M20,140 C120,120 200,200 280,160 C360,120 440,140 520,110"
                        fill="none" stroke="#ef4444" strokeWidth="3" />
                  <path d="M20,180 C120,150 220,120 300,150 C380,180 460,140 520,170"
                        fill="none" stroke="#6366f1" strokeWidth="3" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* === Animated bottom border waves === */}
        <div className="wave" aria-hidden="true">
          {/* Foreground wave */}
          <svg className="wave1" viewBox="0 0 1440 110" preserveAspectRatio="none">
            <path
              d="M0,40 Q80,0 160,40 T320,40 T480,40 T640,40 T800,40 T960,40 T1120,40 T1280,40 T1440,40 L1440,110 L0,110 Z"
              fill="#ffffff"
            />
          </svg>

          {/* Secondary softer wave (parallax) */}
          <svg className="wave2" viewBox="0 0 1440 110" preserveAspectRatio="none">
            <path
              d="M0,52 Q90,20 180,52 T360,52 T540,52 T720,52 T900,52 T1080,52 T1260,52 T1440,52 L1440,110 L0,110 Z"
              fill="#ffffff"
            />
          </svg>
        </div>
      </section>
    </>
  );
};

export default Hero;
