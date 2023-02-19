import styled from "styled-components";

export const ImgUp = styled.img`
	position: absolute;
	bottom: 0;
	z-index: -1;
	@media screen and (min-width: 768px) and (min-height: 760px) {
		top: 0;
		right: 0;
	}
`;

export const ImgDown = styled.img`
	position: absolute;
	bottom: 0;
	z-index: -1;
	@media screen and (min-width: 768px) and (min-height: 760px) {
		bottom: 0;
		right: 0;
	}
`;