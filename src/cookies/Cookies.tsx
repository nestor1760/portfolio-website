// import { leftAnimation, MCookiesBox, upAnimation } from "../animation"
// import Button from "../components/UI/StyledButton/StyledButton"
// import { blue_color, white_color } from "../GlobalStyles"
// import { useAppDispatch, useAppSelector } from "../hook"
// import { useLanguage } from "../hooks/useLanguage"
// import { useWindowWidth } from "../hooks/useWindowWidth"
// import { rejectCookiesModal } from "../store/cookieModalSlice"
// import { Container } from "../styledTags/Container/Container"
// import { SLink } from "./CookiesStyle"
// import { setModalCookie, setTheme } from "./utills"

// const Cookies = () => {
//   const { switcher } = useAppSelector(state => state.switcher)
//   const { content } = useAppSelector(state => state.cookieModal)
//   const dispatch = useAppDispatch()

//   const { windowWidth } = useWindowWidth()
//   const { t } = useLanguage()

//   const themeCookieValue = switcher === true ? 'true' : 'false'
//   const contentCookieValue = content === true ? 'true' : 'false'

//   const handleCookie = () => {
//     setTheme(themeCookieValue)
//     setModalCookie(contentCookieValue)
//   }

//   return (
//     <MCookiesBox
//       variants={windowWidth > 480 ? leftAnimation : upAnimation}
//       initial="hidden"
//       whileInView="visible"
//       viewport={{ amount: 0.2, once: true }}
//       custom={5}
//       darkTheme={switcher}
//       visible={content}
//     >
//       <Container direction="column" margin="0 0 20px 0">
//         <p>{t("cookies.body")}<span><SLink to='/privacy-policy'>{t("cookies.link_label")}</SLink></span></p>
//       </Container>
//       <Container
//         justify="space-around"
//         direction={windowWidth < 500 ? 'column' : 'row'}
//         align={windowWidth < 500 ? 'center' : 'flex-start'}
//       >
//         <Button
//           radius='10px'
//           color={blue_color}
//           background={white_color}
//           hoverBack='transparent'
//           hoverColor={white_color}
//           margin={windowWidth < 500 ? '0 0 10px 0' : '0'}
//           onClick={() => dispatch(rejectCookiesModal())}
//         >{t("cookies.btn_reject")}</Button>
//         <Button
//           radius='10px'
//           onClick={handleCookie}
//         >
//           {t("cookies.btn_accept")}
//         </Button>
//       </Container>
//     </MCookiesBox>
//   )
// }

// export default Cookies