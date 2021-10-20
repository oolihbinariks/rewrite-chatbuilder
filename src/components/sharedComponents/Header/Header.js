import React from 'react'
import { HOME_ROUTE, LOGIN_ROUTE } from '../../../constants/routesUrl';
import { Link, useHistory } from 'react-router-dom';
import { getAuthToken } from '../../../store/selectors/authSelectors';
import { useSelector } from 'react-redux';
import { ButtonCustom } from '../Buttons/ButtonOutlined';
import Menu from './Menu';
import Logo from '../../../assets/images/chatbuilder_logo.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { makeStyles } from '@material-ui/core';
// import PropTypes from 'prop-types'
const useStyle = makeStyles({
    appBar:{
        backgroundColor: "black",
    },
    logo:{
        maxWidth: "200px",
    },
})
const Header = () => {
    const classes = useStyle()
    const isAuth = useSelector(state => getAuthToken(state))
    let history = useHistory();
    function logout() {
        console.log("logout");
        handleClick(HOME_ROUTE)
    }
    function handleClick(to) {
        console.log(`historu=y to ${to}`);
        history.push(to);
    }
    return (
        <AppBar className={`${classes.appBar}`}>
            <Toolbar className='wrapper' variant="dense">
                <Link to={HOME_ROUTE}>
                    <IconButton
                    size='medium'
                    edge="start"
                    color="inherit"
                    aria-label="logo"
                    >
                        <img src={Logo} alt = 'logo' className={classes.logo}/>
                    </IconButton>
                </Link>
                <Menu />
                <IconButton edge="start" color="inherit" aria-label="menu">
                    <MenuIcon />
                </IconButton> 
                <ButtonCustom onClick={() => {
                    if (!isAuth) {
                        handleClick(LOGIN_ROUTE)    
                    } else {
                        logout()
                    }    
                    }}
                        variant='outlined'>
                        {(!isAuth && "Login") || ("Logout")}
                </ButtonCustom>
            </Toolbar>
        </AppBar>
    )
}

// Header.propTypes = {

// }

export default Header
