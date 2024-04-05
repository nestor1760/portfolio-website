import styled from 'styled-components';
import { CiMail } from "react-icons/ci";
import { PiTelegramLogoDuotone } from "react-icons/pi";
import { GrLinkedin } from "react-icons/gr";
import { IoMenu } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { FC, useEffect } from 'react';
import Sidebar from '../UI/Sidebar';
import { useAppDispatch, useAppSelector } from '../hook';
import { setSidebar, setToggleSidebar } from '../store/modalSlice';
import { useWindowWidth } from '../hooks/useWindowWindth';

const StyledContainer = styled.section`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  left: 0;
  color: white;
  background: #0C1978;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 10%;

  @media screen and (max-width: 992px) {
    height: 100px;
  }
  
  @media screen and (max-width: 600px) {
    height: 100px;
  }
`

const HeaderContact = styled.div`
  max-width: 300px;

  & a {
    margin-right: 20px;
    color: white;
    transition: 0.2s;

    &:hover {
      color: #68BAA5;
    }
  }
`

const NavigationMenu = styled.div`
  width: 500px;
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`

const NavItem = styled.a`
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  border: none;
  background: transparent;
  cursor: pointer;
  margin-right: 30px;
  transition: 0.3s;
  &:last-child {
    margin-right: 0px;
  }
  &:hover {
    font-weight: 600;
    color: #68BAA5;
  }
`

const SidebarBtn = styled.button`
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #68BAA5; 
  }
`

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const {sidebar, scroll} = useAppSelector(state => state.modal)
  const {windowWidth} = useWindowWidth()

  const scrollToPart = (id: string) => {
    const navItem = document.getElementById(id);
    if (navItem) {
      navItem.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
    dispatch(setSidebar({sidebar: false, scroll: false}))
  };

  const toogleMenu = () => {
    dispatch(setToggleSidebar())
  }

  useEffect(() => {
    if(windowWidth > 865) {
      dispatch(setSidebar({sidebar: false, scroll: false}))
    }
  }, [windowWidth])

  useEffect(() => {
    if(scroll) {
      document.body.style.overflowY = 'hidden';
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'auto';
    }
  }, [scroll])

  return (
    <>
      <StyledContainer>
        <HeaderContact>
          <a href=''><CiMail size={24}/></a>
          <a href=''><PiTelegramLogoDuotone size={24}/></a>
          <a href='https://www.linkedin.com/in/roman-nesterchuk-182434278/' target='_blank'><GrLinkedin size={24}/></a>
          <a href='https://github.com/nestor1760' target='_blank'><FaGithub size={24}/></a>
        </HeaderContact>
        {(windowWidth > 865) 
          ? <NavigationMenu>
              <NavItem onClick={() => scrollToPart('about')}>About me</NavItem>
              <NavItem onClick={() => scrollToPart('skills')}>Skills</NavItem>
              <NavItem>Projects</NavItem>
              <NavItem>Contact</NavItem>
            </NavigationMenu>
          : <SidebarBtn><IoMenu size={24} onClick={toogleMenu}/></SidebarBtn>
        }
      </StyledContainer>
      {sidebar && <Sidebar />}
    </>
  )
}

export default Header