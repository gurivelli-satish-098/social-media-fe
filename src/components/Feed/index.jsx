import Post from "../Post/post";
import ShareThought from "../ShareThought/share-thought";
import styles from "./index.module.css";

function Feed() {
  return (
    <div className={styles.feedbar}>
      <ShareThought />
      {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => (
        <Post />
      ))}
    </div>
  );
}

export default Feed;
