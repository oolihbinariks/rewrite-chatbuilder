import React from 'react';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import {Link, makeStyles} from '@material-ui/core';
import GroupIcon from '@material-ui/icons/Group';
import ListIcon from '@material-ui/icons/List';

import PersonAddIcon from '@material-ui/icons/PersonAdd';
import { withRouter } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAudienceById } from '../../../store/selectors/audencesSelectors';
import { getTemplateById, getTemplateCategoryById } from '../../../store/selectors/templatesSelectors';

const useStyles = makeStyles((theme) => ({
    active:{
        // backgroundColor: theme.palette.grey[100],
        height: theme.spacing(3),
        // color: theme.palette.grey[900],
        fontWeight: theme.typography.fontWeightRegular,
    },
    breadcrumbs:{
        // backgroundColor: theme.palette.secondary.main,
        width:'max-content',
    },
    icon:{
        width:'40px',
        height:'40px',
        marginRight: theme.spacing(1),
    },
    breadcrumbItem:{
        display: 'flex',
        alignItems:'center',
        fontSize:'25px',    
        position: 'relative',
        "&::after":{
            content:"",
            position:'absolute',
            display:'block',
            width:"15px",
            height:'120px',
            backgroundColor:'#000',
            left:'0px',
            bottom:'0px',
            zIndex:'60'
        },
        "&:hover":{
            backgroundColor:'#fff',
            zIndex:'15',
        },
    },
}))

 const BreadcrumbsTemplates = ({history, location: {pathname}}) =>  {
    const classes = useStyles()
    let { category: id, question } = useParams();
    const categoruById = useSelector(state => getTemplateById(state.templates, id))
    const templateById = useSelector(state => getTemplateCategoryById(state.templates, id, question))
    function handleClick(event, routeTo) {
        event.preventDefault();
        if (routeTo) {
            history.push(routeTo)
        } else {
            history.push('templates')
        }
    }
    const pathnames = pathname.split('/').map((x) => {
        return x 
    }).filter(x => x)
    return (
        <Breadcrumbs separator='>' className={classes.breadcrumbs} aria-label="breadcrumb">
            {pathnames.map((name, index, array) => {
                const routeTo =`/${pathnames.slice(0, index + 1 ).join('/')}`;
                if (index === array.length - 1) {
                    return( 
                        <Link key={`${name}_${index}`} color="inherit"  className={`${classes.active} ${classes.breadcrumbItem}`} >
                            {(name==="templates") ? "Categories" : (name===categoruById?.id && index === 1) ? categoruById?.name  :  (name === templateById?.id && index === 2) ? templateById?.name : name}
                        </Link>)
                } else {
                    return (
                        <Link key={`${name}_${index}`} color="inherit" onClick={(e)=> (handleClick(e, routeTo))} className={`${classes.breadcrumbItem}`} >
                            {(name==="templates") ? "Categories" : (name===categoruById?.id && index === 1) ? categoruById?.name  :  (name === templateById?.id && index === 2) ? templateById?.name : name}
                        </Link>
                    )
                }
            })}
        </Breadcrumbs>
    );
}

export default withRouter(BreadcrumbsTemplates);