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
  const items = fs.readdirSync(postsDir);
  let posts: BlogMeta[] = [];
  
  // Only get .md files directly in the posts directory, not subdirectories
  for (const item of items) {
    const fullPath = path.join(postsDir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isFile() && item.endsWith('.md')) {
      const fileContent = fs.readFileSync(fullPath, 'utf8');
      const { data } = matter(fileContent);
      posts.push({
        slug: item.replace(/\.md$/, ''),
        title: data.title || item,
        description: data.description || '',
      });
    }
  }
  
  return posts;
}
