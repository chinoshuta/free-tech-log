import * as React from "react";
import BaseTemplate from "../templates/BaseTemplate";
import styled from "styled-components";

const NotFound = styled.h1`
  height: 200px;
  font-size: 28px;
  color: #254678;
  text-align: center;
  background-color: #f8fbfb;
  display: flex;
  align-items: center;
  justify-content: center;
`;

// markup
const NotFoundPage = () => {
  return (
    <BaseTemplate>
      <NotFound>ページが見つかりません</NotFound>
    </BaseTemplate>
  );
};

export default NotFoundPage;
