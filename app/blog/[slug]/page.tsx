import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { notFound } from 'next/navigation';
import AnimatedBackground from '../../components/AnimatedBackground';
import { marked } from 'marked';

interface PostProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  return files.map(filename => ({ slug: filename.replace(/\.md$/, '') }));
}

export default function BlogPostPage({ params }: PostProps) {
  const { slug } = params;
  const filePath = path.join(process.cwd(), 'posts', `${slug}.md`);
  if (!fs.existsSync(filePath)) return notFound();
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);
  const html = marked(content);

  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-[var(--bg-color)] relative">
      <AnimatedBackground />
      <section className="face-glow flex flex-col w-full max-w-3xl min-h-[60vh] p-[5%] bg-[#18181b] rounded-2xl text-white shadow-lg z-10 mt-24 mb-12">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-4 text-primary">{data.title}</h1>
        <p className="text-gray-400 mb-8 text-lg">{data.description}</p>
        <article className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
      </section>
    </main>
  );
}
