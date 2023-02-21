import styled from "styled-components";

export const Container=styled.div` max-width: 320px;
padding-left: 15px;
padding-right: 15px;
margin-left: auto;
margin-right: auto;

@media screen and (min-width: 768px) and (max-width: 1020px) and (min-height: 760px) {
	max-width: 375px;
	padding: 0;
	margin-left: 50px;
}

@media screen and (min-width: 1020px) and (max-width: 1280px) and (min-height: 760px) {
	max-width: 515px;
	margin-left: 99px;
	padding: 0;
}

@media screen and (min-width: 1200px) {
	max-width: 562px;
	margin-left: 229px;
	padding: 0;
}

`;

export const Wrapper=styled.div` min-height: 648px;
height: 100vh;
overflow: hidden;
position: relative;
`;