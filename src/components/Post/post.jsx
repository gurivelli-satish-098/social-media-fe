import React from "react";
import styles from "./post.module.css";
import { Comment, MoreVert, Person, Share } from "@mui/icons-material";

export default function Post() {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          <div className={styles.postTop}>
            <div className={styles.postUser}>
              <Person className={styles.profileImg} />
              <span className={styles.profileName}>Gurivelli Satish</span>
              <span className={styles.postDate}>2 min ago</span>
            </div>
            <div className={styles.postMore}>
              <MoreVert />
            </div>
          </div>
          <div className={styles.postInfo}>
            <span className={styles.postText}>It's my first post</span>
            <img className={styles.postImg} src="./assets/db.jpeg" alt="post" />
          </div>
          <div className={styles.intraction}>
            <div className={styles.intractionLeft}>
              <img
                className={styles.loveIcon}
                src="assets/love.jpeg"
                alt="love"
              />
              <span>2.5 M</span>
              <Comment className={styles.comment} />
              <span className={styles.commentText}>2 comments</span>
            </div>

            <div className={styles.intractionRight}>
              <Share />
              <span className={styles.commentText}>share</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
