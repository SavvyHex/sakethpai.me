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
  
  function getMarkdownFiles(dir: string, baseDir: string = ''): BlogMeta[] {
    const items = fs.readdirSync(dir);
    let posts: BlogMeta[] = [];
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Recursively get files from subdirectories
        const subPosts = getMarkdownFiles(fullPath, path.join(baseDir, item));
        posts = posts.concat(subPosts);
      } else if (item.endsWith('.md')) {
        const fileContent = fs.readFileSync(fullPath, 'utf8');
        const { data } = matter(fileContent);
        const slug = baseDir ? `${baseDir}/${item.replace(/\.md$/, '')}` : item.replace(/\.md$/, '');
        posts.push({
          slug,
          title: data.title || item,
          description: data.description || '',
        });
      }
    }
    
    return posts;
  }
  
  return getMarkdownFiles(postsDir);
}
