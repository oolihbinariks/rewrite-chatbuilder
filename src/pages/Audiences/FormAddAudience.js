import { yupResolver } from '@hookform/resolvers/yup';
import { DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles } from '@material-ui/core';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ButtonCustom } from '../../components/sharedComponents/Buttons/ButtonOutlined';
import { StyledInput } from '../../components/sharedComponents/Inputs/InputCustom';
import { addAudienceSagaAction } from '../../store/actions/AudiencesActions/audiencesActionCreators';
import * as yup from "yup";

const useStyles = makeStyles((theme) => ({
    dialogAction:{
        paddingRight:'0',
    }
   }));

const audienceValidateSchema = yup.object({
    titleAudience: yup.string().required("Audience title field is required!"),
}).required();

const FormAddAudience = ({onClose}) => {
    const classes = useStyles();
    const { register, handleSubmit, reset,formState: { errors } } = useForm({
        resolver: yupResolver(audienceValidateSchema)
      });
    const dispatch = useDispatch()
    const saveData = data => {
        dispatch(addAudienceSagaAction(data))
        reset()
        onClose()
    };
    return (
            <form onSubmit = {handleSubmit(saveData)} autoComplete='off' >
                <DialogTitle id="form-dialog-title">Audience Title</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Add Your Audience Title.
                    </DialogContentText>
                    <div>
                    <StyledInput
                        variant='outlined' 
                        label='title' 
                        size='small'
                        type='text' 
                        id='titleAudience'
                        {...register('titleAudience')}
                        error = {!!errors?.titleAudience?.message}
                        helperText = {errors?.titleAudience?.message}
                        fullWidth 
                        />

                    </div>
                    <DialogActions className={classes.dialogAction}>
                        <ButtonCustom onClick={onClose} variant='contained' size='small' color="primary">
                            Cancel
                        </ButtonCustom>
                        <ButtonCustom variant='contained' size='small' color="secondary" type='submit' >
                            Save
                        </ButtonCustom>
                    </DialogActions>
                </DialogContent>
            </form>
    )

}

export default FormAddAudience
