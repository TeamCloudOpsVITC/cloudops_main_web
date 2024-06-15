import PostCard from "./postCard/postCard";
import styles from "./blog.module.css";
import "./style.css";

// FETCH DATA WITH AN API
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {next:{revalidate:3600}});

  if (!res.ok) {
    throw new Error("Something went wrong");
  }

  return res.json();
};

const BlogPage = async () => {

  type PostType = {
    userId: number;
    id: number;
    title: string;
    body: string;
    createdAt: Date;
  }

  // FETCH DATA WITH AN API
  // const posts = await getData();

  // FETCH DATA WITHOUT AN API
  const posts = (await import("/public/posts.json")).default;

  return (
    <div className={styles.container}>
      {posts.map((post: PostType) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
