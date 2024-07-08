import styled from "styled-components";

export const SwitcherBox = styled.div`
  width: 50px;
  height: 30px;
  background-color: blue;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  border-radius: 50px;
  padding: 5px;
  margin: 0 10px 0 0;
  cursor: pointer;
  transition: 0.5s;

  &.switchOn {
    justify-content: flex-end;
    background-color: #262626;
  }
`

export const Handle = styled.div`
  width: 20px;
  height: 20px;
  background-color: white;
  border-radius: 40px;
`