import { Avatar, Chip, IconButton, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import { Link } from 'react-router-dom';
import { AUDIENCE_ROUTE } from '../../../constants/routesUrl';
// const useStyles = makeStyles((theme) => ({
//     avatar: {
//         backgroundColor: theme.palette.secondary.main,
//         color: theme.palette.text.primary,
//     },
//     actionInfo: {
//         [theme.breakpoints.down('lg')]:{
//             display:'flex',
//         },
//         [theme.breakpoints.up('md')]:{
//             display:'none',
//         },
//     },
//     audienceUsersCount:{
//         [theme.breakpoints.only('xs')]:{
//             display:'flex',
//             flexDirection:'column',
//         },
//         display:'flex',
//         flexDirection:'row',
//     },
// }))
const ListUserInfo = ({user}) => {
    // const classes = useStyles();
    return (
        <div>
            <div>
                <Typography variant='h6' component='h6'>{user.fullName}</Typography>
                <Typography variant='subtitle1'>{user.email}</Typography>
                <Typography variant='body1' >{user.phone}</Typography>
            </div>
        </div>
    )
}

export default ListUserInfo
