import { makeStyles } from '@material-ui/core';
import React from 'react'
import { Link } from 'react-router-dom';

const useStyle = makeStyles(theme => ({
    footerWrap:{
        position: 'relative',
        height: '100%',
        padding: '35px 70px 35px 25px',
        background: '#fe579d',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: '3',
        [theme.breakpoints.down('sm')]:{
            flexDirection:'column',
            padding: '35px 25px 35px 0px',
        },
    },
    menu:{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection:'row',
        listStyle: 'none',
        '& .nav-item':{
              padding: '0 0 0 20px',
              fontSize: '18px',
              lineHeight: '2.5em',
              '& .nav-link':{
                    textDecoration: 'none',
                    color: '#000',
                    '&.active, &:active, &:hover':{
                          color:'#000',
                          textDecoration:'underline',
                          paddingBottom: '24px',
                    } 
              }
        }
    },
    copyRight:{
        [theme.breakpoints.down('sm')]:{
            padding:'0 0 0 25px ',
            textAlign:'center',
        },
    },
}))

const menuItem =[
    { 
        id:'1',
        title:'Contact Us',
        url:'#'
    },
    { 
        id:'2',
        title:'Terms',
        url:'#'
    },
    { 
        id:'3',
        title:'Privacy Policy',
        url:'#'
    },
]
const Footer = props => {
    const classes = useStyle()
    return (
            <div className={classes.footerWrap} >
                <div>
                    <ul className={classes.menu}> 
                    {
                        menuItem.map((item) =>{
                            return(
                            <li key={item.id} className="nav-item">
                                <Link className='nav-link' aria-current="page" to={item.url}>{item.title}</Link>
                            </li>)
                        })
                    } 
                    </ul>
                </div>
                <div className={classes.copyRight}>© 2021 ChatBuilder. All rights reserved</div>
            </div>
    )
}

Footer.propTypes = {

}

export default Footer
