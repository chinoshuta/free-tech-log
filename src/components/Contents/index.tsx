import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFolderOpen } from "@fortawesome/free-regular-svg-icons";
import { OutboundLink } from "gatsby-plugin-gtag";
import * as styles from "./index.module.scss";

type Props = {
  id: string;
  title: string;
  date: string;
  content: string;
  category: readonly ({ category: string | null } | null)[];
};

const Contents: React.FC<Props> = ({ id, title, date, content, category }) => {
  return (
    <OutboundLink href={`/post/${id}`}>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>{title}</h1>
        <div className={styles.note}>
          <div>
            <FontAwesomeIcon className="icon" icon={faFolderOpen} />
            {category.map((n, i) => {
              return i > 0 ? `,${n?.category}` : n?.category;
            })}
          </div>
          <div>
            <FontAwesomeIcon className="icon" icon={faClock} />
            {date}
          </div>
        </div>
        <div className={styles.text}>{content}</div>
      </div>
    </OutboundLink>
  );
};

export default Contents;
