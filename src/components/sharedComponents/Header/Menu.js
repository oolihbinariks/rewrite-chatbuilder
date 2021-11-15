import React from 'react'
import { AUDIENCES_ROUTE, CAMPAIGNS_ROUTE, CREATE_CAMPAIGN_ROUTE, SETTINGS_ROUTE, TEMPLATES_ROUTE } from '../../../constants/routesUrl'
import { Link, useLocation } from 'react-router-dom'
import { makeStyles} from '@material-ui/core';
const useStyle = makeStyles(theme => ({
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
                    color: '#fff',
                    '&.active, &:active, &:hover':{
                          position: 'relative',
                          color:'#fe579d',
                          paddingBottom: '24px',
                          '&:after':{
                                position: 'absolute',
                                content: `''`,
                                height: '5px',
                                width: '100%',
                                backgroundColor: '#fe579d',
                                bottom: '-20px',
                                left: '0',
                          }
                    } 
              }
        }
    },
    menuVertic:{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection:'column',
        listStyle: 'none',
        '& .nav-item':{
              padding: '0 0 0 0',
              margin:'0',
              fontSize: '18px',
              lineHeight: '2.5em',
              '& .nav-link':{
                    textDecoration: 'none',
                    margin:'0',
                    padding:'0',
                    color: '#fff',
                    '&.active, &:active, &:hover':{
                          position: 'relative',
                          color:'#fe579d',
                          '&:after':{
                                position: 'absolute',
                                content: `''`,
                                height: '5px',
                                width: '100%',
                                backgroundColor: '#fe579d',
                                bottom: '-10px',
                                left: '0',
                          }
                    } 
              }
        }
    },
}))

const menuItem =[
    { 
        id:'1',
        title:'Campaigns',
        url:CAMPAIGNS_ROUTE,
    },
    { 
        id:'2',
        title:'Create Campaign',
        url:CREATE_CAMPAIGN_ROUTE,
    },
    { 
        id:'3',
        title:'Audience',
        url:AUDIENCES_ROUTE
    },
    { 
        id:'4',
        title:'Templates',
        url:TEMPLATES_ROUTE
    },
    { 
        id:'5',
        title:'Settings',
        url:SETTINGS_ROUTE
    },
]
const Menu = ({classTrigger='menu'}) => {
    const classes = useStyle()
    let location = useLocation();

    return (
        <ul className={(classTrigger && (classTrigger === 'menuVertic'))? classes.menuVertic : classes.menu}> 
            {
                menuItem.map((item) =>{
                    return(<li key={item.id} className="nav-item">
                        <Link className={(item.url === location.pathname)? 'nav-link active' :'nav-link'} aria-current="page" to={item.url}>{item.title}</Link>
                    </li>)
                })
            } 
        </ul> 
    )
}

Menu.propTypes = {

}

export default Menu
