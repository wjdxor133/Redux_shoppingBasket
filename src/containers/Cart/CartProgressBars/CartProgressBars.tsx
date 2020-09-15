import React from "react";
import styled from "styled-components";
import { Progress } from "semantic-ui-react";
import "semantic-ui-css/semantic.min.css";

const ProgressBars = () => {
  return (
    <ProgressBarsComponent>
      <ProgressBarsTitle>
        <ProgressBarsText>오늘의 꽃 배송 상품</ProgressBarsText>
        <ProgressBarsText>20,000원 추가하면 무료 배송</ProgressBarsText>
      </ProgressBarsTitle>
      <Progress percent={0} progress />
    </ProgressBarsComponent>
  );
};

export default ProgressBars;

const ProgressBarsComponent = styled.section`
  width: 50%;
  margin-top: 1em;
`;

const ProgressBarsTitle = styled.p`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.5em;
`;

const ProgressBarsText = styled.span`
  font-weight: bold;
  :nth-child(2) {
    font-size: 0.8rem;
  }
`;
