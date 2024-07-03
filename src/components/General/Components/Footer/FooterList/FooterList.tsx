import { FaSquareGithub } from "react-icons/fa6";
import { IoLogoFacebook } from "react-icons/io";
import { FaLinkedin } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { FaTelegram } from "react-icons/fa6";
import { ListContainer } from "./FooterListStyles";
import { useAppDispatch } from "../../../../../hook";
import { setShow } from "../../../../../store/modalSlice";
import { MFooterBtn, MFooterLink, downAnimation } from "../../../../../animation";

const FooterList = () => {
  const linkedin = import.meta.env.VITE_LINK_URL;
  const facebook = import.meta.env.VITE_FACE_URL;
  const github = import.meta.env.VITE_GIT_URL;
  const telegram = import.meta.env.VITE_TELEGRAM_URL;

  const dispatch = useAppDispatch()
  const showModal = (): void => {
    dispatch(setShow({ show: true, scroll: true }))
  }

  return (
    <ListContainer>
      <MFooterLink variants={downAnimation} custom={1} href={github} target="_blank">
        <FaSquareGithub size={30} />
      </MFooterLink>
      <MFooterLink variants={downAnimation} custom={2} href={linkedin} target="_blank">
        <FaLinkedin size={30} />
      </MFooterLink>
      <MFooterLink variants={downAnimation} custom={3} href={facebook} target="_blank">
        <IoLogoFacebook size={30} />
      </MFooterLink>
      <MFooterLink variants={downAnimation} custom={4} href={telegram} target="_blank">
        <FaTelegram size={30} />
      </MFooterLink>
      <MFooterBtn variants={downAnimation} custom={5} onClick={showModal}>
        <IoIosMail size={30} />
      </MFooterBtn>
    </ListContainer>
  )
}

export default FooterList