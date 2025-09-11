import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { notFound } from "next/navigation";
import AnimatedBackground from "../../components/AnimatedBackground";
import SpoilerScript from "../../components/SpoilerScript";
import { marked } from "marked";

interface NavigationFooterProps {
  prevLink?: string;
  prevTitle?: string;
  nextLink?: string;
  nextTitle?: string;
}

function NavigationFooter({ prevLink, prevTitle, nextLink, nextTitle }: NavigationFooterProps) {
  return (
    <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-600">
      {prevLink ? (
        <a href={prevLink} className="text-blue-400 hover:bg-gray-800 font-medium px-4 py-2 rounded-md transition-colors">
          ← {prevTitle || "Previous"}
        </a>
      ) : (
        <span></span>
      )}
      
      {nextLink ? (
        <a href={nextLink} className="text-blue-400 hover:bg-gray-800 font-medium px-4 py-2 rounded-md transition-colors">
          {nextTitle || "Next"} →
        </a>
      ) : (
        <span></span>
      )}
    </div>
  );
}


export async function generateStaticParams() {
  const postsDir = path.join(process.cwd(), "posts");
  
  function getMarkdownFiles(dir: string, baseDir: string = ''): { slug: string[] }[] {
    const items = fs.readdirSync(dir);
    let slugs: { slug: string[] }[] = [];
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Recursively get files from subdirectories
        const subSlugs = getMarkdownFiles(fullPath, baseDir ? `${baseDir}/${item}` : item);
        slugs = slugs.concat(subSlugs);
      } else if (item.endsWith('.md')) {
        const slugPath = baseDir ? `${baseDir}/${item.replace(/\.md$/, '')}` : item.replace(/\.md$/, '');
        slugs.push({ slug: slugPath.split('/') });
      }
    }
    
    return slugs;
  }
  
  return getMarkdownFiles(postsDir);
}

// 👇 Don't declare your own PageProps — let Next.js provide it
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugPath = slug.join('/');

  const filePath = path.join(process.cwd(), "posts", `${slugPath}.md`);
  if (!fs.existsSync(filePath)) return notFound();

  const fileContent = await fs.promises.readFile(filePath, "utf8");
  const { data, content } = matter(fileContent);

  // Extract navigation data from frontmatter
  const navigation = {
    prevLink: data.prevLink,
    prevTitle: data.prevTitle,
    nextLink: data.nextLink,
    nextTitle: data.nextTitle,
  };

  // Replace ||spoiler|| with <span class="spoiler">spoiler</span> before markdown
  const contentWithSpoilers = content.replace(/\|\|([^|]+)\|\|/g, '<span class="spoiler">$1</span>');
  marked.setOptions({
    gfm: true,
    breaks: true,
  });
  const html = marked.parse(contentWithSpoilers);
  
  // Debug: log the HTML output
  console.log('Parsed HTML:', html);

  return (
    <main className="flex flex-col items-center w-full min-h-screen bg-[var(--bg-color)] relative">
      <SpoilerScript />
      <AnimatedBackground />
      <section className="face-glow flex flex-col w-[75vw] min-h-[60vh] p-[5%] bg-[#18181b] rounded-2xl text-white shadow-lg z-10 mt-24 mb-12">
        <h1 className="text-[clamp(2rem,4vw,3rem)] font-bold mb-4 text-primary">
          {data.title}
        </h1>
        <p className="text-gray-400 mb-8 text-lg">{data.description}</p>
        <article className="prose prose-invert max-w-none" dangerouslySetInnerHTML={{ __html: html }} />
        <NavigationFooter {...navigation} />
      </section>
    </main>
  );
}
