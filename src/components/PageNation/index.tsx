import { Link } from "gatsby";
import React from "react";
import * as styles from "./index.module.scss";

type Props = {
  totalPage: number;
  current: number;
};

const PageNation: React.FC<Props> = ({ totalPage, current }) => {
  return (
    <div className={styles.page}>
      {[...Array(totalPage)].map((_, i) =>
        current == i + 1 ? (
          <span className={styles.current}>{i + 1}</span>
        ) : (
          <Link to={`/${i + 1}`}>
            <span className={styles.item}>{i + 1}</span>
          </Link>
        )
      )}
    </div>
  );
};

export default PageNation;
