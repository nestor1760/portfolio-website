import ContactBtn from "../../../UI/ContactBtn/ContactBtn"
import { ContactContainer, Form, Input, InputBox, Label, TextArea, Title } from "./ContactStyles"
import { onSubmit } from "./utills"

const Contact = () => {
  return (
    <ContactContainer>
      <Form onSubmit={onSubmit}>
        <Title>Contact Form</Title>
        <InputBox>
          <Label>Full name</Label>
          <Input type="text" placeholder="Enter your name" name="name" required />
        </InputBox>
        <InputBox>
          <Label>Email address</Label>
          <Input type="email" placeholder="Enter your email" name="email" required />
        </InputBox>
        <InputBox>
          <Label>Your message</Label>
          <TextArea name="message" id="" placeholder="Enter your message" required />
        </InputBox>
        <ContactBtn width="100%" height="55px">Send message</ContactBtn>
      </Form>

    </ContactContainer>
  )
}

export default Contact