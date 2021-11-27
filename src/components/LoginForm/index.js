import React from "react";
import * as Styled from "./LoginForm.styled";

function LoginForm() {
	return (
		<Styled.Container>
			<Styled.LoginForm>
				<Styled.Input type='number' name='id' max='100' min='0' step='1' />
				<Styled.Button type='submit'>Login</Styled.Button>
			</Styled.LoginForm>
		</Styled.Container>
	);
}

export default LoginForm;
