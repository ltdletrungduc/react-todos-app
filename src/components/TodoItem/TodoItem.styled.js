import styled from "styled-components";

export const Container = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
`;
export const Text = styled.div`
	font-size: 24px;
	color: ${(props) => (props.isCompleted ? "#d9d9d9" : "#000000")};
	text-decoration: ${(props) => (props.isCompleted ? "line-through" : "none")};
	transition: 0.4s;
`;
const Button = styled.button`
	background: none;
	border: none;
	cursor: pointer;
`;
export const CompleteButton = styled(Button)`
	width: 40px;
	height: 40px;
`;

export const RemoveButton = styled(Button)`
	width: 40px;
	height: 40px;
`;
