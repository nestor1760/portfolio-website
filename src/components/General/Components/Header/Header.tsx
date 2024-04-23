import { IoMenu } from "react-icons/io5";
import { ChangeEvent, FC, useEffect, useState } from 'react';
import { NavItem, NavigationMenu, SidebarBtn, StyledContainer, Title } from "./HeaderStyles";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import { useAppDispatch } from "../../../../hook";
import { setSidebar } from "../../../../store/modalSlice";
import { useScroll } from "../../../../hooks/useScroll";
import Sidebar from "../../../UI/Sidebar/Sidebar";
import Select from "../../../UI/Select/Select";
import { Container } from "../../../../styledTags/Container/Container";
import ContactBtn from "../../../UI/ContactBtn/ContactBtn";
// import { useTranslation } from "react-i18next";

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const { windowWidth } = useWindowWidth()
  const scrollPosition = useScroll()
  // const [t, i18n] = useTranslation("global")
  const [language, setLanguage] = useState('en')
  const title = '<<span>Nestor</span>/>'


  const scrollToStart = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    dispatch(setSidebar({ sidebar: false, scroll: false }))
  }

  const scrollToPart = (id: string) => {
    const navItem = document.getElementById(id);
    if (navItem) {
      navItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    dispatch(setSidebar({ sidebar: false, scroll: false }))
  };

  const openMenu = () => {
    dispatch(setSidebar({ sidebar: true, scroll: true }))
  }

  useEffect(() => {
    if (windowWidth > 865) {
      dispatch(setSidebar({ sidebar: false, scroll: false }))
    }
  }, [windowWidth])

  const handleLanguage = (e: ChangeEvent<HTMLSelectElement>): void => {
    setLanguage(e.target.value)
    // i18n.changeLanguage(language)
  }

  return (
    <>
      <StyledContainer
        windowWidth={windowWidth}
        scrolled={scrollPosition}
        className={(windowWidth > 977) ? (scrollPosition > 95) ? 'bigger' : '' : ''}
      >
        <Title dangerouslySetInnerHTML={{ __html: title }} onClick={scrollToStart} />
        {(windowWidth > 993)
          ? <>
            <NavigationMenu>
              <NavItem onClick={() => scrollToPart('home')}>Home</NavItem>
              <NavItem onClick={() => scrollToPart('about')}>About me</NavItem>
              <NavItem onClick={() => scrollToPart('skills')}>Skills</NavItem>
              <NavItem>Work</NavItem>
            </NavigationMenu>
            <Container align="center" justify="flex-end" width="auto">
              <Select
                value={language}
                onChange={handleLanguage}
                options={[
                  { value: 'en' },
                  { value: 'pl' },
                  { value: 'ua' },
                ]}
              />
              <ContactBtn width="190px" height="44px">Contact Me</ContactBtn>
            </Container>
          </>
          : <SidebarBtn><IoMenu size={24} onClick={openMenu} /></SidebarBtn>
        }

      </StyledContainer>
      <Sidebar />
    </>
  )
}

export default Header