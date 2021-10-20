import React from 'react'
import { ButtonCustom } from '../../components/sharedComponents/Buttons/ButtonOutlined'
import {  makeStyles, Typography } from '@material-ui/core'
import ListAudiences from './ListAudiences/ListAudiences'
import FormModal from '../../components/sharedComponents/Modals/FormModal';
import FormAddAudience from './FormAddAudience';

const useStyles = makeStyles((theme) => ({
  headerPage: {
    marginBottom:theme.spacing(3),
  },
  wrapperButtons: {
    display:'flex',
    justifyContent:'flex-end',
    [theme.breakpoints.only('xs')]:{
      flexDirection:'column',
    }
  },
  spacingButtons:{
    [theme.breakpoints.up('sm')]:{
      marginRight:theme.spacing(1),
    },
    [theme.breakpoints.only('xs')]:{
      marginBottom:theme.spacing(1),
    }
  }
}));

const Audience = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
    return (
        <div className = "wrapper">
            <div className={classes.headerPage}>
              <Typography variant='h4' component='h2'>
                Audience Set
              </Typography>
              <Typography variant='subtitle1' component='p'>
                View and manage your audience set and ongoing campaigns
              </Typography>
              <div className={classes.wrapperButtons}>
                <ButtonCustom onClick={handleClickOpen} variant='contained' color='secondary'>Create Audience Set</ButtonCustom>
              </div>
            </div>
            <FormModal open={open} onClose={handleClose}>
              <FormAddAudience  onClose={handleClose}/> 
            </FormModal>
            <ListAudiences />
        </div>
    )
}
export default Audience