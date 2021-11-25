import styled from "styled-components";

export const Container = styled.div`
	width: 100%;
`;
export const Form = styled.form`
	width: 100%;
`;
export const Input = styled.input`
	padding: 20px 10px;
	width: 100%;
	font-size: 24px;
	box-sizing: border-box;
	border: 2px solid #ccc;
	border-radius: 10px;
	transition: 0.4s;
	outline: none;
	&:focus {
		border-color: #555;
	}
	&::-webkit-input-placeholder {
		/* Chrome/Opera/Safari */
		color: gray;
		opacity: 0.6;
	}
	&::-moz-placeholder {
		/* Firefox 19+ */
		color: gray;
		opacity: 0.6;
	}
	&:-ms-input-placeholder {
		/* IE 10+ */
		color: gray;
		opacity: 0.6;
	}
	&:-moz-placeholder {
		/* Firefox 18- */
		color: gray;
		opacity: 0.6;
	}
`;
