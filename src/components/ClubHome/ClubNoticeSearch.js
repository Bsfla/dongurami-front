import React from "react";
import styles from "./ClubNoticeSearch.module.sass";
import { FiSearch } from "react-icons/fi";

function NoticeSearch() {
  return (
    <div className={styles.inputForm}>
      <input type="text" className={styles.input} />
      <FiSearch className={styles.FiSearch} />
    </div>
  );
}
export default NoticeSearch;