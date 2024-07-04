import styled from "styled-components";
import { blue_color, mobile_screen, small_tablet_screen, tablet_screen, white_color } from "../../../../GlobalStyles";

export const PPContainer = styled.section`
  border: 1px solid white;
  width: 80%;
  min-height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  color: ${white_color};
  padding: 0 30px;

  @media ${tablet_screen} {
    padding: 0 15px;
    width: 100%;
  }

  @media ${small_tablet_screen} {
    padding: 0 15px;
    width: 100%;
  }

  @media ${mobile_screen} {
    padding: 0;
    width: 100%;
  }
`

export const PPHeader = styled.header`
  position: sticky;
  width: 100%;
  top: 20px;
  left: 0;
  color: ${white_color};
  display: flex;
  align-items: center;
  justify-content: space-between;
  overflow: hidden;
  z-index: 2;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  box-shadow: 0px 26px 24px -16px rgba(0, 0, 0, 1);
  padding: 16px 15px;

  @media ${small_tablet_screen} {
    top: 0px;
    border-radius: 0 0 20px 20px;
  }

  @media ${mobile_screen} {
    top: 0px;
    border-radius: 0 0 20px 20px;
  }
`
export const Title = styled.p`
  font-size: 36px;
  font-weight: 600;
  text-transform: uppercase;
  color: ${blue_color};
  cursor: pointer;
  transition: 0.3s;
  & >span {
    color: ${white_color};
  }
  &:hover {
    color: ${white_color};
    & span {
      color: ${blue_color};
    }
  }

  @media ${small_tablet_screen} {
    font-size: 32px;
  }

  @media ${mobile_screen} {
    font-size: 28px;
  }
`

export const TitleText = styled.h1`
  width: 100%;
  font-size: 45px;
  margin: 70px 0 30px 0;
`

export const ItemBox = styled.div`
border: 1px solid black;
  width: 70%;
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  margin: 40px 0 20px 0;
  padding: 20px;
  color: ${white_color};
  box-shadow: 0px 26px 24px -16px rgba(0, 0, 0, 1);
  border-radius: 20px;

  @media ${small_tablet_screen} {
    width: 100%;
    padding: 7px;
  }

  @media ${mobile_screen} {
    width: 100%;
    padding: 5px;
  }
`

export const PPTitle = styled.p`
  font-size: 36px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: ${blue_color};

  @media ${small_tablet_screen} {
    font-size: 34px;
  }

  @media ${mobile_screen} {
    font-size: 30px;
  }
`

export const PPText = styled.p`
  font-size: 20px;
  font-weight: 400;
  margin: 10px 0;

  @media ${small_tablet_screen} {
    font-size: 18px;
    margin: 8px 0;
  }

  @media ${mobile_screen} {
    font-size: 16px;
    margin: 5px 0;
  }
`