import { useState, useEffect } from "react"
import { supabase } from "../lib/supabaseClient"
<<<<<<< HEAD

export function useAdminAuth() {
  const [user, setUser] = useState<any>(null)
=======
import type { AuthChangeEvent, Session, User } from "@supabase/supabase-js"

export function useAdminAuth() {
  const [user, setUser] = useState<User | null>(null)
>>>>>>> af61d3c813a556d6a605cf22df8833ac1c05297b
  const [isAdmin, setIsAdmin] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    checkAuth()

    const { data: { subscription } } = supabase.auth.onAuthStateChange(
<<<<<<< HEAD
      async (event, session) => {
        if (event === 'SIGNED_IN' && session?.user) {
          await checkUserRole(session.user)
        } else if (event === 'SIGNED_OUT') {
=======
      async (event: AuthChangeEvent, session: Session | null) => {
        if (event === "SIGNED_IN" && session?.user) {
          await checkUserRole(session.user)
        } else if (event === "SIGNED_OUT") {
>>>>>>> af61d3c813a556d6a605cf22df8833ac1c05297b
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
<<<<<<< HEAD
      console.error('Auth check error:', error)
=======
      console.error("Auth check error:", error)
>>>>>>> af61d3c813a556d6a605cf22df8833ac1c05297b
    } finally {
      setLoading(false)
    }
  }

<<<<<<< HEAD
  const checkUserRole = async (user: any) => {
    try {
      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', user.id)
        .single()

      setUser(user)
      setIsAdmin(profile?.role === 'admin')
    } catch (error) {
      console.error('Role check error:', error)
=======
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
>>>>>>> af61d3c813a556d6a605cf22df8833ac1c05297b
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
<<<<<<< HEAD
    logout
  }
}
=======
    logout,
  }
}
>>>>>>> af61d3c813a556d6a605cf22df8833ac1c05297b
