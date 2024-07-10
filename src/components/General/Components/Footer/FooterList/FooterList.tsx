import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { useAppDispatch, useAppSelector } from "../../../../../hook";
import { setShow } from "../../../../../store/modalSlice";
import { MFooterBtn, MFooterLink, downAnimation } from "../../../../../animation";
import { Container } from "../../../../../styledTags/Container/Container";

const FooterList = () => {
  const linkedin = import.meta.env.VITE_LINK_URL;
  const facebook = import.meta.env.VITE_FACE_URL;
  const github = import.meta.env.VITE_GIT_URL;
  const telegram = import.meta.env.VITE_TELEGRAM_URL;

  const { switcher } = useAppSelector(state => state.switcher)

  const dispatch = useAppDispatch()
  const showModal = (): void => {
    dispatch(setShow({ show: true, scroll: true }))
  }

  return (
    <Container align="center" justify="center" margin="0">
      <MFooterLink darkTheme={switcher} variants={downAnimation} custom={1} href={github} target="_blank">
        <FaSquareGithub size={30} />
      </MFooterLink>
      <MFooterLink darkTheme={switcher} variants={downAnimation} custom={2} href={linkedin} target="_blank">
        <FaLinkedin size={30} />
      </MFooterLink>
      <MFooterLink darkTheme={switcher} variants={downAnimation} custom={3} href={facebook} target="_blank">
        <IoLogoFacebook size={30} />
      </MFooterLink>
      <MFooterLink darkTheme={switcher} variants={downAnimation} custom={4} href={telegram} target="_blank">
        <FaTelegram size={30} />
      </MFooterLink>
      <MFooterBtn darkTheme={switcher} variants={downAnimation} custom={5} onClick={showModal}>
        <IoIosMail size={30} />
      </MFooterBtn>
    </Container>
  )
}

export default FooterList