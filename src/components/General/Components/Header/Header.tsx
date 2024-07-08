import { IoMenu } from "react-icons/io5";
import { FC, useEffect } from 'react';
import { NavigationMenu, SidebarBtn, StyledContainer, Title } from "./HeaderStyles";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import { setShow, setSidebar } from "../../../../store/modalSlice";
import { useScroll } from "../../../../hooks/useScroll";
import Sidebar from "../../../UI/Sidebar/Sidebar";
import Select from "../../../UI/Select/Select";
import { Container } from "../../../../styledTags/Container/Container";
import { useLanguage } from "../../../../hooks/useLanguage";
import { useAppDispatch, useAppSelector } from "../../../../hook";
import { useNavMenu } from "../../../../hooks/useNavMenu";
import Modal from "../../../UI/Modal/Modal";
import Contact from "../Contact/Contact";
import MenuItem from "./MenuItem/MenuItem";
import Button from "../../../UI/StyledButton/StyledButton";
import { GeneralTitle } from "../../../../GlobalStyles";
import { Switcher } from "../../../UI/ThemeSwitcher/ThemeSwitcher";

const Header: FC = () => {
  const dispatch = useAppDispatch()
  const { show } = useAppSelector(state => state.modal)
  const { windowWidth } = useWindowWidth()
  const scrollPosition = useScroll()
  const { language, handleLanguage, t } = useLanguage()
  const { openMenu, scrollToPart, scrollToStart } = useNavMenu()

  useEffect(() => {
    if (windowWidth > 865) {
      dispatch(setSidebar({ sidebar: false, scroll: false }))
    }
  }, [windowWidth, dispatch])

  const showModal = (): void => {
    dispatch(setShow({ show: true, scroll: true }))
  }

  const menuData = [
    { label: t("header.home"), part: 'home' },
    { label: t("header.about"), part: 'about_me' },
    { label: t("header.skills"), part: 'skills' },
    { label: t("header.work"), part: 'projects' }
  ];

  const handleClick = (part: string) => {
    scrollToPart(part)
  }

  return (
    <>
      <StyledContainer
        windowWidth={windowWidth}
        scrolled={scrollPosition}
        className={(windowWidth > 977) ? (scrollPosition > 95) ? 'bigger' : '' : ''}
      >
        <Title dangerouslySetInnerHTML={{ __html: GeneralTitle }} onClick={scrollToStart} />
        {(windowWidth > 1050)
          ? <>
            <NavigationMenu>
              {menuData.map(({ label, part }) =>
                <MenuItem
                  key={label}
                  label={label}
                  handleClick={() => handleClick(part)}
                />
              )}
            </NavigationMenu>
            <Container align="center" justify="flex-end" width="auto">
              <Switcher />
              <Select
                value={language}
                onChange={handleLanguage}
                options={[
                  { value: 'en' },
                  { value: 'pl' },
                  { value: 'ua' },
                ]}
              />
              <Button width="190px" height="44px" onClick={showModal}>{t("header.button")}</Button>
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
