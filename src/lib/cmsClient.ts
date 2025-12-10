// src/lib/cmsClient.ts
export const API_BASE = process.env.NEXT_PUBLIC_API_BASE || 'http://localhost:3001'

export type Category = {
  id: number
  name: string
  slug: string
  description?: string | null
  imageUrl?: string | null
  heroTitle?: string | null
  heroSubtitle?: string | null
  heroImageUrl?: string | null
}

export type Post = {
  id: number
  title: string
  slug: string
  excerpt?: string | null
  content: string
  coverImageUrl?: string | null
  youtubeUrl?: string | null
  pinned: boolean
  publishAt?: string | null
  category: { id: number; name: string; slug: string }
}

export async function fetchPosts(category?: string) {
  const q = category ? `?category=${encodeURIComponent(category)}` : ''
  const res = await fetch(`${API_BASE}/api/posts${q}`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Failed to fetch posts')
  const data = await res.json()
  return data.items as Post[]
}

export async function fetchCategory(slug: string) {
  const res = await fetch(`${API_BASE}/api/categories/${encodeURIComponent(slug)}`, { cache: 'no-store' })
  if (!res.ok) throw new Error('Category not found')
  return (await res.json()) as Category
}
