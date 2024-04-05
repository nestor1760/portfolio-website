import styled from "styled-components"
import { FC } from "react"
import { setSidebar } from "../store/modalSlice"
import { useAppDispatch } from "../hook"

const StyledFooter = styled.section`
  width: 100%;
  height: 150px;
  color: white;
  background: #594E7E;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;
  
  @media (min-width: 723px) and (max-width: 910px) {
    height: 100%;
    flex-direction: column;
  }

  @media screen and (max-width: 722px) {
    height: 100%;
    flex-direction: column;
  }
`

const FooterTitle = styled.button`
  width: 200px;
  font-size: 14px;
  background: transparent;
  border: none;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  transition: 0.2s;

  &:hover {
    color: #68BAA5;
  }

  & p:first-child {
    font-size: 45px;
    font-weight: 600;
  }

  @media screen and (max-width: 910px) {
    width: 80%;
    align-items: flex-start;
    margin: 30px 0;

    & p:first-child {
      font-size: 28px;
      font-weight: 600;
    }
  }
`

const FooterMain = styled.div`
  width: 50%;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  & a {
    margin-bottom: 10px;
    color: white;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  @media screen and (max-width: 910px) {
    font-size: 14px;
    width: 80%;
    margin-bottom: 20px;
    align-items: flex-start;
  }
`

const Footer: FC = () => {
  const dispatch = useAppDispatch()

  const scrollToStart = (): void => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    dispatch(setSidebar({sidebar: false, scroll: false}))
  }
  return (
    <StyledFooter>
      <FooterTitle onClick={() => scrollToStart()}>
        <p>Fronted</p>
        <p>Developer</p>
      </FooterTitle>
      <FooterMain>
        <a href="#">Terms of Use and Privacy Policy</a>
        <p>© 2024 All rights reserved.</p>
      </FooterMain>
    </StyledFooter>
  )
}

export default Footer