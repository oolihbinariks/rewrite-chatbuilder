import { Checkbox, FormControlLabel, FormGroup, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react'
import { ButtonCustom } from '../../components/sharedComponents/Buttons/ButtonOutlined';
import { useHistory } from 'react-router-dom';
import { CREATE_CAMPAIGN_ROUTE, CREATE_CAMP_STEP_TWO_ROUTE } from '../../constants/routesUrl';
import { useDispatch, useSelector } from 'react-redux';
import { getPrepareCampaign } from '../../store/selectors/campaignsSelectors';
import { StyledInput } from '../../components/sharedComponents/Inputs/InputCustom';
import { format } from 'date-fns'
import { Stepper } from './Stepper';
import { setStepTypeAction } from '../../store/actions/CampaignsActions/campaignsActionCreators';

const useStyles = makeStyles((theme) => ({
    headerPage: {
      marginBottom:theme.spacing(3),
    },
    stepFinishPaper:{
        padding:theme.spacing(6)
    },
    divider:{
        marginBottom:theme.spacing(4)
    },
    finalCreateCamp:{
        "& h3":{
            fontFamily: 'proxima_novaregular',
            color: '#170d43',
            fontSize: '26px',
            margin: '0',
            textTransform: 'uppercase',
        }
    },
    headerFinishPage:{
        marginBottom:theme.spacing(1),
    },
    listAudience:{
        marginBottom:theme.spacing(2),
    }
  }));

const CreateCampStepFinish = () => {
    const classes = useStyles();
    let history = useHistory()
    const dispatch = useDispatch()

    //getting important data from Redux State
    const prepareCampaign = useSelector(state => getPrepareCampaign(state))
    
    const goBack = (toStep) => {
        dispatch(setStepTypeAction('stepTwoReverse'))
        history.push (toStep);
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
            <Stepper percent='99'/>
            <Paper className={classes.stepFinishPaper}>
                <div className={classes.finalCreateCamp}>
                    <Typography variant='h4' component='h3'>
                        Almost There!
                    </Typography>
                    <Typography variant='subtitle1' component='p'>
                        You are almost done, Please double check the details below
                    </Typography>
                    <Typography variant='subtitle1' component='p'>
                        Audience Size: {prepareCampaign?.listAudience?.users?.length || 0} Users
                    </Typography>
                    <Typography variant='subtitle1' component='p'>
                        Started Date:{(prepareCampaign?.datePick && format(prepareCampaign?.datePick, 'dd MMMM yyyy')) || history.push (CREATE_CAMPAIGN_ROUTE)}
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} md={6}>
                            <StyledInput 
                                label='Select Type of Category' 
                                type='text' 
                            />
                        </Grid>
                        <Grid item xs={12} md={6}>
                            {!prepareCampaign?.listAudience?.users &&  <StyledInput 
                                label='Select Type of Category' 
                                type='text' 
                            />}
                        </Grid>
                    </Grid>
                    {!prepareCampaign?.listAudience?.users && <FormControlLabel
                        value="top"
                        control={<Checkbox color='secondary' />}
                        label="Use on main page"
                        labelPlacement="end"
                    />}
                    <Typography variant='h4' component='h3'>
                        Dispatch methods
                    </Typography>
                    <FormGroup aria-label="position" row>
                        <FormControlLabel
                        value="top"
                        control={<Checkbox 
                            disabled = {!prepareCampaign?.listAudience?.users}
                            color='secondary' 
                        />}
                        label="Via SMS"
                        labelPlacement="end"
                        />
                        <FormControlLabel
                        value="start"
                        control={<Checkbox 
                            disabled = {!prepareCampaign?.listAudience?.users}
                            color='secondary' 
                        />}
                        label="Via Email (Mail merge)"
                        labelPlacement="end"
                        />
                        <FormControlLabel
                        value="bottom"
                        control={<Checkbox 
                            disabled = {!prepareCampaign?.listAudience?.users}
                            color='secondary' />}
                        label="Via WhatsApp"
                        labelPlacement="end"
                        />
                    </FormGroup>
                </div>
                <div>
                            <ButtonCustom onClick={()=>goBack(CREATE_CAMP_STEP_TWO_ROUTE)} varianttrig='contained' variant='contained' color='secondary'>Go Back</ButtonCustom>
                            <ButtonCustom varianttrig='contained' variant='contained' color='secondary'>Done</ButtonCustom>
                </div>
            </Paper>
        </div>
    )
}

export default CreateCampStepFinish
