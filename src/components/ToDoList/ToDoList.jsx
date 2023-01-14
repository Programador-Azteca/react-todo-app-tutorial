import {
	Button,
	List,
	ListItem,
	TextField,
	ListItemButton,
	ListItemIcon,
	Checkbox,
	ListItemText
} from '@mui/material';
import React, { useState } from 'react';
import '../../App.css';

function ToDoList() {
	const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const [checked, setChecked] = useState([]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleOnSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, newTodo]);
    setNewTodo("");
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
				{todos.map((todo, index) => {
					const labelId = `checkbox-list-label-${index}`;

					return (
						<ListItem
							key={index}
							disablePadding
						>
							<ListItemButton role={undefined} onClick={handleToggle(index)} dense>
								<ListItemIcon>
									<Checkbox
										edge="start"
										checked={checked.indexOf(index) !== -1}
										tabIndex={0}
										disableRipple
										inputProps={{ 'aria-labelledby': labelId }}
									/>
								</ListItemIcon>
								<ListItemText id={labelId} primary={todo} />
							</ListItemButton>
						</ListItem>
					)})
				}
			</List>
    </div>
  );
}

export default ToDoList;
