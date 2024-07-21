import { leftAnimation, MCookieBox, upAnimation } from "../../../../animation"
import { blue_color, white_color } from "../../../../GlobalStyles"
import { useAppDispatch, useAppSelector } from "../../../../hook"
import { useLanguage } from "../../../../hooks/useLanguage"
import { useWindowWidth } from "../../../../hooks/useWindowWidth"
import { closeModalAndAcceptCookie, closeModalAndRejectCookie } from "../../../../store/modalCookieSlice"
import { Container } from "../../../../styledTags/Container/Container"
import Button from "../../../UI/StyledButton/StyledButton"
import { SLink } from "./CookieStyles"

const Cookie = () => {
  const { switcher } = useAppSelector(state => state.switcher)
  const { modalCookie } = useAppSelector(state => state.modalCookie)
  const { windowWidth } = useWindowWidth()
  const { t } = useLanguage()
  const dispatch = useAppDispatch()

  const acceptCookie = () => {
    dispatch(closeModalAndAcceptCookie());
    console.log('accept cookie');
  }

  const rejectCookie = () => {
    dispatch(closeModalAndRejectCookie());
    console.log('reject cookie');
  }

  return (
    <>
      {modalCookie && (
        <MCookieBox
          variants={windowWidth > 480 ? leftAnimation : upAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.2, once: true }}
          custom={10}
          darkTheme={switcher}
        >
          <Container direction="column" margin="0 0 20px 0">
            <p>{t("cookies.body")}<span><SLink to='/privacy-policy'>{t("cookies.link_label")}</SLink></span></p>
          </Container>
          <Container
            justify="space-around"
            direction={windowWidth < 500 ? 'column' : 'row'}
            align={windowWidth < 500 ? 'center' : 'flex-start'}
          >
            <Button
              radius='10px'
              color={blue_color}
              background={white_color}
              hoverBack='transparent'
              hoverColor={white_color}
              margin={windowWidth < 500 ? '0 0 10px 0' : '0'}
              onClick={rejectCookie}
            >
              {t("cookies.btn_reject")}
            </Button>
            <Button
              radius='10px'
              onClick={acceptCookie}
            >
              {t("cookies.btn_accept")}
            </Button>
          </Container>
        </MCookieBox>
      )}
    </>
  )
}

export default Cookie
