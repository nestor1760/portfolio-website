import styled from "styled-components";
import { dark_back_color, dark_gradient, light_gradient, mobile_screen, small_tablet_screen, tablet_screen, white_color } from "../../../../GlobalStyles";
import { Link } from "react-router-dom";

export const ContactContainer = styled.section`
  width: 600px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 50px;
  
  @media ${tablet_screen} {
    width: 100%;
  }

  @media ${small_tablet_screen} {
    width: 100%;
  }

  @media ${mobile_screen} {
    width: 100%;
  }
`

export const CloseBtn = styled.button`
  position: absolute;
  right: -10px;
  border: none;
  outline: none;
  background: transparent;
  color: white;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    opacity: 0.8;
  }

  @media ${tablet_screen} {
    right: 0px;
  }

  @media ${small_tablet_screen} {
    right: 0px;
  }

  @media ${mobile_screen} {
    right: 0px;
  }
`

export const Form = styled.form<{ darkTheme: boolean }>`
  border: 1px solid ${white_color};
  width: 100%;
  background: ${({ darkTheme }) => (darkTheme ? dark_gradient : light_gradient)};
  padding: 25px 30px;  
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  color: ${white_color};

  @media ${tablet_screen} {
    border-radius: 15px 15px 0 0;
  }

  @media ${small_tablet_screen} {
    border-radius: 15px 15px 0 0;
  }

  @media ${mobile_screen} {
    border-radius: 15px 15px 0 0;
    padding: 25px 15px;  
  }
`

export const Title = styled.h2`
  font-size: 30px;
  text-align: center;

  @media ${mobile_screen} {
    font-size: 20px;
  }
`

export const InputBox = styled.div`
  margin: 20px 0 0 0;
`

export const Label = styled.label`
  font-size: 16px;

  @media ${mobile_screen} {
    font-size: 14px;
  }
`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  background: transparent;
  border: 2px solid ${white_color};
  outline: none;
  border-radius: 6px;
  padding: 15px;
  font-size: 16px;
  margin-top: 8px;
  color: ${white_color};

  &::placeholder {
    color: ${white_color};
  }

  @media ${mobile_screen} {
    font-size: 14px;
  }
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  background: transparent;
  border: 2px solid ${white_color};
  outline: none;
  border-radius: 6px;
  padding: 15px;
  font-size: 16px;
  margin: 8px 0 15px 0;
  color: ${white_color};

  &::placeholder {
    color: ${white_color};
  }    

  @media ${mobile_screen} {
    font-size: 14px;
  }
`

export const StyledLink = styled(Link)`
  color: ${white_color};
  margin: 0 0 5px 0;
  transition: 0.3s;

  &:hover {
    color: ${dark_back_color};
  }
`

export const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  margin: 0 15px 0 0;

  @media ${mobile_screen} {
    width: 15px;
    height: 15px;
    margin: 0 7px 0 0;
  }
`

export const CheckBoxText = styled.p`
  font-size: 16px;
  font-weight: 400;

  @media ${small_tablet_screen} {
    font-size: 14px;
  }

  @media ${mobile_screen} {
    font-size: 12px;
  }
`
