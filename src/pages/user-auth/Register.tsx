import { useState } from "react"
import { supabase } from "../../lib/supabaseClient"

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPw, setShowPw] = useState(false)
  const [message, setMessage] = useState<{ type: "ok" | "err"; text: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)
    const { data, error } = await supabase.auth.signUp({ email, password })
    if (error) setMessage({ type: "err", text: error.message })
    else setMessage({ type: "ok", text: "Check your email to confirm your account ✅" })
    console.log("Register:", { data, error })
    setLoading(false)
  }

  const oauth = async (provider: "google" | "apple" | "facebook") => {
    setLoading(true)
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: { redirectTo: `${window.location.origin}/auth/callback` },
    })
    if (error) setMessage({ type: "err", text: error.message })
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {/* Card container */}
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-slate-200">
        {/* Brand */}
        <div className="mb-8 flex justify-center">
          <div className="bg-black px-8 py-4 rounded-lg flex justify-center items-center">
            <img
              src="/assets/sou1.png"
              alt="Souqnests Logo"
              className="h-20 object-contain"
            />
          </div>
        </div>

        <div className="text-center">
  <p className="text-sm text-slate-500">Start your journey</p>
  <h1 className="mb-6 mt-1 text-2xl font-bold text-slate-900">
    Sign Up to Souqnests
  </h1>
</div>

        {/* Alert */}
        {message && (
          <div
            className={`mb-4 rounded-lg border px-3 py-2 text-sm ${
              message.type === "ok"
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-rose-200 bg-rose-50 text-rose-700"
            }`}
          >
            {message.text}
          </div>
        )}

        {/* Form */}
        <form onSubmit={handleRegister} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Email</label>
            <div className="relative mt-1">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <path d="M4 6h16v12H4z" stroke="currentColor" strokeWidth="1.5" />
                  <path d="m4 7 8 6 8-6" stroke="currentColor" strokeWidth="1.5" />
                </svg>
              </span>
              <input
                type="email"
                placeholder="example@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-slate-900 outline-none focus:border-blue-600 focus:ring focus:ring-blue-600/20"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Password</label>
            <div className="relative mt-1">
              <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                  <rect x="5" y="11" width="14" height="9" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M8 11V8a4 4 0 0 1 8 0v3" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </span>
              <input
                type={showPw ? "text" : "password"}
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-10 text-slate-900 outline-none focus:border-blue-600 focus:ring focus:ring-blue-600/20"
              />
              <button
                type="button"
                onClick={() => setShowPw((s) => !s)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
                aria-label={showPw ? "Hide password" : "Show password"}
              >
                {showPw ? (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M10.6 10.6A3 3 0 0 0 12 15a3 3 0 0 0 2.4-4.8M21 12s-3.5 6-9 6-9-6-9-6 3.5-6 9-6c2.1 0 4 .8 5.6 2.1" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M21 12s-3.5 6-9 6-9-6-9-6 3.5-6 9-6 9 6 9 6Z" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.5"/>
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Please wait…" : "Sign Up"}
          </button>
        </form>

        {/* Divider */}
        <div className="my-6 flex items-center gap-4 text-slate-400">
          <span className="h-px flex-1 bg-slate-200" />
          <span className="text-sm">or sign up with</span>
          <span className="h-px flex-1 bg-slate-200" />
        </div>

        {/* Social buttons */}
        <div className="flex items-center justify-center gap-3">
          <button
            onClick={() => oauth("facebook")}
            className="inline-flex h-10 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-[#1877F2]">
              <path d="M13 10h2.6l.4-3H13V5.6c0-.9.3-1.6 1.6-1.6H16V1.1C15.6 1 14.7 1 13.7 1 11.5 1 10 2.4 10 5v2H7v3h3v9h3v-9Z" />
            </svg>
          </button>
          <button
            onClick={() => oauth("google")}
            className="inline-flex h-10 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50"
          >
            <svg width="18" height="18" viewBox="0 0 48 48">
              <path fill="#FFC107" d="M43.6 20.5H42V20H24v8h11.3A12.9 12.9 0 0 1 24 36.9 13 13 0 1 1 24 11a12.4 12.4 0 0 1 8.8 3.5l5.6-5.6A21 21 0 1 0 24 45c10.9 0 20-8 20-21 0-1.6-.2-2.8-.4-3.5Z"/>
              <path fill="#FF3D00" d="M6.3 14.7 12.9 20A13 13 0 0 1 24 11c3.5 0 6.7 1.3 9.1 3.5l5.6-5.6A21 21 0 0 0 6.3 14.7Z"/>
              <path fill="#4CAF50" d="M24 45c5.4 0 10.3-1.8 14.1-5l-6.5-5a13 13 0 0 1-19.5-5.1L5.9 31C9 39 16 45 24 45Z"/>
              <path fill="#1976D2" d="M43.6 20.5H42V20H24v8h11.3c-1.2 3.6-4.2 6.3-7.9 7.4l6.5 5C38.1 37.6 44 31 44 24c0-1.6-.2-2.8-.4-3.5Z"/>
            </svg>
          </button>
          <button
            onClick={() => oauth("apple")}
            className="inline-flex h-10 w-12 items-center justify-center rounded-xl border border-slate-200 bg-white hover:bg-slate-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="text-black">
              <path d="M16.4 13.3c.1 2.5 2.2 3.3 2.2 3.4-.2.6-1.1 2.1-2.2 2.1-1 .2-1.3-.6-2.6-.6s-1.6.6-2.6.6c-1.2 0-2.1-1-2.8-2.3C7.5 15.1 7 13 8 11.6c.7-1 1.8-1.6 2.9-1.6 1.1 0 1.9.7 2.6.7.7 0 1.8-.9 3.1-.8.5 0 2 .2 2.9 1.6-.1 0-2.6 1.5-2.6 4.8Z"/>
              <path d="M14.7 7.3c.5-.6.9-1.4.7-2.3-.8.1-1.7.6-2.3 1.3-.5.6-.9 1.4-.7 2.3.9.1 1.8-.5 2.3-1.3Z"/>
            </svg>
          </button>
        </div>

        {/* Footer */}
        <p className="mt-8 text-center text-sm text-slate-500">
          Have an account?{" "}
          <a href="/login" className="font-semibold text-blue-600 hover:text-blue-700">
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}