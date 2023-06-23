import React from "react";
import { Helmet } from "react-helmet";

type Props = { title?: string };

const PageTitle: React.FC<Props> = ({ title }) => {
  return (
    <Helmet>
      <title>free技術log{!!title && ` | ${title}`}</title>
    </Helmet>
  );
};

export default PageTitle;
