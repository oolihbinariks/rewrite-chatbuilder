import React from 'react'
import { makeStyles } from '@material-ui/core'
import IconTic from '../../assets/images/ico-tick.png'
const useStyles = makeStyles((theme) => ({
    iconfade:{
        marginLeft:'5px',
        height:'25px', 
        width:'25px',
        transition: '2s all ease',
    }
}))
export const IconTick = () => {
    const classes = useStyles();
    return(<img className={classes.iconfade} src={IconTic} alt='icon-tick' />)
}