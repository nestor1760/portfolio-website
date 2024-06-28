import styled from "styled-components";

export const ContactContainer = styled.section`
  max-width: 1110px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 50px;
`

export const Form = styled.form`
  border: 1px solid white;
  width: 600px;
  background: #fff;
  padding: 25px 25px 30px;  
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, .1);
  color: #333;
  margin: 25px;
`

export const Title = styled.h2`
  font-size: 30px;
  text-align: center;
`

export const InputBox = styled.div`
  margin: 20px 0 0 0;
`

export const Label = styled.label`

`

export const Input = styled.input`
  width: 100%;
  height: 50px;
  background: transparent;
  border: 2px solid #ddd;
  outline: none;
  border-radius: 6px;
  padding: 15px;
  font-size: 16px;
  color: #333;
  margin-top: 8px;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  background: transparent;
  border: 2px solid #ddd;
  outline: none;
  border-radius: 6px;
  padding: 15px;
  font-size: 16px;
  color: #333;
  margin-top: 8px;    
`