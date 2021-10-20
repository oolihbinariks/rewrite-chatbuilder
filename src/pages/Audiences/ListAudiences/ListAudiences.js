import React, { useEffect } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar, IconButton, List, ListItem, ListItemSecondaryAction, makeStyles, Paper, Typography, } from '@material-ui/core';
import ListAudienceInfo from './ListAudienceInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getAudiencesAll } from '../../../store/selectors/audencesSelectors';
import { deleteAudienceSagaAction } from '../../../store/actions/AudiencesActions/audiencesActionCreators';

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

const ListAudiences = () => {
    const classes = useStyles();
    const dense = false;
    
    const audiences = useSelector(state => getAudiencesAll(state))
    const dispatch = useDispatch()
    useEffect(() => {
      // effect
    }, [audiences])

    const handlerDeleteAudience = (id) => {
      dispatch(deleteAudienceSagaAction(id))
    }
    if (!audiences?.length>0 || !audiences[0]?.id) {
      return(
        "Non audiences!!!!!!!!!!!!!!!!!!!!!!!!!"
      )
    }
    return (
        <div className={classes.demo}>
            <List dense={dense}>
            {audiences.map((audience) => 
                <Paper className={classes.listItem} elevation={5}>
                    <ListItem>
                        <ListAudienceInfo audience={audience} />
                        <ListItemSecondaryAction>
                            <div className={classes.actionInfo}>
                              <IconButton>
                                  <Avatar aria-label="recipe" className={classes.avatar}>
                                      {audience.users.length}
                                  </Avatar>
                              </IconButton>
                              <Typography variant='subtitle1' component='span'>users</Typography>
                            </div>
                            <IconButton onClick={()=>handlerDeleteAudience(audience.id)} edge="end" aria-label="delete">
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

export default ListAudiences
