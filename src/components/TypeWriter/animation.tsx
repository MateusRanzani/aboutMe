import styled, { keyframes } from 'styled-components';

export const blinkTextCursor = keyframes`
  from {border-right-color: rgba(0, 0, 0, .75);}
  to {border-right-color: transparent}
`;

export const TextCursor = styled.span`
  border-right: 2px solid rgba(0, 0, 0, .75);
  display: inline;

  animation: ${blinkTextCursor} 0.7s steps(44) infinite normal;
`;

export const Container = styled.p`
  margin: 0;
`;