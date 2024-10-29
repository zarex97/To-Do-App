import React, { useState } from 'react';
import { Container, TextField, Button, List, ListItem, ListItemText, Typography } from '@mui/material';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');
  const [completedTasks, setCompletedTasks] = useState(0);

  const addTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);

    
    const completedCount = updatedTasks.filter(task => task.completed).length;
    setCompletedTasks(completedCount);
  };

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" align="center" gutterBottom>
        TO DO List
      </Typography>
      <TextField
        fullWidth
        label="Nueva tarea"
        variant="outlined"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && addTask()}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        style={{ marginTop: '10px' }}
        onClick={addTask}
      >
        Agregar
      </Button>
      <List>
        {tasks.map((task, index) => (
          <ListItem
            key={index}
            button
            onClick={() => toggleTask(index)}
            style={{ textDecoration: task.completed ? 'line-through' : 'none' }}
          >
            <ListItemText primary={task.text} />
          </ListItem>
        ))}
      </List>
      <Typography variant="subtitle1" align="center" style={{ marginTop: '20px' }}>
        Tareas pendientes: {tasks.length - completedTasks}
      </Typography>
    </Container>
  );
}

export default TodoList;