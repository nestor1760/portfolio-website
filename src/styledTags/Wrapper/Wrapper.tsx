import { useAppSelector } from '../../hook'
import { StyledWrapper } from './WrapperStyles'
import { IWrapper } from './interfaces'

export const Wrapper = ({ children, ...props }: IWrapper) => {
  const { switcher } = useAppSelector(state => state.switcher)

  console.log(switcher);

  return (
    <StyledWrapper darkTheme={switcher} {...props}>{children}</StyledWrapper>
  )
}