import React from "react";
import styled from "styled-components";
import * as Styled from "./TodoItem.styled";
import { ReactComponent as CompleteIcon } from "./complete.svg";
import { ReactComponent as RemoveIcon } from "./delete.svg";

function TodoItem({ todo, index, completeTodo, removeTodo }) {
	return (
		<Styled.Container>
			<Styled.Text isCompleted={todo.isCompleted}>{todo.text}</Styled.Text>
			<Styled.CompleteButton onClick={() => completeTodo(index)}>
				<StyledCompleteIcon isCompleted={todo.isCompleted} />
			</Styled.CompleteButton>
			<Styled.RemoveButton onClick={() => removeTodo(index)}>
				<StyledRemoveIcon />
			</Styled.RemoveButton>
		</Styled.Container>
	);
}

const StyledCompleteIcon = styled(CompleteIcon)`
	width: 100%;
	height: 100%;
	path {
		transition: 0.4s;
		fill: ${(props) => (props.isCompleted ? "#0aff5d" : "#bfffca")};
	}
	&:hover path {
		fill: #0aff5d;
	}
`;

const StyledRemoveIcon = styled(RemoveIcon)`
	width: 100%;
	height: 100%;
	path {
		transition: 0.4s;
	}
	&:hover path {
		fill: #f00000;
	}
`;

export default TodoItem;
