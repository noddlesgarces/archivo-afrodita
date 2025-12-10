// src/components/CategoryHero.tsx
'use client'
import { useEffect, useState } from 'react'
import { fetchCategory, Category } from '@/lib/cmsClient'

export default function CategoryHero({ slug }: { slug: string }) {
  const [cat, setCat] = useState<Category | null>(null)
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => {
    fetchCategory(slug).then(setCat).catch(e => setErr(String(e)))
  }, [slug])

  if (err) return null
  if (!cat) return null

  const title = cat.heroTitle || cat.name
  const subtitle = cat.heroSubtitle || cat.description || ''
  const bg = cat.heroImageUrl || cat.imageUrl || ''

  return (
    <header className="mb-6 rounded-3xl overflow-hidden border">
      <div
        className="w-full h-56 sm:h-72 md:h-80 bg-cover bg-center"
        style={{ backgroundImage: bg ? `url(${bg})` : undefined }}
      />
      <div className="p-6">
        <h1 className="text-3xl font-bold">{title}</h1>
        {subtitle ? <p className="text-zinc-600 mt-1">{subtitle}</p> : null}
      </div>
    </header>
  )
}
