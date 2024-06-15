import Image from "next/image";
import styles from "./singlePost.module.css";
// import PostUser from "@/components/postUser/postUser";
import { Suspense } from "react";
// import { getPost } from "@/lib/data";


// FETCH DATA WITH AN API
const getData = async (id:number) => {
    
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);

//   if (!res.ok) {
//     throw new Error("Something went wrong");
//   }

  return res.json();
};



const SinglePostPage = async ({ params }: { params: { id: number } }) => {
    const { id } = params;
    //const post = await getData(id);
    const post = (await import("/public/posts/"+ id + ".json")).default;

    return (
      <div className={styles.container}>
        <div className={styles.imgContainer}>
          <Image src={`/${id}.jpeg`} alt="" fill className={styles.img} />
        </div>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{post.title}</h1>
          <div className={styles.detail}>
            <div className={styles.detailText}>
              <span className={styles.detailTitle}>Published</span>
              <span className={styles.detailValue}>
                {/* {post.createdAt.toString().slice(4, 16)} */}
              </span>
            </div>
          </div>
          <div className={styles.content}>{post.body}</div>
        </div>
      </div>
    );
  };
  

export default SinglePostPage;