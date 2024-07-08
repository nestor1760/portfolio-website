import styled from "styled-components";
import { blue_color, gradient, white_color } from "../../../../../GlobalStyles";

export const ItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  width: 330px;
  height: 450px;
  overflow: hidden;
  margin: 20px 10px;
  background: ${gradient};
  border-radius: 10px;
`

export const Image = styled.img`
  width: 100%;
  min-height: 200px;
`

export const ProjectName = styled.p`
  font-size: 24px;
  margin-top: 10px;
`

export const ProjectDescription = styled.p`
  font-size: 16px;
  margin: 10px 0;
`

export const TechItem = styled.div`
  margin: 2px 5px 2px 0;
  padding: 2px 3px;
  border-radius: 5px;
  color: black;
  background: white;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background: ${blue_color};
    color: ${white_color};
  }
`

export const StyledLink = styled.a`
  font-size: 14px;
  margin: 0 0 0 5px;
  cursor: pointer;
  text-decoration: none;
  color: ${white_color};

  &:hover {
    text-decoration: underline;
  }
`
