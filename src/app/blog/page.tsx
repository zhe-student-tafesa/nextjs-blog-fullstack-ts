import BlogCard from "@/components/blogCard/blogCard";
import styles from "./blog.module.css";
import { getPosts } from "@/lib/mockData";

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          {/* Step 1: post={post}---pass post */}
          <BlogCard post={post} />
        </div>
      ))}
    </div>
  );
}
