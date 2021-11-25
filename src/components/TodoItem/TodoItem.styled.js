import styled from "styled-components";

export const Container = styled.div`
	padding: 10px 20px;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	transition: opacity 0.6s;
	opacity: ${(props) => (props.fade ? "0.3" : "1")};
`;
export const Text = styled.div`
	font-size: 24px;
	color: ${(props) => (props.completed ? "#d9d9d9" : "#000000")};
	text-decoration: ${(props) => (props.completed ? "line-through" : "none")};
	transition: 0.4s;
`;
const Button = styled.button`
	background: none;
	border: none;
	cursor: pointer;
	&:focus {
		outline: none;
	}
`;
export const CompleteButton = styled(Button)`
	width: 40px;
	height: 40px;
`;

export const RemoveButton = styled(Button)`
	width: 40px;
	height: 40px;
`;
