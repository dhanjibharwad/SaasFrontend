import { useState, useEffect } from "react"
import { supabase } from "../lib/supabaseClient"
import { useNavigate } from "react-router-dom"

export default function Profile() {
  const [user, setUser] = useState<any>(null)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [currentPassword, setCurrentPassword] = useState("")
  const [newPassword, setNewPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPasswordForm, setShowPasswordForm] = useState(false)
  const [msg, setMsg] = useState<{ type: "ok" | "err"; text: string } | null>(null)
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) {
      navigate("/login")
      return
    }
    setUser(user)
    setEmail(user.email || "")
    setUsername(user.email?.split('@')[0] || "")
  }

  const updateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMsg(null)

    const { error } = await supabase.auth.updateUser({
      email: email
    })

    if (error) {
      setMsg({ type: "err", text: error.message })
    } else {
      setMsg({ type: "ok", text: "Profile updated successfully" })
    }
    setLoading(false)
  }

  const changePassword = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMsg(null)

    if (newPassword !== confirmPassword) {
      setMsg({ type: "err", text: "Passwords do not match" })
      setLoading(false)
      return
    }

    const { error } = await supabase.auth.updateUser({
      password: newPassword
    })

    if (error) {
      setMsg({ type: "err", text: error.message })
    } else {
      setMsg({ type: "ok", text: "Password changed successfully" })
      setCurrentPassword("")
      setNewPassword("")
      setConfirmPassword("")
      setShowPasswordForm(false)
    }
    setLoading(false)
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl border border-slate-200 p-8">
          {/* Header */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-400 to-amber-400 rounded-full grid place-items-center">
              <span className="text-slate-900 text-2xl font-bold">
                {user.email?.charAt(0).toUpperCase()}
              </span>
            </div>
            <div>
              <h1 className="text-2xl font-bold text-slate-900">Profile Settings</h1>
              <p className="text-slate-500">Manage your account information</p>
            </div>
          </div>

          {msg && (
            <div
              className={`mb-6 rounded-lg border px-4 py-3 text-sm ${
                msg.type === "ok"
                  ? "border-emerald-200 bg-emerald-50 text-emerald-700"
                  : "border-rose-200 bg-rose-50 text-rose-700"
              }`}
            >
              {msg.text}
            </div>
          )}

          {/* Profile Form */}
          <form onSubmit={updateProfile} className="space-y-6 mb-8">
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Username</label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full rounded-xl border border-slate-200 bg-slate-50 py-3 px-4 text-slate-900 cursor-not-allowed"
                disabled
              />
              <p className="text-xs text-slate-500 mt-1">Username is derived from your email</p>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-xl border border-slate-200 bg-white py-3 px-4 text-slate-900 outline-none focus:border-blue-600 focus:ring focus:ring-blue-600/20"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-xl bg-blue-600 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 disabled:opacity-60"
            >
              {loading ? "Updating..." : "Update Profile"}
            </button>
          </form>

          {/* Password Section */}
          <div className="border-t border-slate-200 pt-8">
            <div className="flex items-center justify-between mb-4">
              <div>
                <h2 className="text-lg font-semibold text-slate-900">Password</h2>
                <p className="text-sm text-slate-500">Change your account password</p>
              </div>
              <button
                onClick={() => setShowPasswordForm(!showPasswordForm)}
                className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 border border-blue-200 rounded-lg hover:bg-blue-50"
              >
                {showPasswordForm ? "Cancel" : "Change Password"}
              </button>
            </div>

            {showPasswordForm && (
              <form onSubmit={changePassword} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Current Password</label>
                  <input
                    type="password"
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 px-4 text-slate-900 outline-none focus:border-blue-600 focus:ring focus:ring-blue-600/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">New Password</label>
                  <input
                    type="password"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 px-4 text-slate-900 outline-none focus:border-blue-600 focus:ring focus:ring-blue-600/20"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Confirm New Password</label>
                  <input
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 px-4 text-slate-900 outline-none focus:border-blue-600 focus:ring focus:ring-blue-600/20"
                  />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-xl bg-red-600 py-3 font-semibold text-white shadow-md transition hover:bg-red-700 disabled:opacity-60"
                >
                  {loading ? "Changing..." : "Change Password"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}