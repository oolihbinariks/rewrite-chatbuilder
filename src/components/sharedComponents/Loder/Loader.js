import { CircularProgress, Dialog, makeStyles } from '@material-ui/core';
import React from 'react';
const useStyles = makeStyles((theme) => ({
    root:{
        '& .MuiDialog-paper':{
            padding:'0',
            margin:'0',
            borderRadius:'50%',
            backgroundColor:'inherit',
            lineHeight:'.1em',
        }
    },
    progress:{
        textAlign: 'center', 
        width:'100%', 
        height:'100%', 
        overflow:'hidden', 
        padding:'0', 
        margin:'0',  
    }
}))
export const Loader = ({open}) => {
    const classes = useStyles()
    return (
        <Dialog className={classes.root} open={open} aria-labelledby="form-dialog-title">
            <div className={classes.progress}>
                <CircularProgress color="primary" />
            </div>
        </Dialog>
            
    )
}