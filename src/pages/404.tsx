import * as React from "react";
import PageTitle from "../components/PageTitle";
import BaseTemplate from "../templates/BaseTemplate";
import * as styles from "./404.module.scss";

const NotFoundPage = () => {
  return (
    <BaseTemplate>
      <PageTitle title="404" />
      <h1 className={styles.notFound}>ページが見つかりません</h1>
    </BaseTemplate>
  );
};

export default NotFoundPage;
