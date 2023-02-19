import styled from "styled-components";
import TextField from "@mui/material/TextField";

export const TextFieldStyled = styled(TextField)`
  & .MuiInput-underline:before {
    border-bottom-color: #00d7ff;
  }
  & .MuiFormLabel-root {
    color: #00d7ff;
  }
  & .MuiInput-input {
    color: #00d7ff;
  }
`;

export const LandingButton = styled.button`
  cursor: pointer;
  display: block;
  margin: 23px auto 0;
  padding-bottom: 7px;
  border-radius: 50%;
  width: 52px;
  height: 52px;
  font-size: 24px;
  font-weight: 700;
  color: white;
  background-color: #ff851c;
  box-shadow: 0 0px 5px 0px #ff851c;
  border: none;
  box-shadow: 0 0px 5px 0px #ff851c;
  &:hover {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset,
      rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
  }
`;

export const Wrapper = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const Modal = styled.div`
  width: 290px;
  padding: 40px 10px;
  background: white;
  color: white;
  z-index: 10;
  border-radius: 16px;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
`;

export const CloseBtn = styled.button`
  cursor: pointer;
  font-weight: 500;
  padding: 4px 8px;
  border-radius: 8px;
  border: none;
  font-size: 18px;
  color: #2c3e50;
  background: white;
  transition: all 0.25s ease;
  box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.06);
  position: absolute;
  right: 0;
  top: 0;
  align-self: flex-end;
  margin-top: -7px;
  margin-right: -7px;
  &:hover {
    box-shadow: 0 5px 20px 0 rgba(0, 0, 0, 0.04);
    transform: translate(-4px, 4px);
  }
`;

export const Paragraph = styled.p`
  font-size: 16px;
  margin: 0px;
  padding-bottom: 14px;
  color: #b9c3c8;
`;