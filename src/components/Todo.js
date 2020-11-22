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
    marginTop: '1%',
    marginBottom: '1%',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '8px',
    maxHeight: '40%',
    width: '95%',
    marginLeft: '2.5%',
    border: '1px solid #ddd',
  },
  title: {
    color: theme.palette.secondary.contrastText,
    position: 'relative',
  },
  description: {
    position: 'relative',
    backgroundColor: '#1b5294',
    color: theme.palette.secondary.light,
    overflowY: 'auto',
    maxHeight: '60%',
    width: '100%',
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
  console.log(props);
  const { isComplete, title, description, editCallback, onDelete, onComplete } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.title}>
        <Typography variant='h2'>{title}</Typography>
      </div>
      {description ? <div className={classes.description}>
        <Typography variant='h5' style={{ whiteSpace: 'pre-line', marginLeft: '1%', marginRight: '1%', position: 'relative' }}>
          {description}
        </Typography>
      </div> : null}
      <ButtonGroup className={classes.buttons} size="medium" color="primary">

        <Button onClick={onComplete}>
          {isComplete ? <CheckBoxIcon className={classes.buttonIcon} /> : <CheckBoxOutlineBlankIcon className={classes.buttonIcon} />}
        </Button>
        <Button onClick={onDelete}><DeleteIcon className={classes.buttonIcon} /></Button>
        <Button onClick={editCallback}><CreateIcon className={classes.buttonIcon} /></Button>
      </ButtonGroup>
    </div>
  );
}

export default Todo;