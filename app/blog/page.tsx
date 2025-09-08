

import AnimatedBackground from '../components/AnimatedBackground';
import { getAllBlogMeta } from './utils';

// Styling similar to FaceBlog/main page face sections


export default function BlogPage() {
  const posts = getAllBlogMeta();
  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-[var(--bg-color)] relative">
      <AnimatedBackground />
      <section className="face-glow flex flex-col w-full max-w-4xl min-h-[80vh] p-[5%] bg-[#18181b] rounded-2xl text-white shadow-lg z-10 mt-24 mb-12">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-4">Blog</h1>
        <p className="text-lg text-gray-300 mb-8">Welcome to my blog! Here are my latest posts.</p>
        <div className="flex flex-col gap-6">
          {posts.length === 0 && (
            <p className="text-gray-400">No posts found.</p>
          )}
          {posts.map(post => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="block bg-[#23232b] rounded-xl p-6 shadow hover:bg-[#282838] transition-colors border border-white/5"
            >
              <h2 className="text-2xl font-semibold mb-2 text-primary">{post.title}</h2>
              <p className="text-gray-300">{post.description}</p>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}
