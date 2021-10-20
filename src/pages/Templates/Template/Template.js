import React from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import ListTemplates from './ListTemplates/ListTemplates';
import BreadcrumbsTemplates from '../../../components/sharedComponents/Breadcrumbs/BreadcrumbsTemplates'
const useStyles = makeStyles((theme) => ({
  headerPage: {
    marginBottom:theme.spacing(3),
  },
}));

const Template = () => {
    const classes = useStyles();
  
    return (
      <div className = "wrapper">
          <div className={classes.headerPage}>
            <BreadcrumbsTemplates />
            <Typography variant='subtitle1' component='p'>
              Pick from the below or create a new campaign template
            </Typography>
          </div>
          
          <ListTemplates />
      </div>
      )
}
export default Template