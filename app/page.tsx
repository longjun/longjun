import Image from 'next/image'
import { allPosts } from "contentlayer/generated"

export default function Home() {
  return (
    <main className='h-full flex items-center justify-center'>
      <div className="text-center">
        <h1>Hello!</h1>
        <p>Next.js, TailwindCSS, Contentlayer</p>
        {allPosts.map(p=>(
          <div className="h1">{p.title}</div>
        ))}
      </div>
    </main>
  )
}