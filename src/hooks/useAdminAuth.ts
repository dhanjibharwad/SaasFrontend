import { useState, useEffect } from "react"
import { supabase } from "../lib/supabaseClient"
import type { AuthChangeEvent, Session, User } from "@supabase/supabase-js"

export function useAdminAuth() {
  const [user, setUser] = useState<User | null>(null)
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
      async (event: AuthChangeEvent, session: Session | null) => {
        if (event === "SIGNED_IN" && session?.user) {
          await checkUserRole(session.user)
        } else if (event === "SIGNED_OUT") {
          setUser(null)
          setIsAdmin(false)
        }
        setLoading(false)
      }
    )

    return () => subscription.unsubscribe()
  }, [])

  const checkAuth = async () => {
    try {
      const { data: { user } } = await supabase.auth.getUser()
      if (user) {
        await checkUserRole(user)
      }
    } catch (error) {
      console.error("Auth check error:", error)
    } finally {
      setLoading(false)
    }
  }

  const checkUserRole = async (user: User) => {
    try {
      const { data: profile } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single()

      setUser(user)
      setIsAdmin(profile?.role === "admin")
    } catch (error) {
      console.error("Role check error:", error)
      setUser(user)
      setIsAdmin(false)
    }
  }

  const logout = async () => {
    await supabase.auth.signOut()
  }

  return {
    user,
    isAdmin,
    loading,
    logout,
  }
}
