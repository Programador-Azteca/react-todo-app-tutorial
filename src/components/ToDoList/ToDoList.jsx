import { Button, List, ListItem, TextField } from '@mui/material';
import React, { useState } from 'react';
import '../../App.css';

function ToDoList() {

	const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo('');
  }

	const handleOnChange = (event) => {
		event.preventDefault();
		setNewTodo(event.target.value)
	}

  return (
    <div className="container">
			<form onSubmit={handleOnSubmit}>
				<div className="box">
					<TextField type="text" value={newTodo} onChange={handleOnChange} placeholder="Nueva tarea" />
				</div>
				<div className="box">
					<Button type="submit" variant="contained">Añadir</Button>
				</div>
			</form>
			<List>
				{todos.map((todo, index) => (
					<ListItem key={index}>{index}. {todo}</ListItem>
				))}
			</List>
    </div>
  );
}

export default ToDoList;
