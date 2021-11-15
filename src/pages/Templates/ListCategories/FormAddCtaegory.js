import { yupResolver } from '@hookform/resolvers/yup';
import { DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, MenuItem } from '@material-ui/core';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ButtonCustom } from '../../../components/sharedComponents/Buttons/ButtonOutlined';
import { StyledInput } from '../../../components/sharedComponents/Inputs/InputCustom';
import * as yup from "yup";
import { addCategorySagaAction } from '../../../store/actions/TemplatesActions/templatesActionCreators';

const useStyles = makeStyles((theme) => ({
    dialogAction:{
        paddingRight:'0',
    }
  }));
const sortes = [
    {
        value:'unselect',
        label:'Select Your Category Icon'
    },
    {
        value:'icon-template-1.png',
        label:'Category Icon-1'
    },
    {
        value:'icon-template-2.png',
        label:'Category Icon-2'
    },
]
const audienceValidateSchema = yup.object({
    categoryName: yup.string('Please enter category name').required('Please enter category name'),
    icon: yup.string('Please select a icon String').required("Please select a icon").oneOf(sortes.map(icon=>icon.value !=='unselect' && icon.value), "Please select a icon")
}).required();

const FormAddCCategory = ({onClose}) => {
    const classes = useStyles();
    const { register, handleSubmit, reset,formState: { errors } } = useForm({
        resolver: yupResolver(audienceValidateSchema)
      });
    const dispatch = useDispatch()
    const saveData = data => {
        dispatch( addCategorySagaAction(data))
        reset()
        onClose()
    };
    return (
            <form onSubmit = {handleSubmit(saveData)} autoComplete='off' >
                <DialogTitle id="form-dialog-title">Create New Category</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Category Name
                    </DialogContentText>
                    <div>
                        <StyledInput
                            label='Enter Category name' 
                            size='small'
                            type='text' 
                            {...register('categoryName')}
                            error = {!!errors?.categoryName?.message}
                            helperText = {errors?.categoryName?.message}
                            />

                    </div>
                        <DialogContentText>
                            Category Icon
                        </DialogContentText>
                    <div>
                    <StyledInput
                        label='Select Your Category Icon' 
                        type='select' 
                        select
                        {...register('icon')}
                        defaultValue={sortes[0].value}
                        error = {!!errors?.icon?.message}
                        helperText = {errors?.icon?.message}
                    >
                        {sortes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))} 
                    </StyledInput>
                    </div>
                    <DialogActions className={classes.dialogAction}>
                        <ButtonCustom onClick={onClose} varianttrig='contained' variant='contained' size='small' color="primary">
                            Cancel
                        </ButtonCustom>
                        <ButtonCustom varianttrig='contained' variant='contained' size='small' color="secondary" type='submit' >
                            Save
                        </ButtonCustom>
                    </DialogActions>
                </DialogContent>
            </form>
    )

}

export default FormAddCCategory
