import styled, { keyframes } from 'styled-components'
import { useAppDispatch, useAppSelector } from '../hook'
import { setSidebar, setToggleSidebar } from '../store/modalSlice'
import { IoCloseSharp } from 'react-icons/io5'
import { MdContactMail } from "react-icons/md";
import { FaAddressBook } from 'react-icons/fa';
import { BiFolder } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";

const SidebarOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  transition: 250ms;
  opacity: 0;
  background-color: transparent;
  backdrop-filter: blur(0);
  &.open {
    opacity: 1;
    z-index: 10;
    background-color: rgba(0, 0, 0, 0.12);
    backdrop-filter: blur(10px);
  }
`

const openAnimation = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`

const closeAnimation = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(100%);
    opacity: 0;
  }
`

const SidebarMenu = styled.div`
  width: 300px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  background-color: white;
  border-radius: 15px 0 0 15px;
  overflow: hidden;
  animation: ${closeAnimation} 250ms ease-in-out forwards;
  opacity: 0;
  &.active {
    opacity: 1;
    animation: ${openAnimation} 250ms ease-in-out forwards;
  }
`

const SidebarHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding-left: 10px;
  color: white;
  background: #594E7E;
`

const SidebarBody = styled.div`
  width: 100%;
  height: 50%;
  margin: 50px 0 0 30px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
`

const CloseBtn = styled.button`
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
  transition: 0.2s;
  &:hover {
    color: #68BAA5; 
  }
`

const SidebarItem = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: 1px solid black;
  text-transform: uppercase;
  font-weight: 600;
  margin: 0 0 15px 10px;
  padding: 0 10px;
  border-radius: 12px;
  border: none;
  cursor: pointer;
  color: black;
  transition: 0.2s;
  &:hover {
    color: white;
    background: #594E7E;
  }
`

const Span = styled.span`
  margin-left: 10px;
`

const Sidebar = () => {
  const dispatch = useAppDispatch()
  const {sidebar} = useAppSelector(state => state.modal)

  const toogleMenu = () => {
    dispatch(setToggleSidebar())
  }

  const scrollToPart = (id: string) => {
    const navItem = document.getElementById(id);
    if (navItem) {
      navItem.scrollIntoView({behavior: 'smooth', block: 'center'});
    }
    dispatch(setSidebar({sidebar: false, scroll: false}))
  };

  return (
    <SidebarOverlay 
          className={sidebar ? 'open' : ''} 
          onClick={() => dispatch(setSidebar({sidebar: false, scroll: false}))}
        >
          <SidebarMenu 
            className={sidebar ? 'active' : ''} 
            onClick={e => e.stopPropagation()} 
          >
            <SidebarHeader>
              <CloseBtn onClick={toogleMenu}>
                <IoCloseSharp size={28}/>
              </CloseBtn>
            </SidebarHeader>
            <SidebarBody>
              <SidebarItem onClick={() => scrollToPart('about')}><FaAddressBook size={24}/><Span>About me</Span></SidebarItem>
              <SidebarItem onClick={() => scrollToPart('skills')}><BiCodeAlt size={24}/><Span>Skills</Span></SidebarItem>
              <SidebarItem onClick={() => scrollToPart('')}><BiFolder size={24}/><Span>Projects</Span></SidebarItem>
              <SidebarItem onClick={() => scrollToPart('')}><MdContactMail size={24}/><Span>Contact</Span></SidebarItem>
            </SidebarBody>
          </SidebarMenu>
      </SidebarOverlay>
  )
}

export default Sidebar