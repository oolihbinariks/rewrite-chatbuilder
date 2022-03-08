import React, { useEffect, useMemo, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { Checkbox, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControl, FormControlLabel, FormGroup, FormHelperText, FormLabel, makeStyles, MenuItem } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonCustom } from '../../../../components/sharedComponents/Buttons/ButtonOutlined';
import { StyledInput } from '../../../../components/sharedComponents/Inputs/InputCustom';
import * as yup from "yup";
import { selectDeleteElementForQuestionAction, updateSetElementsForQuestionAction } from '../../../../store/actions/TemplatesActions/templatesActionCreators';
import { useParams } from 'react-router-dom';
import { getStateRFInstObj, getStateSelectedDelElement, getTemplateById } from '../../../../store/selectors/templatesSelectors';
import { v4 as uuidv4 } from 'uuid';

const useStyles = makeStyles((theme) => ({
    dialogAction:{
        paddingRight:'0',
    },
    selectBlock:{
        display:'flex',
        alignItems:'center',
        marginBottom:theme.spacing(2),
    },
    dialogContentText:{
        width:'30%',
        padding:0,
        margin:0,
    }
  }));

const nodeDialogValidateSchema = yup.object({
    question: yup.string('Please enter text message').required('Please enter text message'),
    // node: yup.string('Please select type of node ').required("Please select type of node").oneOf(responseType.map(node=>node.value !=='node' && node.value), "Please select a node")
}).required();

const FormAddNodeCondition = ({elements}) => {
    const classes = useStyles();
    // const questions = useMemo(elements.filter(element => element.type === 'condition'), [elements]) 
    // let {category, question } = useParams();
    // const templateById = useSelector(state => getTemplateById(state.templates, category))
    // const RFInstObj = useSelector(state => getStateRFInstObj(state.templates))
    const getSingleChoice = useMemo(()=>{
        return elements.filter((element)=> element?.data?.nodeType === 'singleChoice')
    }, [elements])
    
    // console.log('getSingleChoice', getSingleChoice);
    console.log('getSingleChoice', getSingleChoice);
    // console.log("Form RFInstObj from redux:", RFInstObj);
    
    const preloadValues = {
        textMessage:''
    }
    const { setValue, handleSubmit, reset, watch, control, formState: { errors } } = useForm({
        mode:'all',
        defaultValues: preloadValues,
        resolver: yupResolver(nodeDialogValidateSchema)
      });
      const questionValue = watch("question");
      const handleQuestionChange = e => setValue("question", e.target.value);
      const [option, setOption] = useState([])
      const getQuestionSelectOption = useMemo(()=>{
        return elements.filter((element)=> element?.id === questionValue)
    }, [elements, questionValue])[0]?.data?.options
    console.log('getQuestionSelectOption', getQuestionSelectOption);
      useEffect(() => {
        setOption(getQuestionSelectOption)
    }, [getQuestionSelectOption, elements])
    return (
            // <form onSubmit = {handleSubmit(saveData)} autoComplete='off' >
            <form onSubmit = {handleSubmit(console.log())} autoComplete='off' >
                <DialogContent>
                    
                <div className={classes.selectBlock}>
                    <DialogContentText className={classes.dialogContentText}>
                        Naming
                    </DialogContentText>
                    <Controller 
                        name='question'
                        control={control}
                        render={
                            ({onChange, onBlur, value}) => (             
                                    <StyledInput
                                        value={questionValue}
                                        onChange={handleQuestionChange}
                                        variant='outlined' 
                                        label='Select question' 
                                        size='small'
                                        type='select' 
                                        select
                                        error = {(errors?.question) ? true : false}
                                        helperText = {(errors?.question?.message) ? errors.question.message : ''}
                                        fullWidth
                                    >
                                        {getSingleChoice.map((option) => (
                                            <MenuItem key={option.id} value={option.id}>
                                                {option?.data?.number} {option?.data?.message}
                                            </MenuItem>
                                        ))} 
                                    </StyledInput>
                            )
                        }
                    />
                </div>
                <div className={classes.selectBlock}>
                    {option&& 
                    <Controller 
                        name='node'
                        control={control}
                        render={
                            ({onChange, onBlur, value}) => (             
                                <FormControl component="fieldset" className={classes.formControl}>
                                <FormLabel component="legend">Options</FormLabel>
                                <FormGroup>
                                    {option.map(elem=>   <FormControlLabel
                                        control={<Checkbox checked={elem.optionText}  name="gilad" />}
                                        label={elem.optionText}
                                    />)}
                                </FormGroup>
                                <FormHelperText>Be careful</FormHelperText>
                              </FormControl>
                            )
                        }
                    /> }
                    </div>
                
                    
                    <DialogActions className={classes.dialogAction}>
                        <ButtonCustom
                            // onClick={cancelHandler} 
                            varianttrig='contained'
                            variant='contained' 
                            size='small' 
                            color="primary"
                        >
                            Cancel
                        </ButtonCustom>
                        <ButtonCustom varianttrig='contained' variant='contained' size='small' color="secondary" type='submit' >
                            Add Branch
                        </ButtonCustom>
                    </DialogActions>
                </DialogContent>
            </form>
    )

}

export default FormAddNodeCondition
