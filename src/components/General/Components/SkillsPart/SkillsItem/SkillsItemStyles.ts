import styled from "styled-components";
import { gradient, white_color } from "../../../../../GlobalStyles";

export const ItemContainer = styled.div`
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
