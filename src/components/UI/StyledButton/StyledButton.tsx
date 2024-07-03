import { motion } from "framer-motion";
import { StyledButton } from "./StyledButtonStyles";
import { IButtonProps } from "./interface";
import { forwardRef } from "react";

const Button = forwardRef<HTMLButtonElement, IButtonProps>(({ children, ...props }, ref) => (
  <StyledButton {...props} ref={ref}>
    {children}
  </StyledButton>
));
export const MButton = motion(Button)
export default Button