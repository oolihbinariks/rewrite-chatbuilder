import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar, IconButton, List, ListItem, ListItemSecondaryAction, makeStyles, Paper, Typography, } from '@material-ui/core';
import ListCampaignInfo from './ListCampaignInfo';
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


function generate(element) {
    return [0, 1, 2].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }
const ListCampaigns = () => {
    const classes = useStyles();
    const dense = false;
    return (
        <div className={classes.demo}>
            <List dense={dense}>
            {generate(
                <Paper className={classes.listItem} elevation={5}>
                    <ListItem>
                        <ListCampaignInfo />
                        
                        <ListItemSecondaryAction>
                            <div className={classes.actionInfo}>
                              <Typography variant='button' component='span'>Open Rate</Typography>
                              <IconButton>
                                  <Avatar aria-label="recipe" >
                                      50%
                                  </Avatar>
                              </IconButton>
                              <Typography variant='button' component='span'>Completion</Typography>
                              <IconButton>
                                  <Avatar aria-label="recipe" className={classes.avatar}>
                                      50%
                                  </Avatar>
                              </IconButton>
                            </div>
                            <IconButton edge="end" aria-label="delete">
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

export default ListCampaigns
