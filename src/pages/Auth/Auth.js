import React from 'react'
import { Grid, Typography } from '@material-ui/core'
import mobImgPng from '../../assets/images/mob-img.png'
import bgMob from '../../assets/images/bgmob.png'
import { makeStyles } from '@material-ui/core'
import FormAuth from './FormAuth'

const useStyles = makeStyles((theme) => ({
    bgMobWrap:{
        display:"flex",
        justifyContent:'center',
        position: "relative",
        "&:before":{
            content: `''`,
            width:'880px',
            height:'720px',
            display:'block',
            top:"-208px",
            right:"0",
            backgroundSize:'cover',
            background:`no-repeat url(${bgMob})`,
            position: "absolute",
            zIndex:"2",
            overflow:'hidden',
        },
    },
    txWrap:{
        display:"flex",
        justifyContent:'center',
        position: "relative",
    },
    bgMob:{
        position:'relative',
        zIndex:'5',
        maxWidth:'100%',
    },
    chatBuildDescrip:{
        padding: '3% 15%',
    },
    section:{
        padding:"10% 0 0 0",
    },
}))

const Auth = () => {
    const classes = useStyles()
    return (
        <>
                <Grid container className={classes.section}>
                    <Grid item xs={ 12} sm={12} md={6} lg={6} xl={6}>
                        <div className={classes.txWrap}>
                            <div className={classes.chatBuildDescrip}>
                                <Typography variant='h3'>
                                    Login to your account
                                </Typography>
                                <FormAuth />
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.bgMobWrap}>
                        <div>
                            <img className={`${classes.bgMob}`} src={mobImgPng} alt='mob-img' />
                        </div>
                    </Grid>
                </Grid>
        </>
    )
}
export default Auth
