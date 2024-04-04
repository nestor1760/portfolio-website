import styled from 'styled-components'
import { IWrapper } from '../types/types'

const StyledWrapper = styled.section`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  background-color: #F6EBFF;
`

export const Wrapper = ({children, ...props}: IWrapper) => <StyledWrapper {...props}>{children}</StyledWrapper>