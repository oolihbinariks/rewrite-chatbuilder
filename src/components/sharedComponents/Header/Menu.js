import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { AUDIENCES_ROUTE, CAMPAIGNS_ROUTE, CREATE_CAMPAIGN_ROUTE, SETTINGS_ROUTE, TEMPLATES_ROUTE } from '../../../constants/routesUrl'
import { Link } from 'react-router-dom'
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
const Menu = () => {
    const [activeItemMenu, setActiveItemMenu] = useState(null)
    return (
        <ul className="menu"> 
            {
                menuItem.map((item) =>{
                    const classItem = (item.id === activeItemMenu)? 'nav-link active' :'nav-link';
                    return(<li key={item.id} className="nav-item">
                        <Link className={classItem} onClick={() => setActiveItemMenu(item.id)} aria-current="page" to={item.url}>{item.title}</Link>
                    </li>)
                })
            } 
        </ul> 
    )
}

Menu.propTypes = {

}

export default Menu
