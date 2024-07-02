import { motion } from "framer-motion";
import { StyledButton } from "./ContactBtnStyles";
import { IButtonProps } from "./interface";
import { forwardRef } from "react";

const ContactBtn = forwardRef<HTMLButtonElement, IButtonProps>(({ children, ...props }, ref) => (
  <StyledButton {...props} ref={ref}>
    {children}
  </StyledButton>
));
export const MContactBtn = motion(ContactBtn)
export default ContactBtn