import { useAppDispatch } from "../../../../hook";
import { useLanguage } from "../../../../hooks/useLanguage";
import { setShow } from "../../../../store/modalSlice";
import ContactBtn from "../../../UI/ContactBtn/ContactBtn";
import { CloseBtn, ContactContainer, Form, HeaderBox, Input, InputBox, Label, TextArea, Title } from "./ContactStyles";
import { handleSubmit } from "./utills";
import { IoCloseOutline } from "react-icons/io5";

const Contact = () => {
  const dispatch = useAppDispatch()

  const closeModal = (): void => {
    dispatch(setShow({ show: false, scroll: false }))
  }

  const { t } = useLanguage()

  const title = t("contactForm.title");
  const name = t("contactForm.name");
  const name_ph = t("contactForm.name_ph");
  const email = t("contactForm.email");
  const email_ph = t("contactForm.email_ph");
  const message = t("contactForm.message");
  const message_ph = t("contactForm.message_ph");
  const btn_label = t("contactForm.btn_label");
  const req_title = t("contactForm.req_title");
  const req_text = t("contactForm.req_text");

  return (
    <ContactContainer>
      <Form onSubmit={handleSubmit(req_title, req_text)}>
        <HeaderBox>
          <Title>{title}</Title>
          <CloseBtn type="button" onClick={closeModal}><IoCloseOutline size={30} /></CloseBtn>
        </HeaderBox>
        <InputBox>
          <Label>{name}</Label>
          <Input type="text" placeholder={name_ph} name="name" required />
        </InputBox>
        <InputBox>
          <Label>{email}</Label>
          <Input type="email" placeholder={email_ph} name="email" required />
        </InputBox>
        <InputBox>
          <Label>{message}</Label>
          <TextArea name="message" id="" placeholder={message_ph} required />
        </InputBox>
        <ContactBtn width="100%" height="55px">{btn_label}</ContactBtn>
      </Form>
    </ContactContainer>
  )
}

export default Contact