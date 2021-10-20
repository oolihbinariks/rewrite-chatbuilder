import React, { useEffect } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar, IconButton, List, ListItem, ListItemSecondaryAction, makeStyles, Paper, Typography, } from '@material-ui/core';
import ListUserInfo from './ListUserInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getAudiencesAll } from '../../../store/selectors/audencesSelectors';
import { deleteAudienceSagaAction, deleteUserAudienceSagaAction } from '../../../store/actions/AudiencesActions/audiencesActionCreators';
import { useParams } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    listItem:{
      marginBottom:theme.spacing(1),
    },
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.primary,
    },
    avatarPrimary: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.text.primary,
      '& :hover':{
        backgroundColor: "white",
      },
    },
    actionInfo: {
      [theme.breakpoints.down('lg')]:{
        display:'none',
      },
      [theme.breakpoints.up('md')]:{
        display:'inline-block',
      },
    },
  }));

const ListUsers = ({users}) => {
    const classes = useStyles();
    const dense = false;
    let { audience: audienceId } = useParams();
    
    const dispatch = useDispatch()

    const handlerDeleteUser = (id) => {
      dispatch(deleteUserAudienceSagaAction({audienceId: audienceId, userId: id}))
    }
    if (!users || users.length <= 0) {
      return "No users!!!!!!!!!!!!"
    }
    return (
        <div className={classes.demo}>
            <List dense={dense}>
            {users.map((user) => 
                <Paper className={classes.listItem} elevation={5}>
                    <ListItem>
                        <ListUserInfo user={user} />
                        <ListItemSecondaryAction>
                            <IconButton onClick={()=>handlerDeleteUser(user.id)} edge="end" aria-label="delete">
                                <Avatar aria-label="recipe" className={classes.avatarPrimary}>
                                    <DeleteIcon />
                                </Avatar>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Paper>,
            )}
            </List>
    </div>
    )
}

export default ListUsers
