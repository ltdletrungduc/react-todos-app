import React, { useState } from "react";

import { TodoItem, TodoForm } from "./components";
import "normalize.css";
import "./App.css";
function App() {
	const [todos, setTodos] = useState([]);

	const addTodo = (text) => {
		const newTodos = [...todos, { text }];
		setTodos(newTodos);
	};

	const toggleTodo = (index) => {
		const newTodos = [...todos];
		newTodos[index].isCompleted = !newTodos[index].isCompleted;
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
				<TodoForm addHandler={addTodo} />
				{todos.map((todo, index) => {
					return (
						<TodoItem
							key={index}
							index={index}
							todo={todo}
							toggleTodo={toggleTodo}
							removeTodo={removeTodo}
						/>
					);
				})}
			</div>
		</div>
	);
}

export default App;
