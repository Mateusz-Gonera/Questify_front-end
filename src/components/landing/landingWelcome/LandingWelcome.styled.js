import styled from "styled-components";

export const Wrapper = styled.div`
	max-width: 281px;
	padding-top: 60px;
	padding-bottom: 30px;
	@media screen and (min-width: 768px) and (max-width: 1020px) and (min-height: 760px) {
		max-width: 375px;
		padding-top: 312px;
		padding-bottom: 25px;
	}
	@media screen and (min-width: 1020px) and (max-width: 1280px) and (min-height: 760px) {
		max-width: 515px;
		padding-top: 161px;
		padding-bottom: 25px;
	}
	@media screen and (min-width: 1200px) {
		padding-top: 193px;
		padding-bottom: 35px;
		max-width: 562px;
	}
	& > h1 {
		display: flex;
		padding-bottom: 60px;
		font-size: 24px;
		margin: 0px;
		color: #00d7ff;
		@media screen and (min-width: 768px) and (max-width: 1020px) and (min-height: 760px) {
			font-size: 20px;
			padding-bottom: 50px;
		}
		@media screen and (min-width: 1020px) and (max-width: 1280px) and (min-height: 760px) {
			padding-bottom: 50px;
		}
		@media screen and (min-width: 1200px) {
			padding-bottom: 70px;
		}
	}
	& > p {
		text-align: left;
		font-size: 18px;
		line-height: 29px;
		letter-spacing: 0.015em;
		font-weight: 700;
		margin-top: 0px;
		margin-bottom: 0px;
		color: #15395a;
		@media screen and (min-width: 768px) and (max-width: 1020px) and (min-height: 760px) {
			line-height: 33px;
			font-size: 24px;
		}
		@media screen and (min-width: 1020px) and (max-width: 1280px) and (min-height: 760px) {
			line-height: 45px;
			font-size: 33px;
			max-width: 515px;
		}
		@media screen and (min-width: 1200px) {
			line-height: 45px;
			max-width: 100%;
			font-size: 36px;
		}
	}
`;