import { Avatar, Divider, IconButton, List, ListItem, ListItemSecondaryAction, makeStyles, Paper, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';

import { ButtonCustom } from '../../components/sharedComponents/Buttons/ButtonOutlined'
import { StyledInput } from '../../components/sharedComponents/Inputs/InputCustom'
import IconDelete from '../../components/sharedComponents/Buttons/IconDelete'
// import { addUsersAudienceSagaAction } from '../../../store/actions/AudiencesActions/audiencesActionCreators';
import { useHistory } from 'react-router-dom';
import { CREATE_CAMP_STEP_TWO_ROUTE } from '../../constants/routesUrl';
import ListUserInfo from '../Audiences/Audience/ListUserInfo';
import DeleteIcon from '@material-ui/icons/Delete';
import { Stepper } from './Stepper';

const useStyles = makeStyles((theme)=> ({
    headerPage: {
        marginBottom:theme.spacing(3),
    },
    wrapperInputs:{
        padding:`0 ${theme.spacing(1)}px`,
        display:'flex',

        [theme.breakpoints.down('sm')]:{
            display:'flex',
            flexDirection:'column',
        },
    },
    inputItem:{
        [theme.breakpoints.down('sm')]:{
            marginBottom:theme.spacing(1),
        },
        marginRight:theme.spacing(1),
    },
    wrapperButtons:{
        display:'flex',
        justifyContent:'space-between',
        padding:`${theme.spacing(1)}px`,
    },
    inputsSection:{
        padding:"25px 0",
        position:'relative',
        background:theme.palette.background.default,
        "&:nth-child(2n)":{
            background:theme.palette.background.default,
        },
        "&:nth-child(2n+1)":{
            background:"#fff",
        },
    },
    listItem:{
        marginBottom:theme.spacing(1),
    },
    demo: {
        backgroundColor: theme.palette.background.paper,
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
}))

const AddAudience = () => {
    let history = useHistory();

    const classes = useStyles()
    //set states
    const [rowUser, setRowUser] = useState([
        {
            id:'row',
        },
    ])
    //set userList state
    const [listAddedUsers, setListAddedUsers] = useState([])
    console.log('listAddedUsers', listAddedUsers);
    // Create schema validation data
    const objSchema = {}
    rowUser.forEach( row => {
        objSchema[`fullName${row.id}`] = yup.string().required('Name field is required')
        objSchema[`email${row.id}`] = yup.string().email('Format email is wrong').required('Email field is required')
        objSchema[`number${row.id}`] = yup.number()
            .typeError("That doesn't look like a phone number")
            .positive("A phone number can't start with a minus")
            .integer("A phone number can't include a decimal point")
            .min(8)
            .required('A phone number is required')
        objSchema[`customFieldLabel${row.id}`] = yup.string()
        objSchema[`customFieldValue${row.id}`] = yup.string()
    });
    const audienceValidateSchema = yup.object(objSchema).required();

    const { register, handleSubmit, reset,formState: { errors } } = useForm({
        resolver: yupResolver(audienceValidateSchema)
      });

    const saveData = data => {
        const users =[];
            rowUser.forEach((row, index) => {
                users[index] ={}
                users[index].id = uuidv4()
                for (const [key, value] of Object.entries(data)) {
                    if (`fullName${row.id}` === key) {
                        users[index]['fullName']=value                        
                    }
                    if (`email${row.id}` === key) {
                        users[index]['email']=value                        
                    }
                    if (`number${row.id}` === key) {
                        users[index]['phone']=value                        
                    }
                    if (`customFieldLabel${row.id}` === key) {
                        users[index][key]=value                        
                    }
                    if (`customFieldValue${row.id}` === key) {
                        users[index][key]=value                        
                    }
                  }
            })  
            setListAddedUsers(listAddedUsers.concat(users))
            setRowUser([
                {
                    id:'row',
                },
            ])
            reset()
        // dispatch(addUsersAudienceSagaAction({audienceId, users}))
    };
    const handlerDeleteUser =(id)=>{
        setListAddedUsers(listAddedUsers.filter((user)=>(user.id !== id)))
    }
   const handlerAddRow = () => {
    setRowUser([...rowUser, {id:uuidv4()}])
   } 
   const handlerDeleteRow = (id) => {
    setRowUser(rowUser.filter(row => row.id !== id ))
   } 
    return (
        <div className='wrapper'>
            <div className={classes.headerPage}>
              <Typography variant='h4' component='h2'>
              Welcome Admin
              </Typography>
              <Typography variant='subtitle1' component='p'>
              Have your campaign up and running in just a few easy steps.
              </Typography>
            </div>
            <Stepper percent='66'/>
            <div>
                <ButtonCustom onClick={()=>history.push(CREATE_CAMP_STEP_TWO_ROUTE)} variant='contained' color='secondary' type='submit' >Go Back</ButtonCustom>
                <Typography align='center' variant='h4'>Add Users Manually</Typography>
                <Divider />
                <div className={classes.demo}>
                    <List dense={true}>
                    {listAddedUsers && listAddedUsers.map((user) => 
                        <Paper key={user.id} className={classes.listItem} elevation={5}>
                            <ListItem>
                                <ListUserInfo user={user} />
                                <ListItemSecondaryAction>
                                    <IconButton onClick={()=>handlerDeleteUser(user.id)} edge="end" aria-label="delete">
                                        <Avatar aria-label="recipe" className={classes.avatarPrimary}>
                                            <DeleteIcon />
                                        </Avatar>
                                    </IconButton>
                                </ListItemSecondaryAction>
                            </ListItem>
                        </Paper>,
                    )}
                    </List>
                </div>
                <form onSubmit = {handleSubmit(saveData)} noValidate autoComplete='off'>
                   
                    {rowUser.map((row, index)=>(
                     <div key={row.id} className={classes.inputsSection}>
                        <div className = {`${classes.wrapperInputs} rowSection`}>
                            <StyledInput
                                fullWidth 
                                className={classes.inputItem} 
                                size = 'small' 
                                id={`fullName${row.id}`} 
                                type="text" 
                                label='Full Name' 
                                variant="outlined"
                                {...register(`fullName${row.id}`)}
                                error = {(errors && errors[`fullName${row.id}`]) ? true : false}
                                helperText = {(errors && errors[`fullName${row.id}`]?.message) ? errors[`fullName${row.id}`]?.message : ''} 
                            />
                            <StyledInput
                                fullWidth 
                                className={classes.inputItem}
                                variant='outlined' 
                                id={`email${row.id}`} 
                                size='small'
                                label="Email"
                                type='email'
                                {...register(`email${row.id}`)}
                                error = {(errors && errors[`email${row.id}`]) ? true : false}
                                helperText = {(errors && errors[`email${row.id}`]?.message) ? errors[`email${row.id}`].message : ''} 
                            />
                            <StyledInput
                                fullWidth 
                                className={classes.inputItem}
                                variant='outlined' 
                                id={`number${row.id}`}
                                size='small'
                                label="Phone Number"
                                type='number'
                                {...register(`number${row.id}`)}
                                error = {(errors && errors[`number${row.id}`]) ? true : false}
                                helperText = {(errors && errors[`number${row.id}`]?.message) ? errors[`number${row.id}`].message : ''} 
                            />
                        </div>
                        <div className = {`${classes.wrapperInputs} rowSection`}>
                            <StyledInput
                                fullWidth 
                                className={classes.inputItem}
                                variant='outlined' 
                                id={`customFieldLabel${row.id}`} 
                                size='small'
                                label="Custom Field Label"
                                type='text'
                                {...register(`customFieldLabel${row.id}`)}
                                error = {(errors && errors[`customFieldLabel${row.id}`]) ? true : false}
                                helperText = {(errors && errors[`customFieldLabel${row.id}`]?.message) ? errors[`customFieldLabel${row.id}`].message : ''} 
                            />
                            <StyledInput
                                fullWidth 
                                className={classes.inputItem}
                                variant='outlined' 
                                id={`customFieldValue${row.id}`} 
                                size='small'
                                label="Custom Field Value"
                                type='text'
                                {...register(`customFieldValue${row.id}`)}
                                error = {(errors && errors[`customFieldValue${row.id}`]) ? true : false}
                                helperText = {(errors && errors[`customFieldValue${row.id}`]?.message) ? errors[`customFieldValue${row.id}`].message : ''}
                            />
                        </div>
                        {index===0 ? '' : <IconDelete onClick={()=>handlerDeleteRow(row.id)} />}
                    </div>
                    ))}
                        
                        <div className={`${classes.wrapperButtons}`}>
                            <ButtonCustom onClick={handlerAddRow} variant='contained' color='secondary' >Add Row</ButtonCustom>
                            <ButtonCustom variant='contained' color='secondary' type='submit' >Save</ButtonCustom>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default AddAudience
