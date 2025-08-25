import { useEffect, useState } from "react"
import { supabase } from "../../lib/supabaseClient"
import { useNavigate } from "react-router-dom"

export default function ResetPassword() {
  const [password, setPassword] = useState("")
  const [confirm, setConfirm] = useState("")
  const [showPw, setShowPw] = useState(false)
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null)
  const [hasRecoverySession, setHasRecoverySession] = useState<boolean | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession()
      setHasRecoverySession(!!data.session)
    }
    init()
  }, [])

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault()
    setMsg(null)
    if (password.length < 6) return setMsg({ type: "err", text: "Password must be at least 6 characters." })
    if (password !== confirm) return setMsg({ type: "err", text: "Passwords do not match." })

    setLoading(true)
    const { data, error } = await supabase.auth.updateUser({ password })
    if (error) setMsg({ type: "err", text: error.message })
    else {
      setMsg({ type: "ok", text: "Password updated! You can now sign in." })
      setTimeout(() => navigate("/login"), 1200)
    }
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

        <p className="text-sm text-slate-500">Create a new password</p>
        <h1 className="mb-6 mt-1 text-2xl font-bold text-slate-900">Set your password</h1>

        {hasRecoverySession === false && (
          <div className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-sm text-amber-800">
            Open this page from the password reset link we sent to your email.
          </div>
        )}

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

        <form onSubmit={handleUpdate} className="space-y-4">
          {/* New password */}
          <div>
            <label className="block text-sm font-medium text-slate-700">New password</label>
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

          {/* Confirm */}
          <div>
            <label className="block text-sm font-medium text-slate-700">Confirm password</label>
            <input
              type={showPw ? "text" : "password"}
              placeholder="Repeat new password"
              value={confirm}
              onChange={(e) => setConfirm(e.target.value)}
              required
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white py-3 pl-3 pr-3 text-slate-900 outline-none focus:border-blue-600 focus:ring focus:ring-blue-600/20"
            />
          </div>

          <button
            type="submit"
            disabled={loading || hasRecoverySession === false}
            className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 disabled:opacity-60"
          >
            {loading ? "Updating…" : "Update password"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
          Remembered your password?{" "}
          <a href="/login" className="font-semibold text-blue-600 hover:text-blue-700">
            Sign in
          </a>
        </p>
      </div>
    </div>
  )
}