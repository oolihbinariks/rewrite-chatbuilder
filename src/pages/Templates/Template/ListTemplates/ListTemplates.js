import React from 'react'
import DeleteIcon from '@material-ui/icons/Delete';
import { Avatar, Card, CardContent, Grid, IconButton, makeStyles, Typography, } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { getTemplateById } from '../../../../store/selectors/templatesSelectors';
import FormAddTemplate from './FormAddTemplate';
import { deleteTemplateCategorySagaAction } from '../../../../store/actions/TemplatesActions/templatesActionCreators';
import FormModal from '../../../../components/sharedComponents/Modals/FormModal';



const useStyles = makeStyles((theme) => ({
    demo: {
      backgroundColor: theme.palette.background.paper,
    },
    root: {
      margin:'0 auto',
      maxWidth: '405px',
      minWidth: '120px',
      minHeight:'380px',
    },
    cardHeader:{
      display:'flex',
      justifyContent:"space-between",
      alignItems:'center',
      padding:`0 ${theme.spacing(2)}px`
    },
    image:{
      background:'red',
    },
    avatarPrimary: {
      '&.MuiAvatar-root':{
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        borderRadius:'50%',
        border:`1px solid ${theme.palette.primary.main}`,
        '& :hover':{
          boxSizing: 'content-box',
          padding:'6px',
          backgroundColor: "white",
          borderRadius:'50%',
          border:`1px solid ${theme.palette.primary.main}`,
  
        },
      },
    },
    listItem:{
      marginBottom:theme.spacing(1),
    },
    addCategory:{
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
      height:'100%',
    },
    addCategoryBtn:{
      display:'flex',
      flexDirection:'column',
      alignItems:'center',
      justifyContent:'center',
    },
    iconAddCatBut:{
      '&.MuiIconButton-root':{
        '&:hover':{
          background:'none',
          border:'none',
        }
      },
      '& :hover':{
        backgroundColor: theme.palette.secondary.main,
        borderRadius:'50%',
      },
    },
  }));

const ListCategories = () => {
    const classes = useStyles();
    let { category: categoryId } = useParams();

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

    const dispatch = useDispatch()
    const categoryById = useSelector(state => getTemplateById(state.templates, categoryId))
    const handlerDeleteCategory = (templateId) => {
      dispatch(deleteTemplateCategorySagaAction({categoryId, templateId}))
    }
    return (
        <div className={classes.demo}>
          <Grid container spacing='2' alignContent = 'center'>
            {categoryById.templates.map((template) => (
            <Grid item xs='12' sm='6' md ='4' lg='3' alignContent='center' alignItems='center'>
              <Card className={classes.root} variant="outlined">
                  <div className={classes.cardHeader}>
                    <Link className='nonAnchor' to = {`/templates/${categoryId}/${template.id}`}>
                      <Typography variant='h6' >{template.name}</Typography>
                    </Link>
                    <IconButton onClick={()=>handlerDeleteCategory(template.id)} edge="end" aria-label="delete">
                        <Avatar aria-label="recipe" className={classes.avatarPrimary}>
                            <DeleteIcon />
                        </Avatar>
                    </IconButton>
                  </div>
                  <CardContent>
                    <img alt={template.name} src={require(`../../../../assets/images/${template.img}`).default}  height='100%' width='100%'/>
                  </CardContent>
              </Card>
            </Grid>)
            )}
            <Grid item xs='12' sm='6' md ='4' lg='3' alignContent='center' alignItems='center'>
              <Card className={`${classes.root} ${classes.addCategory}`} variant="outlined">
                <div className={classes.addCategoryBtn}>
                  <Typography>
                    Create New Category
                  </Typography>
                  <IconButton onClick={handleClickOpen} className={classes.iconAddCatBut} edge="end" aria-label="delete">
                          <Avatar aria-label="recipe">
                              <AddIcon />
                          </Avatar>
                  </IconButton>
                </div>
              </Card>
            </Grid>
          </Grid>
          <FormModal open={open} onClose={handleClose}>
            <FormAddTemplate onClose={handleClose}/>
          </FormModal>
    </div>
    )
}

export default ListCategories
