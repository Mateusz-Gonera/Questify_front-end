import styled from "styled-components";
import { TextField } from "@mui/material/TextField";

export const Wrapper = styled.div`
	text-align: left;
	@media screen and (min-width: 768px) and (max-width: 1020px) and (min-height: 760px) {
		margin-bottom: 351px;
	}
	@media screen and (min-width: 1020px) and (max-width: 1280px) and (min-height: 760px) {
		margin-bottom: 201px;
	}
`;
export const Paragraph = styled.p`
	font-size: 14px;
	margin: 0px;
	padding-bottom: 14px;
	color: #b9c3c8;
	@media screen and (min-width: 768px) and (max-width: 1020px) and (min-height: 760px) {
		font-size: 18px;
	}
	@media screen and (min-width: 1020px) and (max-width: 1280px) and (min-height: 760px) {
		font-size: 24px;
		padding-bottom: 36px;
	}
	@media screen and (min-width: 1200px) {
		font-size: 24px;
	}
`;

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
	@media screen and (min-width: 768px) and (min-height: 760px) {
		& .MuiInputBase-root {
			width: 193px;
		}
	}
`;

export const RegistrationLink = styled.span`
	cursor: pointer;
	color: #00d7ff;
	text-decoration: underline;
	&:hover {
		color: #ff851c;
	}
`;

export const FormButton = styled.button`
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
	@media screen and (min-width: 768px) and (min-height: 760px) {
		margin-left: 141px;
	}
`;