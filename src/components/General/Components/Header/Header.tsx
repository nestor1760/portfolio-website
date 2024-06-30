import { IoMenu } from "react-icons/io5";
import { FC, useEffect } from 'react';
import { NavItem, NavigationMenu, SidebarBtn, StyledContainer, Title } from "./HeaderStyles";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import { setShow, setSidebar } from "../../../../store/modalSlice";
import { useScroll } from "../../../../hooks/useScroll";
import Sidebar from "../../../UI/Sidebar/Sidebar";
import Select from "../../../UI/Select/Select";
import { Container } from "../../../../styledTags/Container/Container";
import ContactBtn from "../../../UI/ContactBtn/ContactBtn";
import { useLanguage } from "../../../../hooks/useLanguage";
import { useAppDispatch, useAppSelector } from "../../../../hook";
import { useNavMenu } from "../../../../hooks/useNavMenu";
import Modal from "../../../UI/Modal/Modal";
import Contact from "../Contact/Contact";

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const { show } = useAppSelector(state => state.modal)
  const { windowWidth } = useWindowWidth()
  const scrollPosition = useScroll()
  const { language, handleLanguage, t } = useLanguage()
  const { openMenu, scrollToPart, scrollToStart } = useNavMenu()

  const title = '<<span>Nestor</span>/>';

  useEffect(() => {
    if (windowWidth > 865) {
      dispatch(setSidebar({ sidebar: false, scroll: false }))
    }
  }, [windowWidth, dispatch])

  const showModal = (): void => {
    dispatch(setShow({ show: true, scroll: true }))
  }


  return (
    <>
      <StyledContainer
        windowWidth={windowWidth}
        scrolled={scrollPosition}
        className={(windowWidth > 977) ? (scrollPosition > 95) ? 'bigger' : '' : ''}
      >
        <Title dangerouslySetInnerHTML={{ __html: title }} onClick={scrollToStart} />
        {(windowWidth > 1024)
          ? <>
            <NavigationMenu>
              <NavItem onClick={() => scrollToPart('home')}>{t("header.home")}</NavItem>
              <NavItem onClick={() => scrollToPart('about_me')}>{t("header.about")}</NavItem>
              <NavItem onClick={() => scrollToPart('skills')}>{t("header.skills")}</NavItem>
              <NavItem onClick={() => scrollToPart('projects')}>{t("header.work")}</NavItem>
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
              <ContactBtn width="190px" height="44px" onClick={showModal}>{t("header.button")}</ContactBtn>
            </Container>
          </>
          : <SidebarBtn><IoMenu size={24} onClick={openMenu} /></SidebarBtn>
        }
      </StyledContainer>
      <Sidebar />
      <Modal show={show}>
        <Contact />
      </Modal>
    </>
  )
}

export default Header