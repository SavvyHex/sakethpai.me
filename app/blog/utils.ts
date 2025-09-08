import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface BlogMeta {
  slug: string;
  title: string;
  description: string;
}

export function getAllBlogMeta(): BlogMeta[] {
  const postsDir = path.join(process.cwd(), 'posts');
  const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.md'));
  return files.map(filename => {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);
    return {
      slug: filename.replace(/\.md$/, ''),
      title: data.title || filename,
      description: data.description || '',
    };
  });
}
