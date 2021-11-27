import React, { useState, useEffect } from "react";

import { TodoItem, TodoForm, LoginForm } from "./components";
import "normalize.css";
import "./App.css";
function App() {
	const [todos, setTodos] = useState(() => {
		// get the todos from localstorage
		const savedTodos = localStorage.getItem("todos");
		// if there are todos stored
		if (savedTodos) {
			// return the parsed JSON object back to a javascript object
			return JSON.parse(savedTodos);
			// otherwise
		} else {
			// return an empty array
			return [];
		}
	});

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
	useEffect(() => {
		localStorage.setItem("todos", JSON.stringify(todos));
	}, [todos]);
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
			{/* <LoginForm /> */}
		</div>
	);
}

export default App;
