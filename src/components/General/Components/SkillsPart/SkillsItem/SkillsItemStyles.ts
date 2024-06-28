import styled, { css, keyframes } from "styled-components";
import { gradient, white_color } from "../../../../../GlobalStyles";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateX(-10px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
`;

export const ItemContainer = styled.div<{ isVisible: boolean }>`
  width: 150px;
  height: 150px;
  margin: 20px;
  border-radius: 10px;
  background: ${gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;

  ${({ isVisible }) => isVisible && css`animation: ${fadeIn} 0.5s ease-in-out; opacity: 1;`};
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
`

export const Img = styled.img`
  max-width: 100px;
  object-fit: cover;
`

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0;
  color: ${white_color};
`
