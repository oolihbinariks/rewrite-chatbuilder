import { Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react'
import { ButtonCustom } from '../../components/sharedComponents/Buttons/ButtonOutlined';
import IconDatabase from '../../assets/images/icon-database.png'
import IconPaperplane from '../../assets/images/icon-paperplane.png'
import { useHistory } from 'react-router-dom';
import { CREATE_CAMPAIGN_ROUTE, CREATE_CAMP_FINISH_ROUTE, CREATE_CAMP_STEP_THREE_ROUTE } from '../../constants/routesUrl';
const useStyles = makeStyles((theme) => ({
    headerPage: {
      marginBottom:theme.spacing(3),
    },
    step2Paper:{
        padding:theme.spacing(6)
    },
    goTo:{
        background: '#f2f2f2',
        border: '2px solid #dcdcdc',
        color: '#170d43',
        float: 'right',
        width: '100%',
        fontSize: '18px',
        padding: '30px',
        borderRadius: '8px',
        transition: '0.4s all ease',
        '-webkit-transition': '0.4s all ease',
        '-moz-transition': '0.4s all ease',
        '&:hover':{
            background: '#dcdcdc',
            borderColor: '#170d43',
            cursor: 'pointer',
        },
    },
    iconDatabase:{
        display:'block',
        paddingLeft:'12%',
        position:'relative',
        '&:before':{
            content:`''`,
            position:'absolute',
            width:'10%',
            height:'100%',

            background:`url('${IconDatabase}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            top:'0',
            left:'0',

        },
        '& strong':{
            display: 'block',
            fontWeight: 'normal',
            fontFamily: 'proxima_novaregular',
            fontSize: '28px',
            margin: '0',
            textTransform: 'uppercase',
        }
    },
    iconPaperplane:{
        display:'block',
        paddingLeft:'12%',
        position:'relative',
        '&:before':{
            content:`''`,
            position:'absolute',
            width:'10%',
            height:'100%',

            background:`url('${IconPaperplane}')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: '100% 100%',
            top:'0',
            left:'0',

        },
        '& strong':{
            display: 'block',
            fontWeight: 'normal',
            fontFamily: 'proxima_novaregular',
            fontSize: '28px',
            margin: '0',
            textTransform: 'uppercase',
        }
    },
  }));

const CreateCampStep2 = () => {
    const classes = useStyles();
    let history = useHistory()
    const toUrl = (url) =>{
        history.push(url);
    }
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
            <Paper className={classes.step2Paper}>
                <Grid container spacing={4}>
                    <Grid item xs={12} md={6}>
                        <div onClick={()=>toUrl(CREATE_CAMP_STEP_THREE_ROUTE)} className={classes.goTo}>
                            <span className={classes.iconDatabase}>
                                <strong>Direct</strong>
                                Select this option if already have a database/audience
                            </span>
                        </div>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <div onClick={()=>toUrl(CREATE_CAMP_FINISH_ROUTE)} className={classes.goTo}>
                            <span className={classes.iconPaperplane}>    
                                <strong>Open</strong>
                                Click here if you do not have a target Audience to dispatch the Campaign to
                            </span>
                        </div>
                    </Grid>
                    <Grid item container>
                        <div>
                            <ButtonCustom onClick={()=>toUrl(CREATE_CAMPAIGN_ROUTE)} varianttrig='contained' variant='contained' color='secondary'>Back</ButtonCustom>
                            <ButtonCustom onClick={()=>toUrl(CREATE_CAMP_STEP_THREE_ROUTE)} varianttrig='contained' variant='contained' color='secondary'>Next</ButtonCustom>
                        </div>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    )
}

export default CreateCampStep2
