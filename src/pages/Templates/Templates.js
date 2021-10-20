import React from 'react'
import {  makeStyles, Typography } from '@material-ui/core'
import ListCategories from './ListCategories/ListCategories';

const useStyles = makeStyles((theme) => ({
  headerPage: {
    marginBottom:theme.spacing(3),
  },
}));

const Templates = () => {
    const classes = useStyles();
  
    return (
        <div className = "wrapper">
            <div className={classes.headerPage}>
              <Typography variant='h4' component='h2'>
                Choose Category
              </Typography>
              <Typography variant='subtitle1' component='p'>
                Pick from the below or create a new campaign category
              </Typography>
            </div>
            
            <ListCategories />
        </div>
    )
}
export default Templates