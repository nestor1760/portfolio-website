import { IoCloseSharp } from 'react-icons/io5';
import { FaAddressBook } from 'react-icons/fa';
import { BiFolder } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { CloseBtn, SidebarBody, SidebarHeader, SidebarItem, SidebarMenu, SidebarOverlay, Span } from './SidebarStyles';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { setSidebar } from '../../../store/modalSlice';

const Sidebar = () => {
  const dispatch = useAppDispatch()
  const { sidebar, scroll } = useAppSelector(state => state.modal)

  const closeMenu = () => {
    dispatch(setSidebar({ sidebar: false, scroll: false }))
  }

  const scrollToPart = (id: string) => {
    const navItem = document.getElementById(id);
    if (navItem) {
      navItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    dispatch(setSidebar({ sidebar: false, scroll: false }))
  };

  useEffect(() => {
    if (scroll) {
      document.body.style.overflowY = 'hidden';
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'auto';
    }
  }, [scroll])

  return (
    <SidebarOverlay
      className={sidebar ? 'open' : ''}
      onClick={() => dispatch(setSidebar({ sidebar: false, scroll: false }))}
    >
      <SidebarMenu
        className={sidebar ? 'active' : ''}
        onClick={e => e.stopPropagation()}
      >
        <SidebarHeader>
          <CloseBtn onClick={closeMenu}>
            <IoCloseSharp size={28} />
          </CloseBtn>
        </SidebarHeader>
        <SidebarBody>
          <SidebarItem onClick={() => scrollToPart('home')}><FaHome size={24} /><Span>Home</Span></SidebarItem>
          <SidebarItem onClick={() => scrollToPart('about_me')}><FaAddressBook size={24} /><Span>About me</Span></SidebarItem>
          <SidebarItem onClick={() => scrollToPart('skills')}><BiCodeAlt size={24} /><Span>Skills</Span></SidebarItem>
          <SidebarItem onClick={() => scrollToPart('')}><BiFolder size={24} /><Span>Work</Span></SidebarItem>
        </SidebarBody>
      </SidebarMenu>
    </SidebarOverlay>
  )
}

export default Sidebar