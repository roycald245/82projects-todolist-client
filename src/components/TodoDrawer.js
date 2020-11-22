import React, { useState } from 'react';
import { InputBase, makeStyles, Drawer, IconButton, Paper, Button } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import CancelIcon from '@material-ui/icons/Cancel';
import { ReactComponent as CheckBoxActive } from '../assets/checkbox-active.svg';
import { ReactComponent as CheckBoxInactive } from '../assets/checkbox-inactive.svg';

const drawerWidth = '40%';

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margin: '1%',
    backgroundColor: theme.palette.secondary.main,
    borderRadius: '8px',
    padding: '2%',
    height: '40%',
    width: '94%',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor: theme.palette.secondary.main,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    justifyContent: 'flex-start',
  },
  drawerBody: {
    display: 'flex',
  },
  titleInput: {
    marginLeft: theme.spacing(1),
    color: theme.palette.primary.text,
    fontSize: '50px',
  },
  descriptionInput: {
    marginLeft: theme.spacing(1),
    color: '#c4c4c4',
    fontSize: '30px',
    height: '100%',
    width: '100%',
  },
  inputPaperTitle: {
    marginTop: '15%',
    padding: '2px 4px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1b5294',
    maxHeight: '60%',
    resize: 'both',
    width: '80%',
    marginLeft: '10%',
    top: '2%',
    color: theme.palette.secondary.contrastText
  },
  inputPaperDescription: {
    marginTop: '10%',
    padding: '2px 4px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: '#1b5294',
    maxHeight: '60%',
    resize: 'both',
    width: '80%',
    marginLeft: '10%',
    top: '2%'
  },
  inputs: {
    display: 'flex',
    flexDirection: 'column',
  },
  submit: {
    marginTop: '20%',
    fontSize: '80px',
    color: '#1b5294',
  },

}))

const Todo = (props) => {
  const { todo, open, onClose, onSubmit } = props;

  const [newTitle, setNewTitle] = useState(todo ? todo.name : 'Todo title');
  const [newDescription, setNewDescription] = useState(todo ? todo.description : 'description');
  const [newStatus, setNewStatus] = useState(todo ? todo.isComplete : false);

  const classes = useStyles();
  return (
    <Drawer
      className={open ? classes.drawer : ''}
      variant="persistent"
      anchor="right"
      open={open}
      classes={{ paper: open ? classes.drawerPaper : '' }}
    >
      <div className={classes.drawerHeader}>
        <IconButton onClick={onClose}>
          <CancelIcon style={{ fontSize: '100px', color: '#1b5294', }} />
        </IconButton>
      </div>
      <div classname={classes.inputs}>
        <Paper component="form" className={classes.inputPaperTitle}>

          <InputBase
            placeholder="Title"
            onChange={(event) => {
              setNewTitle(event.target.value);
            }}
            multiline
            autoFocus
            fullWidth
            rowsMax={5}
            dir="ltr"
            className={classes.titleInput}
            defaultValue={newTitle}
          />
        </Paper>
        <Paper component="form" className={classes.inputPaperDescription}>

          <InputBase
            placeholder="Description"
            onChange={(event) => {
              setNewDescription(event.target.value);
            }}
            multiline
            autoFocus
            fullWidth
            rowsMax={5}
            dir="ltr"
            className={classes.descriptionInput}
            defaultValue={newDescription}
          />
        </Paper>
        <Button size='large' className={classes.submit}>SUBMIT</Button>
      </div>
    </Drawer>
  );
}

export default Todo;