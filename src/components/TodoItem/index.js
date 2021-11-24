import React from "react";
import * as Styled from "./TodoItem.styled";

function TodoItem({ todo, index, completeTodo, removeTodo }) {
	return (
		<Styled.Container>
			<Styled.CompleteButton onClick={() => completeTodo(index)}>
				Complete
			</Styled.CompleteButton>
			<Styled.Text isCompleted={todo.isCompleted}>{todo.text}</Styled.Text>
			<Styled.RemoveButton onClick={() => removeTodo(index)}>
				Remove
			</Styled.RemoveButton>
		</Styled.Container>
	);
}

export default TodoItem;
