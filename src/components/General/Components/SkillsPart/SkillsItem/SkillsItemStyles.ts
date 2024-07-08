import styled from "styled-components";
import { dark_gradient, light_gradient, white_color } from "../../../../../GlobalStyles";

export const ItemContainer = styled.div<{ darkTheme: boolean }>`
  width: 150px;
  height: 150px;
  margin: 20px;
  border-radius: 10px;
  background: ${({ darkTheme }) => (darkTheme ? dark_gradient : light_gradient)};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`

export const Img = styled.img`
  width: 100px;
  height: 100px;
  object-fit: contain;
`

export const Text = styled.p`
  font-size: 18px;
  font-weight: 500;
  margin: 10px 0;
  color: ${white_color};
`
