import { IoMenu } from "react-icons/io5";
import { FC, useEffect } from 'react';
import { NavItem, NavigationMenu, SidebarBtn, StyledContainer, Title } from "./HeaderStyles";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import { setSidebar } from "../../../../store/modalSlice";
import { useScroll } from "../../../../hooks/useScroll";
import Sidebar from "../../../UI/Sidebar/Sidebar";
import Select from "../../../UI/Select/Select";
import { Container } from "../../../../styledTags/Container/Container";
import ContactBtn from "../../../UI/ContactBtn/ContactBtn";
import { useLanguage } from "../../../../hooks/useLanguage";
import { useAppDispatch } from "../../../../hook";
import { useNavMenu } from "../../../../hooks/useNavMenu";

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const title = '<<span>Nestor</span>/>';

  const { windowWidth } = useWindowWidth()
  const scrollPosition = useScroll()
  const { language, handleLanguage, t } = useLanguage()
  const { openMenu, scrollToPart, scrollToStart } = useNavMenu()

  useEffect(() => {
    if (windowWidth > 865) {
      dispatch(setSidebar({ sidebar: false, scroll: false }))
    }
  }, [windowWidth, dispatch])

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
              <ContactBtn width="190px" height="44px">{t("header.button")}</ContactBtn>
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