import styled from "styled-components";
import { IContainerProps } from "./interface";

export const StyledContainer = styled.div<IContainerProps>`
  width: ${props => props.width || ''};
  height: ${props => props.height || 'auto'};
  display: ${props => props.display || 'flex'};
  align-items: ${props => props.align || 'flex-start'};
  justify-content: ${props => props.justify || 'flex-start'};
  flex-direction: ${props => props.direction || 'row'};
  padding: ${props => props.padding || 'auto'};
  margin: ${props => props.margin || 'auto'};
  flex-wrap: ${props => props.wrap || 'no-wrap'};
  background: ${props => props.background || 'transparent'}; 
  position: ${props => props.position || 'relative'};
`