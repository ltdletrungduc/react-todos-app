import React, { useState } from "react";
import * as Styled from "./TodoForm.styled";
function TodoForm({ addHandler }) {
	const [value, setValue] = useState("");

	const submitHandler = (e) => {
		e.preventDefault();
		if (!value) return;
		addHandler(value);
		setValue("");
	};
	return (
		<Styled.Container>
			<Styled.Form onSubmit={submitHandler}>
				<Styled.Input
					type='text'
					value={value}
					onChange={(e) => setValue(e.target.value)}
				/>
			</Styled.Form>
		</Styled.Container>
	);
}

export default TodoForm;
