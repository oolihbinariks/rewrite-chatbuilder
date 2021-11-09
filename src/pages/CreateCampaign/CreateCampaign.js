import React from 'react'
import {  makeStyles, Typography } from '@material-ui/core'
import FormCreateCampaign from './FormCreateCampaign';

const useStyles = makeStyles((theme) => ({
  headerPage: {
    marginBottom:theme.spacing(3),
  }
}));

const CreateCampaign = () => {
    const classes = useStyles();

    return (
        <div className = "wrapper">
            <div className={classes.headerPage}>
              <Typography variant='h4' component='h2'>
              Welcome Admin
              </Typography>
              <Typography variant='subtitle1' component='p'>
              Have your campaign up and running in just a few easy steps.
              </Typography>
            </div>
            <FormCreateCampaign />
        </div>
    )
}
export default CreateCampaign