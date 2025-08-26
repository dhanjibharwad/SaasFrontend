import { useState } from "react"
import { supabase } from "../../lib/supabaseClient"

export default function ForgotPassword() {
  const [email, setEmail] = useState("")
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault()
    setMsg(null)
    setLoading(true)
    const { error } = await supabase.auth.resetPasswordForEmail(email, {
      redirectTo: `${window.location.origin}/reset-password`,
    })
    if (error) setMsg({ type: "err", text: error.message })
    else setMsg({ type: "ok", text: "Reset link sent! Check your email ✅" })
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

        <p className="text-sm text-slate-500">Trouble signing in?</p>
        <h1 className="mb-6 mt-1 text-2xl font-bold text-slate-900">Reset your password</h1>

        {msg && (
          <div
            className={`mb-4 rounded-lg border px-3 py-2 text-sm ${
              msg.type === "ok"
                ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                : "border-rose-200 bg-rose-50 text-rose-700"
            }`}
          >
            {msg.text}
          </div>
        )}

        <form onSubmit={handleSend} className="space-y-4">
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

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Sending…" : "Send reset link"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
          Back to{" "}
          <a href="/login" className="font-semibold text-blue-600 hover:text-blue-700">
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}