import { yupResolver } from '@hookform/resolvers/yup';
import { DialogActions, makeStyles } from '@material-ui/core';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ButtonCustom } from '../../components/sharedComponents/Buttons/ButtonOutlined';
import { StyledInput } from '../../components/sharedComponents/Inputs/InputCustom';
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
    dialogAction:{
        paddingRight:'0',
    }
  }));
const audienceValidateSchema = yup.object({
    email: yup.string().email('Format email is wrong').required('Email field is required'),
    password: yup.string('Please enter password').required("Please enter password")
}).required();

const FormAuth = () => {
    const classes = useStyles();
    const { register, handleSubmit, reset,formState: { errors } } = useForm({
        resolver: yupResolver(audienceValidateSchema)
      });
    const dispatch = useDispatch()
    const saveData = data => {
        // dispatch( addCategorySagaAction(data))
        reset()
    };
    return (
            <form onSubmit = {handleSubmit(saveData)} autoComplete='off' >
                    <StyledInput
                        label='Email adress' 
                        size='small'
                        type='email' 
                        {...register('email')}
                        error = {!!errors?.email?.message}
                        helperText = {errors?.email?.message}
                    />
                    <StyledInput
                        label='Password' 
                        size='small'
                        type='password' 
                        {...register('password')}
                        error = {!!errors?.password?.message}
                        helperText = {errors?.password?.message}
                    />
                    <DialogActions className={classes.dialogAction}>
                        <ButtonCustom onClick={()=> reset()} varianttrig='contained' variant='contained' size='small' color="secondary">
                            Clear
                        </ButtonCustom>
                        <ButtonCustom varianttrig='contained' variant='contained' size='small' color="secondary" type='submit' >
                            Save
                        </ButtonCustom>
                    </DialogActions>
            </form>
    )

}

export default FormAuth