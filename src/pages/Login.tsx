import React, { useMemo, useState } from "react";

const Login: React.FC = () => {
  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("•••••");
  const [showPw, setShowPw] = useState(false);

  const isEmail = (v: string) => /\S+@\S+\.\S+/.test(v);
  const valid = useMemo(() => isEmail(email) && password.trim().length >= 5, [email, password]);

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!valid) return;
    // TODO: call your API here
    alert(`Sign in with\nEmail: ${email}\nPassword: ${password}`);
  };

  return (
    <>
      <style>{`
        :root{
          --text:#0f172a;
          --muted:#6b7280;
          --ring:#3b82f6;
          --border:#e5e7eb;
          --bg:#ffffff;
          --btn:#3b82f6;
          --btn-hover:#2563eb;
        }
        *{box-sizing:border-box}
        html,body,#root{height:100%}
        body{margin:0; font-family: ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, "Helvetica Neue", Arial}

        .page{
          min-height:100vh; background:#fff; color:var(--text);
          display:grid; grid-template-columns: 1.1fr .9fr;
        }
        @media (max-width: 980px){ .page{ grid-template-columns:1fr } }

        .left{
          display:flex; align-items:center; justify-content:center; padding:40px 24px;
        }
        .card{
          width:min(560px, 92%); padding:12px 4px;
        }

        .brand{
          display:flex; align-items:center; gap:12px; margin-bottom:18px;
        }
        .brand-badge{
          width:44px; height:44px; border-radius:12px; display:grid; place-items:center;
          background:#111827; color:#fff; font-weight:900; box-shadow:0 8px 24px rgba(0,0,0,.15);
        }
        h1{ font-size: clamp(24px, 3vw, 36px); margin:6px 0 4px }
        .sub{ color:var(--muted); margin-bottom:18px }

        label{ display:block; font-weight:700; font-size:14px; margin:16px 0 8px }
        .field{
          position:relative; display:flex; align-items:center;
          background:#f9fafb; border:1px solid var(--border); border-radius:10px;
          padding:10px 12px;
        }
        .field:focus-within{ border-color:var(--ring); box-shadow:0 0 0 3px rgba(59,130,246,.15) }
        .field input{
          border:none; outline:none; background:transparent; width:100%;
          font-size:15px; color:var(--text);
        }
        .icon-btn{
          width:34px; height:34px; border-radius:10px; display:grid; place-items:center;
          color:#6b7280; cursor:pointer;
        }

        .row{ display:flex; justify-content:space-between; align-items:center; margin:10px 0 6px }
        .link{ color:#111827; font-weight:700; text-decoration:underline; text-underline-offset:3px }

        .submit{
          margin-top:12px; width:100%; padding:12px 16px; border:none; border-radius:10px;
          font-weight:800; color:#fff; background:var(--btn); cursor:pointer;
          box-shadow:0 10px 24px rgba(59,130,246,.25); transition: transform .05s ease, background .2s ease;
        }
        .submit:hover{ background:var(--btn-hover) }
        .submit:disabled{ background:#cbd5e1; cursor:not-allowed; box-shadow:none }

        .divider{ display:flex; align-items:center; gap:14px; margin:18px 0 }
        .divider span{ height:1px; background:var(--border); flex:1 }
        .divider b{ color:#9ca3af; font-weight:700; white-space:nowrap }

        .oauth{
          display:flex; gap:12px; flex-wrap:wrap;
        }
        .oauth button{
          flex:1 1 180px; display:flex; gap:10px; align-items:center; justify-content:center;
          padding:10px 14px; border-radius:12px; border:1px solid var(--border); background:#fff; cursor:pointer;
        }
        .oauth img{ width:18px; height:18px }

        .below{ text-align:center; color:#94a3b8; margin-top:16px }
        .below a{ color:#111827; font-weight:800 }

        /* RIGHT SIDE IMAGE */
        .right{
          position:relative; display:flex; align-items:center; justify-content:center; padding:24px;
        }
        .imgCard{
          width:min(700px, 92%); border-radius:24px; overflow:hidden;
          background: linear-gradient(180deg,#dbeafe,#bfdbfe);
          box-shadow: 0 15px 60px rgba(0,0,0,.15);
        }
        .heroImg{
          display:block; width:100%; height:auto; transform: translate(6%, 4%) scale(1.06);
          filter: drop-shadow(0 22px 40px rgba(30,64,175,.35));
        }
        @media (max-width:980px){
          .right{ display:none } /* hide image on small screens like the reference */
        }
      `}</style>

      <main className="page">
        {/* LEFT: FORM */}
        <section className="left">
          <div className="card">
            <div className="brand">
              <div className="brand-badge">B</div>
              <div>
                <h1>Welcome back!</h1>
                <div className="sub">Please enter your credentials to sign in!</div>
              </div>
            </div>

            <form onSubmit={onSubmit} noValidate>
              <label htmlFor="email">Email</label>
              <div className="field">
                <input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  autoComplete="email"
                />
              </div>

              <label htmlFor="password">Password</label>
              <div className="field">
                <input
                  id="password"
                  type={showPw ? "text" : "password"}
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  autoComplete="current-password"
                />
                <button
                  type="button"
                  aria-label={showPw ? "Hide password" : "Show password"}
                  className="icon-btn"
                  onClick={() => setShowPw((s) => !s)}
                  title={showPw ? "Hide" : "Show"}
                >
                  {/* eye / eye-off */}
                  {showPw ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M3 3l18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M10.58 10.58A3 3 0 0012 15a3 3 0 002.42-4.42M9.88 5.09A10.94 10.94 0 0112 5c4.5 0 8.27 2.61 10 6- .48.96-1.14 1.82-1.94 2.57M6.61 6.61C4.45 7.77 2.84 9.64 2 11c1.73 3.39 5.5 6 10 6 .91 0 1.79-.1 2.63-.3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" stroke="currentColor" strokeWidth="2" fill="none"/>
                      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="2" fill="none"/>
                    </svg>
                  )}
                </button>
              </div>

              <div className="row">
                <span />
                <a className="link" href="#">Forgot password</a>
              </div>

              <button className="submit" type="submit" disabled={!valid}>
                Sign In
              </button>

              <div className="divider" aria-hidden="true">
                <span></span><b>or continue with</b><span></span>
              </div>

              <div className="oauth">
                <button type="button" onClick={() => alert("Google OAuth")}>
                  <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="" />
                  Google
                </button>
                {/* <button type="button" onClick={() => alert("GitHub OAuth")}>
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" alt="" />
                  Github
                </button> */}
              </div>

              <div className="below">
                Don’t have an account yet? <a href="#">Sign up</a>
              </div>
            </form>
          </div>
        </section>

        {/* RIGHT: IMAGE */}
        <aside className="right" aria-hidden="true">
          <div className="">
            <img
              className="heroImg"
              src="/assets/signin.png"
              alt=""
              loading="lazy"
            />
          </div>
        </aside>
      </main>
    </>
  );
};

export default Login;
