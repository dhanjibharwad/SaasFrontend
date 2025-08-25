
import { useState, useEffect } from "react"
import { supabase } from "../../lib/supabaseClient"
import { useNavigate } from "react-router-dom"
import {
  FaUsers,
  FaChartLine,
  FaSignOutAlt,
  FaCog,
  FaEnvelope,
  FaShoppingCart,
} from "react-icons/fa"
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts"

// Dummy data for charts
const salesData = [
  { month: "Jan", sales: 400 },
  { month: "Feb", sales: 800 },
  { month: "Mar", sales: 600 },
  { month: "Apr", sales: 1200 },
  { month: "May", sales: 900 },
  { month: "Jun", sales: 1400 },
]

const subscriberData = [
  { month: "Jan", users: 200 },
  { month: "Feb", users: 400 },
  { month: "Mar", users: 350 },
  { month: "Apr", users: 600 },
  { month: "May", users: 800 },
  { month: "Jun", users: 1000 },
]

export default function AdminDashboard() {
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    checkAuth()
  }, [])

  const checkAuth = async () => {
    const {
      data: { user },
    } = await supabase.auth.getUser()
    if (!user) {
      navigate("/admin/login")
      return
    }

    const { data: profile } = await supabase
      .from("profiles")
      .select("role")
      .eq("id", user.id)
      .single()

    if (profile?.role !== "admin") {
      navigate("/admin/login")
      return
    }

    setUser(user)
    setLoading(false)
  }

  const handleLogout = async () => {
    await supabase.auth.signOut()
    navigate("/admin/login")
  }

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-red-600"></div>
      </div>
    )
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md relative">
        <div className="p-6 border-b">
          <h1 className="text-2xl font-bold text-red-600">Admin Panel</h1>
        </div>
        <nav className="mt-6">
          <a className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <FaChartLine className="mr-3" /> Dashboard
          </a>
          <a className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <FaShoppingCart className="mr-3" /> Products
          </a>
          <a className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <FaUsers className="mr-3" /> Customers
          </a>
          <a className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <FaEnvelope className="mr-3" /> Messages
            <span className="ml-auto bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              8
            </span>
          </a>
          <a className="flex items-center px-6 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer">
            <FaCog className="mr-3" /> Settings
          </a>
        </nav>
        <div className="absolute bottom-0 w-64 p-6 border-t">
          <button
            onClick={handleLogout}
            className="flex items-center w-full px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700"
          >
            <FaSignOutAlt className="mr-2" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Top Navbar */}
        <header className="flex justify-between items-center px-6 py-4 bg-white shadow-sm">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-700">Welcome, {user?.email}</span>
            <img
              className="w-10 h-10 rounded-full border"
              src={`https://ui-avatars.com/api/?name=${user?.email}`}
              alt="avatar"
            />
          </div>
        </header>

        {/* Stats Cards */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-gray-500 text-sm">Page Views</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">12,450</p>
            <span className="text-green-600 text-sm">▲ 15.8%</span>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-gray-500 text-sm">Total Revenue</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">$363.95</p>
            <span className="text-red-600 text-sm">▼ 34.0%</span>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-gray-500 text-sm">Bounce Rate</h3>
            <p className="text-2xl font-bold text-gray-900 mt-2">86.5%</p>
            <span className="text-green-600 text-sm">▲ 24.2%</span>
          </div>
        </div>

        {/* Charts Section */}
        <div className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-gray-500 text-sm mb-4">Sales Overview</h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={salesData}>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="sales"
                  stroke="#ef4444"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <div className="bg-white shadow rounded-lg p-6">
            <h3 className="text-gray-500 text-sm mb-4">Total Subscribers</h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={subscriberData}>
                <CartesianGrid stroke="#e5e7eb" strokeDasharray="5 5" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="users" fill="#3b82f6" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </main>
    </div>
  )
}
