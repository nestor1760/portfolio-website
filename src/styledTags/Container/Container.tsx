import { IContainerProps } from './interface'
import { StyledContainer } from './ContainerStyles'

export const Container = ({ children, ...props }: IContainerProps) => <StyledContainer {...props}>{children}</StyledContainer>
