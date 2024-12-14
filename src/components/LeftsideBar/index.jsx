import React from "react";
import styles from "./index.module.css";
import { Bookmark, Chat, Group, RssFeed } from "@mui/icons-material";

function LeftsideBar() {
  return (
    <div className={styles.leftbar}>
      <div className={styles.wrapper}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <RssFeed className={styles.listIcon} />
            <span className={styles.listText}>Feed</span>
          </li>
          <li className={styles.listItem}>
            <Chat className={styles.listIcon} />
            <span className={styles.listText}>Messages</span>
          </li>
          <li className={styles.listItem}>
            <Group className={styles.listIcon} />
            <span className={styles.listText}>Groups</span>
          </li>
          <li className={styles.listItem}>
            <Bookmark className={styles.listIcon} />
            <span className={styles.listText}>Bookmark</span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default LeftsideBar;
