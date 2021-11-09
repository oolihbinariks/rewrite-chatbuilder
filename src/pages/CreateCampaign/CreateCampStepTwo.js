import React, { useState } from 'react'

//import share components
import { ButtonCustom } from '../../components/sharedComponents/Buttons/ButtonOutlined';

//import components and feature from material ui
import { Chip, Divider, Grid, Input, makeStyles, Paper, Typography } from '@material-ui/core';

//import features and hooks for react-redux state management
import { useDispatch, useSelector } from 'react-redux';


//import selectors
import { getAudiencesAll } from '../../store/selectors/audencesSelectors';
import { getPrepareCampaign } from '../../store/selectors/campaignsSelectors';

//import actionCreators
import { savePrepareCampaignSagaAction } from '../../store/actions/CampaignsActions/campaignsActionCreators';

//import constants
import { CREATE_CAMPAIGN_ADD_USERS_ROUTE, CREATE_CAMPAIGN_ROUTE, CREATE_CAMP_FINISH_ROUTE } from '../../constants/routesUrl';

//import other additional libraries
import { useHistory } from 'react-router-dom';
import { IconTick } from './IconTick';


const useStyles = makeStyles((theme) => ({
    headerPage: {
      marginBottom:theme.spacing(3),
    },
    stepThreePaper:{
        padding:theme.spacing(6)
    },
    divider:{
        marginBottom:theme.spacing(3)
    },
    chipAudience:{
        color: '#000',
        backgroundColor: '#c2d2f0',
        marginRight:'20px',
        '&:hover':{
            color: '#c2d2f0',
            backgroundColor: '#170d43',
        },
        '&:focus':{
            color: '#c2d2f0',
            backgroundColor: '#170d43',
        }

    },
    chipAudienceChecked:{
        color: '#c2d2f0',
        backgroundColor: '#170d43',
        marginRight:'20px',
        '&:hover':{
            color: '#c2d2f0',
            backgroundColor: '#170d43',
        },
        '&:focus':{
            color: '#c2d2f0',
            backgroundColor: '#170d43',
        }
    },
    headerListAudiences:{
        marginBottom:theme.spacing(1),
    },
    listAudience:{
        marginBottom:theme.spacing(2),
    }, 
    inputFile:{
        "&::after":{
            display:'none'
        },
    },
    addUsersBtnBlock:{
        display:'flex',
        justifyContent:'center' ,
        alignItems:'center',
        "&>span":{
            marginRight:theme.spacing(1),
        }
    },
    groupOption:{
        marginBottom:theme.spacing(1)
    }
  }));


const CreateCampStep2 = () => {
    const classes = useStyles();
    let history = useHistory()
    const dispatch = useDispatch()

    //getting important data from Redux State
    const listAudience = useSelector(state => getAudiencesAll(state.audiences))
    console.log("listAudience", listAudience);
    const prepareCampaign = useSelector(state => getPrepareCampaign(state))
    
    // Set state
    const [pickAudience, setPickAudience] = useState((prepareCampaign?.listAudience))
    const [uploadErrors, setUploadErrors] = useState({})
    const [fileValue, setFileValue] = useState('')
    const fileHandler = (e) =>{
        const file = e.target.files[0]
        console.log("Handler file", file);
        console.log("Handler file type", file?.type);
        if (!file) {
            setFileValue('')
            return(setUploadErrors({}))
        }
        if ((file && (file?.type === 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet')) || (file && (file?.type ==='application/vnd.ms-excel'))) {
            setFileValue('')
            setUploadErrors({})
        }else{
            setFileValue('')
            return(setUploadErrors(
                (prevState)=>({...prevState,file:{message:'We only support xlsx'}})
            ))
        }

        setFileValue(file)
    }

    const chipAudiencHandler = (audience) => {
        if (pickAudience?.id === audience.id) {
            setUploadErrors({})
            setPickAudience(null)
        } else {
            setUploadErrors({})
            setPickAudience(audience)
        }
    }
    const saveData = (toUrl) => {
        if (pickAudience) {
            const newCampaign = {
                listAudience: pickAudience
            }
            dispatch(savePrepareCampaignSagaAction(newCampaign))
            setPickAudience(null)
            history.push (toUrl);
        }

        if (!fileValue) {
            return(setUploadErrors(
                (prevState)=>({...prevState,file:{message:'You need to provide file with set of users'}})
            ))
        }else{
            if (!uploadErrors) {
                const newCampaign = {
                    fileAudience: fileValue
                }
                dispatch(savePrepareCampaignSagaAction(newCampaign))
            }
            setUploadErrors({})
            setFileValue('')
            history.push(toUrl);
        }
    };

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
            <Paper className={classes.stepThreePaper}>
                <Typography className={classes.headerListAudiences} variant='h5' component='h2'>
                    Available audience sets (Select Existing)
                </Typography>
                <div className={classes.listAudience}>
                    {
                        (listAudience && listAudience.length > 0) &&
                            listAudience.map((audience) => {
                                if (pickAudience?.id === audience.id) {
                                    return(
                                        <Chip
                                            key={audience.id}
                                            onClick={()=>chipAudiencHandler(audience)}
                                            className={`${classes.chipAudienceChecked}`}
                                            color="primary" 
                                            label={`${audience.name} (${audience.users.length} users)`} 
                                            icon={<IconTick />} 
                                            disabled={!!fileValue}
                                        />
                                    )
                                }else{
                                    return(
                                        <Chip
                                            key={audience.id}
                                            onClick={()=>chipAudiencHandler(audience)}
                                            className={`${classes.chipAudience}`}
                                            color="primary" 
                                            label={`${audience.name} (${audience.users.length} users)`} 
                                            disabled={!!fileValue}
                                        />
                                    )
                                }
                            })
                    }
                </div>
                <Divider className={classes.divider} />
                    <Grid className={classes.groupOption} container justifyContent='space-between' alignItems='center'>
                            <div>
                                <input 
                                    defaultValue={prepareCampaign.fileAudience} 
                                    disabled={!!pickAudience} 
                                    className={classes.inputFile} 
                                    type='file' 
                                    name='file' 
                                    onChange={fileHandler} 
                                />          
                                {
                                    uploadErrors?.file?.message && 
                                        <div style={{color:'red', fontSize:'0.875rem'}}>
                                            {uploadErrors?.file?.message}
                                        </div>
                                }
                            </div>
                        
                            <Typography variant='h6' component='span'>or</Typography>
                        
                            <div className={classes.addUsersBtnBlock}>
                                <Typography variant='h5' component='span'>Add users(Manually)</Typography>
                                <ButtonCustom onClick={()=>history.push(history.push (CREATE_CAMPAIGN_ADD_USERS_ROUTE))} style={{color:"#000"}} variant='outlined'>Add user</ButtonCustom>
                            </div>
                    </Grid>
                    <Divider className={classes.divider} />
                    <div>
                        <ButtonCustom style={{padding:'8px 80px'}} onClick={()=>saveData(CREATE_CAMPAIGN_ROUTE)} variant='contained' color='secondary'>Back</ButtonCustom>
                        <ButtonCustom style={{padding:'8px 80px'}} onClick={()=>saveData(CREATE_CAMP_FINISH_ROUTE)} variant='contained' color='secondary'>Next</ButtonCustom>
                    </div>
            </Paper>
        </div>
    )
}

export default CreateCampStep2
