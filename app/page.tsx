import Image from 'next/image'
import Link from 'next/link'
import { allPosts } from "contentlayer/generated"

export default function Home() {
  return (
    <div className="">
      {allPosts
        .sort((a, b) => {
          if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4 p-3 rounded-md hover:bg-gray-50"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex items-center">
              <span className="">{post.title}</span>
              <span className="flex-1 border-dashed border-b h-0 border-gray-300 mx-4"></span>
              <span className="text-gray-400 text-sm">{post.publishedAt}</span>
            </div>
          </Link>
        ))}
    </div>
  )
}