import React, { useState } from 'react';
import { makeStyles, Paper, IconButton } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import TodoDrawer from './TodoDrawer';
import Todo from './Todo';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '90%',
    height: '80%',
    flexDirection: 'row',
  },
  todos: {
    width: '90%',
    maxHeight: '90%',
    overflow: 'auto',
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  todosShift: {
    width: '90%',
    maxHeight: '90%',
    overflow: 'auto',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: '100px',
  },
  plusButton: {
    position: 'absolute',
    bottom: '3%',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '3',
    color: theme.palette.secondary.main,
    transition:
      theme.transitions.create(['background-color', 'transform'], {
        duration: theme.transitions.duration.standard,
      }),

    '&:hover': {
      color: 'green',
      transform: 'translateX(-50%) scale(1.5)',
    }
  },
}))

const Todos = (props) => {

  const { todos, onUpdate, onDelete, onAdd } = props;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState({});

  const handleDrawerOpen = (todo) => () => {
    setDrawerContent(todo)
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const classes = useStyles();

  const Todos = () => {
    return todos.map(todo => (
      <Todo
        key={todo.id}
        title={todo.name}
        editCallback={handleDrawerOpen({ id: todo.id, name: todo.name, description: todo.description, isComplete: todo.iscomplete })}
        isComplete={todo.iscomplete}
        description={todo.description}
        onComplete={onUpdate({ id: todo.id, name: todo.name, description: todo.description, isComplete: !todo.iscomplete })}
        onDelete={onDelete({id: todo.id})}
      />
    )
    );
  };

  return (
    <div className={classes.root}>
      <Paper className={drawerOpen ? classes.todosShift : classes.todos}>
        {Todos()}
      </Paper>
      {!drawerOpen ? <IconButton onClick={handleDrawerOpen()} className={classes.plusButton} ><AddBoxIcon style={{ fontSize: '300%', }} /></IconButton> : null}
      <TodoDrawer open={drawerOpen} onAdd={onAdd} onUpdate={onUpdate} todo={drawerContent} onClose={handleDrawerClose} />

    </div>
  );
}

export default Todos;