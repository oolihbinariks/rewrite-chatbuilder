import { IconButton, makeStyles } from '@material-ui/core'
import HighlightOffIcon from '@material-ui/icons/HighlightOffOutlined'
import React from 'react'
const useStyles = makeStyles((theme)=> ({
    iconRow:{
        position:'absolute',
        top:'-0.2%',
        right:0,
        [theme.breakpoints.down('sm')]:{
            top:'-0.5%',
            right:"-10px",
        },
    },
    iconDel:{
        color:theme.palette.primary.main,
        background:"#fff",
        borderRadius:'50%',
        "&:hover":{
            color:theme.palette.primary.main,
            background:"#fff",
            border:"none",
            borderRadius:'50%',
        }
    },
}))
const IconDelete = ({handlerDeleteRow, delId}) => {
    const classes = useStyles()
    return (
        <IconButton className={classes.iconRow}>
            <HighlightOffIcon onClick={()=>handlerDeleteRow(delId)} className={classes.iconDel} />
        </IconButton>
    )
}

export default IconDelete



