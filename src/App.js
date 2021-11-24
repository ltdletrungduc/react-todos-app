import React, { useState } from "react";

import { TodoItem, TodoForm } from "./components";
import "normalize.css";
import "./App.css";
function App() {
	const [todos, setTodos] = useState([
		{
			text: "Learn about React",
			isCompleted: false,
		},
		{
			text: "Meet friend for lunch",
			isCompleted: false,
		},
		{
			text: "Build really cool todo app",
			isCompleted: false,
		},
	]);

	const addTodo = (text) => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	const completeTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = true;
		setTodos(newTodos);
	};

	const removeTodo = (index) => {
		const newTodos = [...todos];
		newTodos.splice(index, 1);
		setTodos(newTodos);
	};

	return (
		<div className='app'>
			<h1 className='title'>TO-DO LIST</h1>
			<div className='todo-list'>
				{todos.map((todo, index) => {
					return (
						<TodoItem
							key={index}
							index={index}
							todo={todo}
							completeTodo={completeTodo}
							removeTodo={removeTodo}
						/>
					);
				})}

				<TodoForm addHandler={addTodo} />
			</div>
		</div>
	);
}

export default App;
