import React from "react";
import styled from "styled-components";

const ProgressValue = styled.p`
  margin: 0 auto;
  padding: 15px;
  width: 100px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  color: #ffd166;
  border-radius: 7px;
  background-color: #1c2540;
`;

const Progress = ({ current, total }) => {
  return (
    <ProgressValue>
      {current}/{total}
    </ProgressValue>
  );
};

export default Progress;
