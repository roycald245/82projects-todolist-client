import React, { useState } from 'react';
import { makeStyles, Paper, IconButton } from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';
import TodoDrawer from './TodoDrawer';
import Todo from './Todo';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '90%',
    height: '90%',
    flexDirection: 'row',
  },
  todosa: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '90%',
    borderRadius: '8px',
    overflow: 'auto',
    marginRight: '0px',
  },
  todosShifta: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    height: '90%',
    borderRadius: '8px',
    overflow: 'auto',
    marginRight: '0px'
  },
  todos: {
    width: '90%',
    height: '90%',
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
    height: '90%',
    overflow: 'auto',
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: '100px',
  },
}))

const Todos = (props) => {

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [drawerContent, setDrawerContent] = useState({});

  const handleDrawerOpen = () => (todo) => {
    setDrawerContent(todo)
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IconButton onClick={handleDrawerOpen()} style={{ position: 'absolute', bottom: '0%', left: '50%', transform: 'translateX(-50%)', zIndex: '3', }} ><AddBoxIcon style={{ fontSize: '300%' }} /></IconButton>
      <Paper className={drawerOpen ? classes.todosShift : classes.todos}>
        <Todo title='title aaaaaa' editCallback={handleDrawerOpen({ id: 'id', name: 'title aaaaaa', description: 'aefasfa', isComplete: false })} isCompleted={false} description='once upon a time there was a gay' />
        <Todo />
        <Todo />
      </Paper>
      <TodoDrawer open={drawerOpen} todo={drawerContent} onClose={handleDrawerClose} />
    </div>
  );
}

export default Todos;