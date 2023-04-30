import React from "react";
import styled from "styled-components";

const Section = styled.section`
  display: flex;
  justify-content: space-between;
  gap: 15px;
  margin-bottom: 25px;
`;

const Button = styled.button`
  width: 100px;
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  padding: 15px;
  color: #ffd166;
  border-radius: ${(props) => (props.next ? "7px 0 0 7px" : "0 7px 7px 0")};
  background-color: #1c2540;

  &:hover {
    color: #1c2540;
    background-color: #ffd166;
  }

  &:disabled {
    color: #1c2540;
    background-color: #394f6a;
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const Controls = ({ onChange, current, total }) => {
  return (
    <Section>
      <Button
        type="button"
        onClick={() => onChange(-1)}
        disabled={current === 1}
      >
        Назад
      </Button>
      <Button
        type="button"
        onClick={() => onChange(1)}
        disabled={current === total}
        next
      >
        Вперед
      </Button>
    </Section>
  );
};

export default Controls;
