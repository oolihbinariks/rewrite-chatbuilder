import { Avatar, Chip, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles((theme) => ({
    wrapperChips:{
        [theme.breakpoints.down('sm')]:{
            display:'flex',
            flexDirection:'column',
        },
        [theme.breakpoints.up('sm')]:{
            display:'flex',
            flexDirection:'row',
        },
    },
    chipSpacing:{
        [theme.breakpoints.only('xs')]:{
            marginBottom: theme.spacing(1),
        },
        [theme.breakpoints.up('xs')]:{
            marginRight: theme.spacing(1),
        },
    },
    avatar: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.text.primary,
    },
    actionInfo: {
        [theme.breakpoints.down('lg')]:{
            display:'flex',
        },
        [theme.breakpoints.up('md')]:{
            display:'none',
        },
    },
    campaignProgress:{
        [theme.breakpoints.only('xs')]:{
            display:'flex',
            flexDirection:'column',
        },
        display:'flex',
        flexDirection:'row',
    },
}))
const ListCampaignInfo = () => {
    const classes = useStyles();
    return (
        <div>
            <div>
                <Typography variant='h6' component='h6'>Single-line item</Typography>
                <Typography variant='subtitle2' component='h6' >September 03 2021</Typography>
                <div className={classes.wrapperChips}>
                    <Chip className={classes.chipSpacing} size='small' label="Active" color='primary' />
                    <Chip className={classes.chipSpacing} size='small' label="Promotions Category" />
                    <Chip className={classes.chipSpacing} size='small' label="Category Name" color='secondary' />
                </div>
            </div>
            <div className={classes.actionInfo}>
                <div className={classes.campaignProgress}>
                    <div>
                        <Typography variant='subtitle1' component='span'>Open Rate</Typography>
                        <IconButton>
                            <Avatar aria-label="recipe" >
                                50%
                            </Avatar>
                        </IconButton>
                    </div>
                    <div>
                        <Typography variant='subtitle1' component='span'>Completion</Typography>
                        <IconButton>
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                50%
                            </Avatar>
                        </IconButton>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListCampaignInfo
