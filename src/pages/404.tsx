import * as React from "react";
import BaseTemplate from "../templates/BaseTemplate";
import * as styles from "./404.module.scss";

const NotFoundPage = () => {
  return (
    <BaseTemplate>
      <h1 className={styles.notFound}>ページが見つかりません</h1>
    </BaseTemplate>
  );
};

export default NotFoundPage;
