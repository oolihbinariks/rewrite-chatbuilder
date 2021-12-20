import React, { useEffect, useState } from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar, IconButton, List, ListItem, ListItemSecondaryAction, makeStyles, Paper, Typography, } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import ListAudienceInfo from './ListAudienceInfo';
import { useDispatch, useSelector } from 'react-redux';
import { getAudiencesAll } from '../../../store/selectors/audencesSelectors';
import { deleteAudienceSagaAction, getAllAudiencesSagaAction } from '../../../store/actions/AudiencesActions/audiencesActionCreators';
import { getLoadingApp } from '../../../store/selectors/appSelectors';
import ConfirmDel from "../../../components/sharedComponents/ConfirmDel/ConfirmDel";
import FormModal from '../../../components/sharedComponents/Modals/FormModal';
import { Loader } from '../../../components/sharedComponents/Loder/Loader';

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
      '&.MuiAvatar-root':{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        borderRadius:'50%',
        border:`1px solid ${theme.palette.primary.main}`,
        '& :hover':{
          boxSizing: 'content-box',
          padding:'6px',
          backgroundColor: "white",
          borderRadius:'50%',
          border:`1px solid ${theme.palette.primary.main}`,
  
        },
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

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const ListAudiences = () => {
    const classes = useStyles();
    const dense = false;
    const listAudiences = useSelector(state => getAudiencesAll(state.audiences))
    const loadingApp = useSelector(state => getLoadingApp(state))
    const [audiences, setAudiences] = useState([]);
    const [open, setOpen] = useState(false);
    const [delAudId, setDelAudId] = useState(null);
    const delTrigger =(id)=>{
      setDelAudId(id)
      setOpen(true)
    }
    const handleClose = () => {
      setOpen(false);
    };
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(getAllAudiencesSagaAction())
    }, [])
    useEffect(() => {
      setAudiences(listAudiences)
    }, [listAudiences])
    const handlerDeleteAudience = () => {
      dispatch(deleteAudienceSagaAction(delAudId))
      handleClose()
    }
    return (
      <div className={classes.demo}>
            {loadingApp &&
              <Loader open={loadingApp}/>
            }
            <List dense={dense}>
            {(!audiences?.length>0 || !audiences[0]?.id) &&
              <Alert severity="info">Non audiences!!!!!!!!!!!!!!!!!!!!!!!!!</Alert>
            }
            {audiences && audiences.map((audience) => 
                <Paper key={audience.id} className={classes.listItem} elevation={5}>
                    <ListItem>
                        <ListAudienceInfo audience={audience} />
                        <ListItemSecondaryAction>
                            <div className={classes.actionInfo}>
                              <IconButton>
                                  <Avatar aria-label="recipe" className={classes.avatar}>
                                      {audience?.users?.length || 0}
                                  </Avatar>
                              </IconButton>
                              <Typography variant='subtitle1' component='span'>users</Typography>
                            </div>
                            <IconButton onClick={()=>delTrigger(audience.id)} edge="end" aria-label="delete">
                                <Avatar aria-label="recipe" className={classes.avatarPrimary}>
                                    <DeleteIcon />
                                </Avatar>
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </Paper>,
            )}
            </List>
          <FormModal open={open} onClose={handleClose}>
            <ConfirmDel onClose={handleClose} deleteElemHandler={handlerDeleteAudience}/>
          </FormModal>
    </div>
    )
}

export default ListAudiences
