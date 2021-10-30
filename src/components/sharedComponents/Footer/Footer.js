import React, { useState } from 'react'
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types'
import './Footer.scss'
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
    const [activeItemMenu, setActiveItemMenu] = useState('1')
    return (
        <div className="footerWrap">
            <div>
                <ul className="menu"> 
                {
                    menuItem.map((item) =>{
                        const clasItem = (item.id === activeItemMenu)? 'nav-link active' :'nav-link';
                        return(<li key={item.id} className="nav-item">
                            <Link onMouseEnter={(() =>setActiveItemMenu(item.id))} className={clasItem} aria-current="page" to={item.url}>{item.title}</Link>
                        </li>)
                    })
                } 
                </ul>
            </div>
            <div>© 2021 ChatBuilder. All rights reserved</div>
        </div>
    )
}

Footer.propTypes = {

}

export default Footer
