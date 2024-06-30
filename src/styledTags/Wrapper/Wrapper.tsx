import { StyledWrapper } from './WrapperStyles'
import { IWrapper } from './interfaces'

export const Wrapper = ({ children, ...props }: IWrapper) => <StyledWrapper {...props}>{children}</StyledWrapper>
