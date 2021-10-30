import { Grid, Paper, Typography } from '@material-ui/core'
import React from 'react'
import mobImgPng from '../../assets/images/mob-img.png'
import footerMobImg from '../../assets/images/footer-mob-img.png'
import footerBgImg from '../../assets/images/footer-bg-img.png'
import bgMob from '../../assets/images/bgmob.png'
import icon1 from '../../assets/images/icon1.png'
import icon2 from '../../assets/images/icon2.png'
import icon3 from '../../assets/images/icon3.png'
import icon4 from '../../assets/images/icon4.png'
import icon5 from '../../assets/images/icon5.png'
import upArrow from '../../assets/images/uparrow.png'
import CardMediaItem from './CardMediaItem'
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    bgMobWrap:{
        display:"flex",
        justifyContent:'center',
        position: "relative",
        // float: 'right', 
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
            // maxWidth:'100%',
        },
    },
    txWrap:{
        display:"flex",
        justifyContent:'center',
        position: "relative",
    },
    footerMobWrap:{
        position: "relative",
        "&:before":{
            content: `''`,
            width:'510px',
            height:'100%',
            display:'block',
            top:"50px",
            left:"0",
            backgroundSize: 'contain',
            background:`no-repeat url(${footerBgImg})`,
            position: "absolute",
            zIndex:"2",
            // maxWidth:'100%',
        },
    },
    footerMobImg:{
        position:'relative',
        zIndex:'5',
        maxWidth:'100%',
    },
    bgMob:{
        position:'relative',
        zIndex:'5',
        maxWidth:'100%',
    },
    chatBuildDescrip:{
        // width:'70%',
        padding: '3% 15%',
    },
    section:{
        padding:"10% 0 0 0",
    },
    section2:{
        padding:"95px 0",
        display:'inherit',
        backgroundColor: '#000',
        // position: 'relative',
        // zIndex:'',
    },
    imgCover:{
        objectFit: "fill",
    },
    
}))
const cardImgArr = [
    {
        cardImageSrc: upArrow,
        cardHead: 'Improve your Direct Sales',
        cardDescription: 'Upload a database and then allow ChatBuilder to automate the engagement with potential customers with very little effort. Observe and analyse dashboards and data to refine your sales approach.',
    },
    {
        cardImageSrc: icon1,
        cardHead: 'Nurture your leads',
        cardDescription: 'ChatBuilder can help you to re-engage a lapsed or stagnant database. Nurture your potential customers through email, SMS or chat.',
    },
    {
        cardImageSrc: icon5,
        cardHead: 'Optimise your Customer Service',
        cardDescription: 'As calls enter your call centre, use voice to pre-qualify the type of enquiry and direct to either customer service agents or deliver an automated chatbot response.',
    },
    {
        cardImageSrc: icon3,
        cardHead: 'Deliver Information',
        cardDescription: 'Easily send customers information; maps and locations, sales kits, pricing and application documents.',
    },
    {
        cardImageSrc: icon4,
        cardHead: 'Schedule and diarise',
        cardDescription: 'Allow your potential customers to easily set up appointments e.g with a Doctor or Lawyer, scheduling the appointment in both theirs and the professionals diary with ease.',
    },
    {
        cardImageSrc: icon2,
        cardHead: 'Get real-time feedback from your customers',
        cardDescription: '    Use ChatBuilder surveys and questionnaires to reach out for real time consumer data and insight delivered with ease. Results are made available in real time allowing you to take fast decisions on any aspect of your business decision',
    },
    

]
const Home = () => {
    const classes = useStyles()
    return (
        <>
            <Paper>
                <Grid container className={classes.section}>
                    <Grid item xs={ 12} sm={12} md={6} lg={6} xl={6}>
                        <div className={classes.txWrap}>
                            <div className={classes.chatBuildDescrip}>
                                <Typography variant='h3'>
                                    Building relationships
                                    through meaningful
                                    conversations
                                </Typography>
                                <Typography variant='body1'>
                                    ChatBuilder is a chatbot platform that generates
                                    and nurtures quality leads for your business.
                                    ChatBuilder is a chatbot platform that generates
                                    and nurtures quality leads for your business.
                                </Typography>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={6} lg={6} xl={6} className={classes.bgMobWrap}>
                        <div>
                            <img className={`${classes.bgMob}`} src={mobImgPng} alt='mob-img' />
                        </div>
                    </Grid>
                </Grid>
            </Paper>
            <div className={`${classes.section2} ${classes.footerMobWrap}`}>
                <Grid container>
                    <Grid item xs={ 12} sm={12} md={12} lg={6} xl={6}>
                        <div>
                            <img className={`${classes.footerMobImg}`} src={footerMobImg} alt='mob-img' />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={6} xl={6}>
                        <div className={classes.txWrap}>
                            <Grid container>
                                {
                                    cardImgArr.map((card) => (
                                        <Grid key={`${card.cardHead}_${card.cardImageSrc}`} item xs={12} sm={12} md={6} lg={6} xl={6}>
                                            <CardMediaItem cardHead ={card.cardHead} cardDescription={card.cardDescription} cardImageSrc={card.cardImageSrc} />
                                        </Grid>
                                    ))
                                }
                            </Grid>
                        </div>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}
export default Home