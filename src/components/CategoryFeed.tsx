// src/components/CategoryFeed.tsx
'use client'
import { useEffect, useState } from 'react'
import { fetchPosts, Post } from '@/lib/cmsClient'

export default function CategoryFeed({ category, title }: { category: string; title?: string }) {
  const [posts, setPosts] = useState<Post[] | null>(null)
  const [err, setErr] = useState<string | null>(null)

  useEffect(() => {
    fetchPosts(category).then(setPosts).catch(e => setErr(String(e)))
  }, [category])

  if (err) return <div className='text-red-600'>Error: {err}</div>
  if (!posts) return <div className='text-zinc-500'>Cargando…</div>
  if (posts.length === 0) return <div className='text-zinc-500'>Sin publicaciones.</div>

  return (
    <section className='mt-8'>
      {title && <h2 className='text-2xl font-semibold mb-4'>{title}</h2>}
      <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
        {posts.map(p => (
          <article key={p.id} className='rounded-2xl border p-4 shadow-sm bg-white'>
            {p.youtubeUrl ? (
              <div className='aspect-video mb-3'>
                <iframe
                  className='w-full h-full rounded-lg'
                  loading='lazy'
                  src={youtubeEmbed(p.youtubeUrl)}
                  title={p.title}
                  allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                  referrerPolicy='strict-origin-when-cross-origin'
                  allowFullScreen
                />
              </div>
            ) : p.coverImageUrl ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={p.coverImageUrl} alt={p.title} className='w-full h-48 object-cover rounded-lg mb-3' loading='lazy' />
            ) : null}
            <h3 className='text-lg font-semibold'>{p.title}</h3>
            {p.excerpt && <p className='text-sm text-zinc-600 mt-1'>{p.excerpt}</p>}
          </article>
        ))}
      </div>
    </section>
  )
}

function youtubeEmbed(url: string) {
  const m = url.match(/(?:v=|youtu\.be\/)([\w-]{11})/)
  const id = m ? m[1] : null
  return id ? `https://www.youtube-nocookie.com/embed/${id}` : url
}
