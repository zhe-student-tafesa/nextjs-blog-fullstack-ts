import Image from "next/image";
import styles from "./singleBlog.module.css";
import PostDetail from "@/components/postDetail/PostDetail";
import { getPost } from "@/lib/mockData";
import { Suspense } from "react";

// Parsing route parameters
interface SingleBlogPageProps {
  params: {
    slug: string;
  };
}

// Parsing route parameters
export default async function SingleBlogPage({ params }: SingleBlogPageProps) {
  const { slug } = params;
  // console.log("slug: ", slug);
  const post = await getPost(parseInt(slug));
  // console.log("post: ", post);
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src={
            post?.img != null
              ? post?.img
              : "https://images.pexels.com/photos/27947532/pexels-photo-27947532/free-photo-of-woman-with-food-on-a-picnic.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt={""}
          className={styles.img}
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post?.title}</h1>

        {post && (
          <Suspense fallback={<div>Loading...</div>}>
            <PostDetail userId={post?.userId || 0} />
          </Suspense>
        )}

        <p className={styles.desc}>{post?.desc}</p>
      </div>
    </div>
  );
}
