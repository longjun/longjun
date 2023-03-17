import { notFound } from 'next/navigation';
import { Mdx } from '@/components/mdx';
import { allPosts } from 'contentlayer/generated';

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function Blog({ params }) {
  const post = allPosts.find((post) => post.slug === params?.slug);

  if (!post) {
    notFound();
  }

  return (
    <section>
      <header className="text-center mb-10">
        <h1 className="font-bold text-3xl">
          {post.title}
        </h1>
        <span className="text-gray-500">
          {post.publishedAt}
        </span>
      </header>
      <Mdx code={post.body.code} />
    </section>
  );
}