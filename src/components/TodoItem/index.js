import React, { useState } from "react";
import styled from "styled-components";
import * as Styled from "./TodoItem.styled";
import { ReactComponent as CompleteIcon } from "./complete.svg";
import { ReactComponent as RemoveIcon } from "./delete.svg";

function TodoItem({ todo, index, toggleTodo, removeTodo }) {
	const [isFadingOut, setIsFadingOut] = useState(false);

	const fadeOut = (callback, delay) => {
		setIsFadingOut(true);
		setTimeout(callback, delay);
	};
	const handleRemove = (i) => {
		setIsFadingOut(false);
		removeTodo(i);
	};
	return (
		<Styled.Container fade={isFadingOut}>
			<Styled.Text completed={todo.isCompleted}>{todo.text}</Styled.Text>
			<div>
				<Styled.CompleteButton onClick={() => toggleTodo(index)}>
					<StyledCompleteIcon completed={todo.isCompleted} />
				</Styled.CompleteButton>
				<Styled.RemoveButton
					onClick={() =>
						fadeOut(() => {
							handleRemove(index);
						}, 600)
					}>
					<StyledRemoveIcon />
				</Styled.RemoveButton>
			</div>
		</Styled.Container>
	);
}

const StyledCompleteIcon = styled(CompleteIcon)`
	width: 100%;
	height: 100%;
	path {
		transition: 0.4s;
		fill: ${(props) => (props.completed ? "#0aff5d" : "#bfffca")};
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
