import { StyledButton } from "./ContactBtnStyles";
import { IButtonProps } from "./interface";

const ContactBtn = ({ children, ...props }: IButtonProps) => <StyledButton {...props}>{children}</StyledButton>

export default ContactBtn