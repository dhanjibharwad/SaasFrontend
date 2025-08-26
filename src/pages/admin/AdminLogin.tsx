import { useState } from "react"
import { supabase } from "../../lib/supabaseClient"
import { useNavigate } from "react-router-dom"

export default function AdminLogin() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPw, setShowPw] = useState(false)
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setMsg(null)
    setLoading(true)
    
    const { data, error } = await supabase.auth.signInWithPassword({ email, password })
    if (error) {
      setMsg({ type: "err", text: error.message })
    } else {
      // Check if user has admin role
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', data.user.id)
        .single()
      
      if (profile?.role === 'admin') {
        console.log("Admin Login Success ✅", data)
        navigate("/admin/dashboard")
      } else {
        setMsg({ type: "err", text: "Access denied. Admin privileges required." })
        await supabase.auth.signOut()
      }
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

        <p className="text-sm text-slate-500">Admin Access</p>
        <h1 className="mb-6 mt-1 text-2xl font-bold text-slate-900">Admin Panel Login</h1>

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

        <form onSubmit={handleLogin} className="space-y-4">
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
                placeholder="admin@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-3 text-slate-900 outline-none focus:border-red-600 focus:ring focus:ring-red-600/20"
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

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-red-600 py-3 font-semibold text-white shadow-md transition hover:bg-red-700 disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign in"}
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-slate-500">
          <a href="/admin/forgot-password" className="font-semibold text-red-600 hover:text-red-700">
            Forgot your password?
          </a>
        </p>
      </div>
    </div>
  )
}