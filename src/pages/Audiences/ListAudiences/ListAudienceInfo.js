import { Avatar, Chip, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import { AUDIENCE_ROUTE } from '../../../constants/routesUrl';
const useStyles = makeStyles((theme) => ({
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
    audienceUsersCount:{
        [theme.breakpoints.only('xs')]:{
            display:'flex',
            flexDirection:'column',
        },
        display:'flex',
        flexDirection:'row',
    },
}))
const ListAudienceInfo = ({audience}) => {
    const classes = useStyles();
    return (
        <div>
            <div>
                <Link className={'nonAnchor'} to={`audience/${audience.id}`}>
                    <Typography variant='h6' component='h6'>{audience.name}</Typography>
                </Link>
                <Typography variant='subtitle2' component='h6' >September 03 2021</Typography>
            </div>
            <div className={classes.actionInfo}>
                <div className={classes.audienceUsersCount}>
                    <div>
                        <IconButton>
                            <Avatar aria-label="recipe" className={classes.avatar}>
                                2
                            </Avatar>
                        </IconButton>
                        <Typography variant='subtitle1' component='span'>users</Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListAudienceInfo
