import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"

//defining the Types 
type postCard = {
    title: string,
    body: string,
    img: string,
    createdAt: Date,
    id: string
}

const PostCard = ({post} : {post:postCard}) => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image src="/about.png" alt="" fill className={styles.img}/>
        </div>
        <span className={styles.date}>{post.createdAt?.toString().slice(4, 16)}</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.desc}>{post.body}</p>
        <Link className={styles.link} href={`/Blog/${post.id}`}>READ MORE</Link>
      </div>
    </div>
  )
}

export default PostCard