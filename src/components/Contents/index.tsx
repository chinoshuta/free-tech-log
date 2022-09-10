import * as React from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faFolderOpen } from "@fortawesome/free-regular-svg-icons";

const Wrapper = styled.div`
  width: 100%;
  padding: 40px;
  cursor: pointer;
  border: 1px solid white;
  transition: 0.1s;
  &: hover {
    border: 1px solid #254678;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.2em;
  text-transform: none;
  padding-bottom: 12px;
  border-bottom: 1px solid #254678;
`;

const Note = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  margin: 14px 0;
  color: #3e3e3e;
`;

const Text = styled.p`
  font-size: 14px;
  color: #3e3e3e;
  width: 100%;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
`;

const Icon = styled(FontAwesomeIcon)`
  margin-right: 6px;
`;

type Props = {
  id: string;
  title: string;
  date: string;
  content: string;
  category: readonly ({ category: string | null } | null)[];
};

const Contents: React.FC<Props> = ({ id, title, date, content, category }) => {
  return (
    <Link to={`/post/${id}`}>
      <Wrapper>
        <Title>{title}</Title>
        <Note>
          <div>
            <Icon icon={faFolderOpen} />
            {category.map((n, i) => {
              return i > 0 ? `,${n?.category}` : n?.category;
            })}
          </div>
          <div>
            <Icon icon={faClock} />
            {date}
          </div>
        </Note>
        <Text>{content}</Text>
      </Wrapper>
    </Link>
  );
};

export default Contents;
