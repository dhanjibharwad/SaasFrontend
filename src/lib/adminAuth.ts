import { supabase } from "./supabaseClient"

export const adminAuth = {
  async signIn(email: string, password: string) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password
    })

    if (error) throw error

    // Check admin role
    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', data.user.id)
      .single()

    if (profile?.role !== 'admin') {
      await supabase.auth.signOut()
      throw new Error('Access denied. Admin privileges required.')
    }

    return data
  },

  async signOut() {
    const { error } = await supabase.auth.signOut()
    if (error) throw error
  },

  async getCurrentAdmin() {
    const { data: { user } } = await supabase.auth.getUser()
    if (!user) return null

    const { data: profile } = await supabase
      .from('profiles')
      .select('role')
      .eq('id', user.id)
      .single()

    return profile?.role === 'admin' ? user : null
  },

  async isAdmin() {
    const admin = await this.getCurrentAdmin()
    return !!admin
  }
}