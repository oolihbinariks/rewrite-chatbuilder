import { yupResolver } from '@hookform/resolvers/yup';
import { DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, MenuItem } from '@material-ui/core';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { ButtonCustom } from '../../../../components/sharedComponents/Buttons/ButtonOutlined';
import { StyledInput } from '../../../../components/sharedComponents/Inputs/InputCustom';
import * as yup from "yup";
import { addTemplateCategorySagaAction } from '../../../../store/actions/TemplatesActions/templatesActionCreators';
import { useParams } from 'react-router-dom';

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
    templateName: yup.string('Please enter category name').required('Please enter category name'),
    icon: yup.string('Please select a icon String').required("Please select a icon").oneOf(sortes.map(icon=>icon.value !=='unselect' && icon.value), "Please select a icon")
}).required();

const FormAddTemplate = ({onClose}) => {
    const classes = useStyles();
    let {category} = useParams()
    const { register, handleSubmit, reset,formState: { errors } } = useForm({
        resolver: yupResolver(audienceValidateSchema)
      });
    const dispatch = useDispatch()
    const saveData = data => {
        dispatch( addTemplateCategorySagaAction({categoryId: category, template: data}))
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
                            variant='outlined' 
                            label='Enter Category name' 
                            size='small'
                            type='text' 
                            id='category'
                            {...register('templateName')}
                            error = {(errors?.templateName) ? true : false}
                            helperText = {(errors?.templateName?.message) ? errors.templateName.message : ''}
                            fullWidth 
                            />

                    </div>
                    <DialogContentText>
                        Category Icon
                    </DialogContentText>
                    <div>
                    <StyledInput
                        variant='outlined' 
                        label='Select Your Category Icon' 
                        size='small'
                        type='select' 
                        id='icon'
                        select
                        {...register('icon')}
                        error = {(errors?.icon) ? true : false}
                        helperText = {(errors?.icon?.message) ? errors.icon.message : ''}
                        fullWidth
                    >
                        {sortes.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))} 
                    </StyledInput>
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

export default FormAddTemplate
