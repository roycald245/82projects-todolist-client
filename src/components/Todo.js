import React from 'react';
import { makeStyles, Typography, Button, ButtonGroup } from '@material-ui/core';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: '2%',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '8px',
    height: '40%',
    width: '100%',
  },
  title: {
    color: theme.palette.secondary.light,
  },
  description: {
    position: 'relative',
    backgroundColor: '#1b5294',
    color: theme.palette.secondary.contrastText,
    overflowY: 'auto',
    height: '60%',
    width: '100%',
    border: '1px solid #ddd',
    borderRadius: '5px',
    textAlign: 'left',
    marginBottom: '3%',
  },
  buttons: {
    position: 'relative',
    bottom: '0%',
    display: 'flex',
  },
  buttonIcon: {
    fontSize: theme.typography.fontSize * 3
  },
}))

const Todo = (props) => {
  const { isComplete, title, description, editCallback, deleteCallback } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant='h2'>{title}</Typography>
      </div>
      {description ? <div className={classes.description}>
        <Typography variant='h5' style={{ whiteSpace: 'pre-line', marginLeft: '1%', marginRight: '1%' }}>
          {description}
        </Typography>
      </div> : null}
      <ButtonGroup className={classes.buttons} size="medium" color="primary">

        <Button>
          {isComplete ? <CheckBoxIcon className={classes.buttonIcon} /> : <CheckBoxOutlineBlankIcon className={classes.buttonIcon} />}
        </Button>
        <Button onClick={deleteCallback}><DeleteIcon className={classes.buttonIcon} /></Button>
        <Button onClick={editCallback}><CreateIcon className={classes.buttonIcon} /></Button>
      </ButtonGroup>
    </div>
  );
}

export default Todo;