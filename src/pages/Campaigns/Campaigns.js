import {  makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { ButtonCustom } from '../../components/sharedComponents/Buttons/ButtonOutlined'
import SearchCampaigns from './SearchCampaigns'
import ListCampaigns from './ListCampaigns/ListCampaigns'
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
const Campaigns = () => { 
  const classes = useStyles();
    return (
        <div className = "wrapper">
            <div className={classes.headerPage}>
              <Typography variant='h4' component='h2'>
                  Campaigns
              </Typography>
              <Typography variant='subtitle1' component='p'>
                  View and manage your account and ongoing campaigns
              </Typography>
              <div className={classes.wrapperButtons}>
                <ButtonCustom className={`${classes.spacingButtons} buttonContained`} variant='contained' color='secondary'>Generate Reports</ButtonCustom>
                <ButtonCustom variant='contained' color='secondary'>Create Campaign</ButtonCustom>
              </div>
            </div>
            <SearchCampaigns />
            <ListCampaigns />
        </div>
    )
}
export default Campaigns