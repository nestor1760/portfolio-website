import { motion } from "framer-motion";
import styled from "styled-components";
import { blue_color } from "../../../../../GlobalStyles";
// import { blue_color } from "../../../../../GlobalStyles";

// export const StyledMenuItem = styled.a`
//   text-transform: uppercase;
//   font-size: 14px;
//   font-weight: 400;
//   border: none;
//   background: transparent;
//   cursor: pointer;
//   margin-right: 30px;
//   transition: 0.3s;
//   &:last-child {
//     margin-right: 0px;
//   }
//   &:hover {
//     color: ${blue_color};
//   }
// `

export const StyledMenuItem = styled.div`
  position: relative;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 400;
  border: none;
  background: transparent;
  cursor: pointer;
  margin-right: 30px;
  &:last-child {
    margin-right: 0px;
  }
`

export const ActiveLine = styled(motion.div)`
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: -3px;
  background: ${blue_color};
`
