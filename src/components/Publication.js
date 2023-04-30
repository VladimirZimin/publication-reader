import React from "react";
import styled from "styled-components";

const Article = styled.article`
  padding: 30px;
  box-shadow: 0 17px 26px rgba(0, 0, 0, 0.15);
`;

const Title = styled.h2`
  margin-bottom: 20px;
  text-align: center;
`;

const Publication = ({ publication: { id, text, title } }) => {
  return (
    <Article id={id}>
      <Title>{title}</Title>
      <p>{text}</p>
    </Article>
  );
};

export default Publication;
