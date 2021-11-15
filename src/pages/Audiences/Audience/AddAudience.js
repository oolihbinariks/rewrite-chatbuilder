import { Divider, makeStyles, Typography } from '@material-ui/core'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { useDispatch } from 'react-redux';


import Breadcrumbs from '../../../components/sharedComponents/Breadcrumbs/Breadcrumbs'
import { ButtonCustom } from '../../../components/sharedComponents/Buttons/ButtonOutlined'
import { StyledInput } from '../../../components/sharedComponents/Inputs/InputCustom'
import IconDelete from '../../../components/sharedComponents/Buttons/IconDelete'
import { addUsersAudienceSagaAction } from '../../../store/actions/AudiencesActions/audiencesActionCreators';
import { useHistory, useParams } from 'react-router-dom';

const useStyles = makeStyles((theme)=> ({
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
    
}))

const AddAudience = () => {
    let history = useHistory();

    const classes = useStyles()
    let { audience: audienceId } = useParams();
    const [rowUser, setRowUser] = useState([
        {
            id:'row',
        },
    ])
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

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(audienceValidateSchema)
      });

    const dispatch = useDispatch()
    const saveData = data => {
        const users =[];
            rowUser.forEach((row, index) => {
                users[index] ={}
                users[index].id = Math.round(Math.random() * Math.random() * 100 + 121).toString()
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

        dispatch(addUsersAudienceSagaAction({audienceId, users}))
        history.push(`/audience/${audienceId}`)
    };

   const handlerAddRow = () => {
    setRowUser([...rowUser, {id:`row${rowUser.length}`}])
   } 
   const handlerDeleteRow = (id) => {
    setRowUser(rowUser.filter(row => row.id !== id ))
   } 
    return (
        <div className='wrapper'>
            <Breadcrumbs />
            <div>
                <Typography align='center' variant='h4'>Add Users Manually</Typography>
                <Divider />
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
                            <ButtonCustom onClick={handlerAddRow} varianttrig='contained' variant='contained' color='secondary' >Add Row</ButtonCustom>
                            <ButtonCustom varianttrig='contained' variant='contained' color='secondary' type='submit' >Save</ButtonCustom>
                        </div>
                </form>
            </div>
        </div>
    )
}

export default AddAudience
