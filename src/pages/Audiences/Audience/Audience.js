import { makeStyles, Typography } from '@material-ui/core';
import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import CustomizedBreadcrumbs from '../../../components/sharedComponents/Breadcrumbs/Breadcrumbs';
import { ButtonCustom } from '../../../components/sharedComponents/Buttons/ButtonOutlined';
import { getAudienceById } from '../../../store/selectors/audencesSelectors';
import ListUsers from './ListUsers';

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

const Audience = ({history}) => {
    const classes = useStyles();
    let { audience: audienceId } = useParams();
    const audience = useSelector(state => getAudienceById(state.audiences, audienceId))
    const handleClickAdd = (event) => {
        event.preventDefault();
        history.push(`${audienceId}/add`)
    };
    return (
        <div className = "wrapper">
            <div className={classes.headerPage}>
                <CustomizedBreadcrumbs />
                <div className={classes.wrapperButtons}>
                    <ButtonCustom className={classes.spacingButtons} onClick = {handleClickAdd} varianttrig='contained' variant='contained' color='secondary'>Add users</ButtonCustom>
                    <ButtonCustom onClick = {handleClickAdd} varianttrig='contained' variant='contained' color='secondary'>Download excel</ButtonCustom>
                </div>
            </div>
            <div>
              <Typography align='center' variant='h4'>Found {(audience?.users?.length && audience?.users?.length) || 0} users</Typography>
              <ListUsers users ={audience?.users} />
            </div>
        </div>
            
    )
}

export default Audience
