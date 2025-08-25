import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { supabase } from "../lib/supabaseClient"

export default function AuthCallback() {
  const navigate = useNavigate()

  useEffect(() => {
    const handleAuthCallback = async () => {
      try {
        const { data, error } = await supabase.auth.getSession()
        if (error) {
          console.error("Auth callback error:", error)
          navigate("/login")
        } else if (data.session) {
          navigate("/")
        } else {
          navigate("/login")
        }
      } catch (error) {
        console.error("Auth callback error:", error)
        navigate("/login")
      }
    }

    handleAuthCallback()
  }, [navigate])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600"></div>
    </div>
  )
}