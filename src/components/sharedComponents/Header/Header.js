import React from 'react'
import { HOME_ROUTE, LOGIN_ROUTE } from '../../../constants/routesUrl';
import { Link, useHistory } from 'react-router-dom';
import { getAuthToken } from '../../../store/selectors/authSelectors';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonCustom } from '../Buttons/ButtonOutlined';
import Menu from './Menu';
import Logo from '../../../assets/images/chatbuilder_logo.png';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClearIcon from '@material-ui/icons/Clear';
import { makeStyles, SwipeableDrawer } from '@material-ui/core';
import { authLogoutSagaAction } from '../../../store/actions/AuthActions/authActionCreators';
const useStyle = makeStyles(theme => ({
    appBar:{
        zIndex:'1301',
        margin:'0 !important',
        backgroundColor: "black",
        height:'110px',
        [theme.breakpoints.down('sm')]:{
            height:'56px',
        },
    },
    tollbarWrap:{
        height:'100%',
        maxWidth: '95% !important',
        width:'95%',
        margin: '0 auto',
        display:'flex !important',
        justifyContent:'space-between',
        alignItems:'center',
    },
    logoMenu:{
        display:'flex',
    },
    logo:{
        maxWidth: "200px",
        [theme.breakpoints.down('sm')]:{
            maxWidth: "150px",
        },
    },
    adaptiveMenuIcon:{
        display:'flex',
        [theme.breakpoints.up('md')]:{
            display: 'none',
        },
    },
    menuIcon:{
        position:'relative',
        paddingTop:theme.spacing(1),
        marginLeft:theme.spacing(1),
        color:theme.palette.secondary.main,
        '&:before':{
            position: 'absolute',
            content: `''`,
            height: '60%',
            width: '2px',
            backgroundColor: '#fff',
            bottom: '10px',
            left: '0',
        },
    },
    menuResponsive:{
        [theme.breakpoints.down('sm')]:{
            display: 'none',
        },
    },
    menuDrawer:{
        '& .MuiDrawer-paperAnchorTop':{
            backgroundColor:'black',
            top:'56px',
            overflow:'hidden',
        }
    },
    btnLogin:{
        color:'#fff',
        [theme.breakpoints.down('sm')]:{
            display: 'none',
        },
    }
}))
const Header = () => {
    const classes = useStyle()
    const dispatch = useDispatch()
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    const {accessToken:isAuth} = useSelector(state => getAuthToken(state))
    let history = useHistory();
    function logout() {
        dispatch(authLogoutSagaAction())
    }
    function handleClick(to) {
        console.log(`historu=y to ${to}`);
        history.push(to);
    }
    return (
        <AppBar className={`${classes.appBar}`}>
            <Toolbar className={classes.tollbarWrap} variant="dense">
                <div className={classes.logoMenu}>
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
                    {isAuth &&
                        <div className={classes.menuResponsive} >
                            <Menu />
                        </div>
                    }
                </div>
                <ButtonCustom onClick={() => {
                    if (!isAuth) {
                        handleClick(LOGIN_ROUTE)    
                    } else {
                        logout()
                    }    
                    }}
                        className={classes.btnLogin}
                        varianttrig = 'outlined'
                        variant='outlined'>
                        {(!isAuth && "Login") || ("Logout")}
                </ButtonCustom>
                <div className={classes.adaptiveMenuIcon}>
                    <ButtonCustom onClick={() => {
                        if (!isAuth) {
                            handleClick(LOGIN_ROUTE)    
                        } else {
                            logout()
                        }    
                        }}
                            color="secondary"
                        >
                            {(!isAuth && "Login") || ("Logout")}
                    </ButtonCustom>
                    {isAuth &&
                        <IconButton onClick={(!open)?handleDrawerOpen:handleDrawerClose} className={classes.menuIcon} edge="start" color="inherit" aria-label="menu">
                            {!open && <MenuIcon />}
                            {open && <ClearIcon />}
                        </IconButton>
                    }
                </div>
                <SwipeableDrawer
                    className={classes.menuDrawer}
                    anchor='top'
                    open={open}
                    onClose={handleDrawerClose}
                    onOpen={handleDrawerOpen}
                >   
                    <Menu  classTrigger='menuVertic' />
                </SwipeableDrawer>
            </Toolbar>     
        </AppBar>
    )
}

export default Header
