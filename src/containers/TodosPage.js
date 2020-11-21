import React from 'react';
import { makeStyles } from '@material-ui/core'; 
import Todos from '../components/Todos';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: '0 auto',
    overflow: 'auto',
    height: '100vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,

    '@global': {
      '*::-webkit-scrollbar': {
        width: '0.25em',
      },
      '*::-webkit-scrollbar-track': {
        backgroundColor: theme.palette.secondary.dark,
        boxShadow: 'inset 0 0 6px rgba(0, 0, 0, 0.3)',
        borderRadius: '12px',
      },
      '*::-webkit-scrollbar-thumb': {
        backgroundColor: theme.palette.primary.main,
        outline: 'none',
        borderRadius: '12px',
      },
    },

  }
}));

const TodosPage = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Todos />
    </div>
  )
};

export default TodosPage;