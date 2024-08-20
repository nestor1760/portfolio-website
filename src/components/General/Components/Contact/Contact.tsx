import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../../hook";
import { useLanguage } from "../../../../hooks/useLanguage";
import { setShow } from "../../../../store/modalSlice";
import { CheckBox, CheckBoxText, CloseBtn, ContactContainer, Form, Input, InputBox, Label, StyledLink, TextArea, Title } from "./ContactStyles";
import { handleSubmit } from "./utills";
import { IoCloseOutline } from "react-icons/io5";
import Button from "../../../UI/StyledButton/StyledButton";
import { Container } from "../../../../styledTags/Container/Container";

const Contact = () => {
  const dispatch = useAppDispatch()
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

  const [nameState, setNameState] = useState<string>('')
  const [mailState, setMailState] = useState<string>('')
  const [messageState, setMessageState] = useState<string>('')
  const [checked, setChecked] = useState<boolean>(false)

  const { switcher } = useAppSelector(state => state.switcher)

  const closeModal = (): void => {
    dispatch(setShow({ show: false, scroll: false }))
    setNameState('')
    setMailState('')
    setMessageState('')
    setChecked(false)
  }

  return (
    <ContactContainer>
      <Form darkTheme={switcher} onSubmit={handleSubmit(req_title, req_text)}>
        <Container align="center" justify="center" margin="0" width="100%">
          <Title>{title}</Title>
          <CloseBtn type="button" onClick={closeModal}><IoCloseOutline size={30} /></CloseBtn>
        </Container>
        <InputBox>
          <Label>{name}</Label>
          <Input value={nameState} onChange={e => setNameState(e.target.value)} type="text" placeholder={name_ph} name="name" required />
        </InputBox>
        <InputBox>
          <Label>{email}</Label>
          <Input value={mailState} onChange={e => setMailState(e.target.value)} type="email" placeholder={email_ph} name="email" required />
        </InputBox>
        <InputBox>
          <Label>{message}</Label>
          <TextArea value={messageState} onChange={e => setMessageState(e.target.value)} name="message" id="" placeholder={message_ph} required />
        </InputBox>
        <Container align="center" justify="space-between" margin="0">
          <Container align="center" justify="space-between" margin="0">
            <CheckBox type="checkbox" required checked={checked} onChange={() => setChecked(prev => !prev)} />
            <CheckBoxText>
              I have read and agree to the <br />
              <StyledLink to='/privacy-policy' onClick={() => closeModal()}>Privacy Policy</StyledLink>
            </CheckBoxText>
          </Container>
          <Button width="40%" height="55px">{btn_label}</Button>
        </Container>
      </Form>
    </ContactContainer>
  )
}

export default Contact
