import React from "react";

import styled from "styled-components";

const TextWrapper = styled.div`
  text-align: center;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  color: #6B6B6B;
  font-size: var(--size-very-big);
  line-height: 1.1em;
  padding-top: 10px;
  padding-bottom: 10px;
  border-bottom: 1px solid #2e2e33;
`;

export const Strong = styled.strong`
  color: var(--color-zero);
  font-size: 1.5em;
`;

export default ({ content }) => (
  <TextWrapper>
    <Text>{...props}>{content}</Text>
  </TextWrapper>
);


