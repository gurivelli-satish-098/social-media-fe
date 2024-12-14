import React from "react";
import styles from "./share-thought.module.css";
import {
  EmojiEmotions,
  Label,
  Person,
  Photo,
  Room,
  Tag,
} from "@mui/icons-material";

export default function ShareThought() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.thought}>
          <Person className={styles.sharePerson} />
          <input
            className={styles.shareInput}
            type="text"
            placeholder="What's in your mind"
          />
        </div>
        <hr className={styles.line}></hr>
        <div className={styles.shareBottom}>
          <div className={styles.shareItems}>
            <div className={styles.shareItemList}>
              <Photo className={styles.shareItemIcon} htmlColor="tomato" />
              <span className={styles.shareItemText}>Image/video</span>
            </div>
            <div className={styles.shareItemList}>
              <Label className={styles.shareItemIcon} htmlColor="blue" />
              <span className={styles.shareItemText}>Tag</span>
            </div>
            <div className={styles.shareItemList}>
              <Room className={styles.shareItemIcon} htmlColor="green" />
              <span className={styles.shareItemText}>Location</span>
            </div>
            <div className={styles.shareItemList}>
              <EmojiEmotions
                className={styles.shareItemIcon}
                htmlColor="goldenrod"
              />
              <span className={styles.shareItemText}>Feelings</span>
            </div>
          </div>
          <button className={styles.shareButton}>Share</button>
        </div>
      </div>
    </div>
  );
}
