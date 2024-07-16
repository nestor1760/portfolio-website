import { IoCloseSharp } from 'react-icons/io5';
import { FaAddressBook } from 'react-icons/fa';
import { BiFolder } from "react-icons/bi";
import { BiCodeAlt } from "react-icons/bi";
import { FaHome } from "react-icons/fa";
import { CloseBtn, SidebarHeader, SidebarItem, SidebarMenu, SidebarOverlay, Span, StyledLink } from './SidebarStyles';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../hook';
import { setSidebar } from '../../../store/modalSlice';
import { useLanguage } from '../../../hooks/useLanguage';
import Select from '../Select/Select';
import { useNavMenu } from '../../../hooks/useNavMenu';
import { Container } from '../../../styledTags/Container/Container';
import { Switcher } from '../ThemeSwitcher/ThemeSwitcher';
import { gray_text, white_color } from '../../../GlobalStyles';

const Sidebar = () => {
  const dispatch = useAppDispatch()
  const { sidebar, scroll } = useAppSelector(state => state.modal)
  const { switcher } = useAppSelector(state => state.switcher)
  const { language, handleLanguage, t } = useLanguage()
  const { scrollToPart, closeMenu } = useNavMenu()

  useEffect(() => {
    if (scroll) {
      document.body.style.overflowY = 'hidden';
      document.body.style.overflowX = 'hidden';
    } else {
      document.body.style.overflowY = 'auto';
      document.body.style.overflowX = 'auto';
    }
  }, [scroll])

  const HomeIcon = ({ size }: { size: number }) => <FaHome size={size} />;
  const AboutIcon = ({ size }: { size: number }) => <FaAddressBook size={size} />;
  const SkillsIcon = ({ size }: { size: number }) => <BiCodeAlt size={size} />;
  const ProjectIcon = ({ size }: { size: number }) => <BiFolder size={size} />;

  const menuData = [
    { label: t("header.home"), part: 'home', icon: HomeIcon },
    { label: t("header.about"), part: 'about_me', icon: AboutIcon },
    { label: t("header.skills"), part: 'skills', icon: SkillsIcon },
    { label: t("header.work"), part: 'projects', icon: ProjectIcon }
  ];

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
          <CloseBtn darkTheme={switcher} onClick={closeMenu}>
            <IoCloseSharp size={28} />
          </CloseBtn>
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
        </SidebarHeader>
        <Container width='100%' height='50%' margin='50px 0 30px 0' justify='center' direction='column'>
          {menuData.map(({ label, part, icon: Icon }) =>
            <SidebarItem darkTheme={switcher} onClick={() => scrollToPart(part)} key={part}>
              <Icon size={24} /><Span>{label}</Span>
            </SidebarItem>
          )}
        </Container>
        <Container
          direction='column'
          padding='0 10px'
          margin='auto 0 10px 0'
        >
          <StyledLink
            to="/privacy-policy"
            onClick={() => dispatch(setSidebar({ sidebar: false, scroll: false }))}
            style={{ color: switcher ? white_color : gray_text }}
          >
            {t("footer.title")}
          </StyledLink>
          <p style={{
            color: switcher ? white_color : gray_text,
            fontSize: '14px'
          }}>
            &copy; 2024 {t("footer.text")}
          </p>
        </Container>
      </SidebarMenu>
    </SidebarOverlay>
  )
}

export default Sidebar