import { useState, useEffect } from "react"
import { supabase } from "../../lib/supabaseClient"
import { useNavigate } from "react-router-dom"

export default function AdminResetPassword() {
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPw, setShowPw] = useState(false)
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null)
  const [loading, setLoading] = useState(false)
  const [hasRecoverySession, setHasRecoverySession] = useState<boolean | null>(null)
  const navigate = useNavigate()

  useEffect(() => {
    const init = async () => {
      const { data } = await supabase.auth.getSession()
      setHasRecoverySession(!!data.session)
    }
    init()
  }, [])

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMsg(null)

    if (password !== confirmPassword) {
      setMsg({ type: "err", text: "Passwords do not match" })
      setLoading(false)
      return
    }

    const { error } = await supabase.auth.updateUser({
      password: password
    })

    if (error) {
      setMsg({ type: "err", text: error.message })
    } else {
      setMsg({ type: "ok", text: "Password updated successfully" })
      setTimeout(() => navigate('/admin/login'), 2000)
    }
    setLoading(false)
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4">
      {/* Card container */}
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-xl border border-slate-200">
        {/* Brand */}
        <div className="mb-8 flex justify-center">
          <div className="bg-red-600 px-8 py-4 rounded-lg flex justify-center items-center">
            <img
              src="/assets/sou1.png"
              alt="Souqnests Admin"
              className="h-20 object-contain"
            />
          </div>
        </div>

        <p className="text-sm text-slate-500">Admin Password Reset</p>
        <h1 className="mb-6 mt-1 text-2xl font-bold text-slate-900">Set New Password</h1>

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

        <form onSubmit={handleReset} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700">New Password</label>
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
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-10 text-slate-900 outline-none focus:border-red-600 focus:ring focus:ring-red-600/20"
              />
              <button
                type="button"
                onClick={() => setShowPw(!showPw)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600"
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

          <div>
            <label className="block text-sm font-medium text-slate-700">Confirm Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="mt-1 w-full rounded-xl border border-slate-200 bg-white py-3 pl-3 pr-3 text-slate-900 outline-none focus:border-red-600 focus:ring focus:ring-red-600/20"
            />
          </div>

          <button
            type="submit"
            disabled={loading || hasRecoverySession === false}
            className="w-full rounded-xl bg-red-600 py-3 font-semibold text-white shadow-md transition hover:bg-red-700 disabled:opacity-60"
          >
            {loading ? "Updating..." : "Update Password"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
          Back to{" "}
          <a href="/admin/login" className="font-semibold text-red-600 hover:text-red-700">
            Admin Login
          </a>
        </p>
      </div>
    </div>
  )
}