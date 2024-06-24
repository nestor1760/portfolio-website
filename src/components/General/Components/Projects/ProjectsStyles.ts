import styled from "styled-components";
import { first_color, small_tablet_screen, tablet_screen } from "../../../../GlobalStyles";

export const ProjectsContainer = styled.article`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  color: white;
  margin-top: 50px;


  @media ${tablet_screen} {
    margin-top: 20px;
    justify-content: start;
    flex-direction: column;
  }

  @media ${small_tablet_screen} {
    align-items: start;
    margin-top: 20px;
    padding: 0 5px;
  }
`

export const Title = styled.p`
  font-size: 32px;
  font-weight: 600;
  margin: 0 0 40px 0;
  text-align: center;
  color: ${first_color};

  @media ${tablet_screen} {
    font-size: 28px;
  }

  @media ${small_tablet_screen} {
    font-size: 22px;
  }
`

export const ProjectList = styled.div`
  max-width: 1110px;
  border: 1px solid black;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`

export const Item = styled.div`
  width: 250px;
  height: 200px;
  border: 1px solid blue;
  margin: 0 50px;
`