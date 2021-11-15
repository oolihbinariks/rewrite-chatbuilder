import React, { useEffect, useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, MenuItem } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonCustom } from '../../../../components/sharedComponents/Buttons/ButtonOutlined';
import { StyledInput } from '../../../../components/sharedComponents/Inputs/InputCustom';
import * as yup from "yup";
import { selectDeleteElementForQuestionAction, updateSetElementsForQuestionAction } from '../../../../store/actions/TemplatesActions/templatesActionCreators';
import { useParams } from 'react-router-dom';
import { AddOptions } from './AddOptions';
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
const responseType = [
    {
      value:'node',
      label:'Select type of Node'
    },
    {
      value:'information',
      label:'Information'
    },
    {
      value:'inputText',
      label:'Text Input'
    },
    {
      value:'singleChoice',
      label:'Single Select'
    },
    {
      value:'condition',
      label:'Workflow control'
    },
]

const nodeDialogValidateSchema = yup.object({
    textMessage: yup.string('Please enter text message').required('Please enter text message'),
    node: yup.string('Please select type of node ').required("Please select type of node").oneOf(responseType.map(node=>node.value !=='node' && node.value), "Please select a node")
}).required();

const FormAddNodeDialog = ({elements, currentObjectRF}) => {
    const classes = useStyles();
    let {category, question } = useParams();
    const templateById = useSelector(state => getTemplateById(state.templates, category))
    const RFInstObj = useSelector(state => getStateRFInstObj(state.templates))
    console.log("Form RFInstObj from redux:", RFInstObj);
    const [updatElemTrigger, setUpdatElemTrigger] = useState(false)
    console.log("UPADATE  updatElemTrigger", updatElemTrigger);
    const updateElement = useSelector(state => getStateSelectedDelElement(state.templates))
    console.log("UPADATE  updateElement", updateElement);
    useEffect(() => {
        if (updateElement) {
            setUpdatElemTrigger(true)
        }else{
            setUpdatElemTrigger(false)
        }
    }, [updateElement])
    const preloadValues = {
        node:responseType[0].value, 
        textMessage:''
    }
    const { setValue, handleSubmit, reset, watch, control, formState: { errors } } = useForm({
        mode:'all',
        defaultValues: preloadValues,
        resolver: yupResolver(nodeDialogValidateSchema)
      });
    const nodeValue = watch("node");
    const handleNodeChange = e => setValue("node", e.target.value);
    const textMessageValue = watch("textMessage");
    useEffect(() => {
        if (updateElement?.data?.nodeType==='singleChoice') {
            setOptions(updateElement?.data?.options)
        }
        setValue("node",  updateElement?.data?.nodeType);
        setValue("textMessage",  updateElement?.data?.message);
    }, [updatElemTrigger, updateElement, setValue])
    useEffect(() => {
        if (updateElement?.data?.nodeType==='singleChoice') {
            setOptions(updateElement?.data?.options)
        }
    }, [updatElemTrigger, updateElement])
    const handletextMessageChange = e => setValue("textMessage", e.target.value);
    const questionById = templateById.templates.find(template=> template.id === question)
    const [options, setOptions] = useState([])
    const dispatch = useDispatch()
    const saveData = data => {
        const newNode = {
            id: uuidv4(),
            type:'message',
            position: { x: 600, y: 300 },
            data:{
                number:`N${questionById.elements.length+1}`,
                nodeType: data.node,
                message: data.textMessage,
                options: options
            }
        }
        if (updatElemTrigger) {
            dispatch(updateSetElementsForQuestionAction({categoryId: category, templateId:question, elements:RFInstObj.elements.map(element=>{
                if (element.id === updateElement.id) {
                    return({...updateElement,
                        data:{
                            ...updateElement.data, 
                            nodeType: data.node, 
                            message:data.textMessage,
                            options: options
                        }
                    })
                } else {
                    return(element)
                }
            })}))
        } else {
            dispatch(updateSetElementsForQuestionAction({categoryId: category, templateId:question, elements:[...RFInstObj.elements, newNode]}))
        }
        reset({
            node: 'node',
            textMessage:'',
        })
        dispatch(selectDeleteElementForQuestionAction(null))
        setUpdatElemTrigger(false)        

        setOptions([])
    };
    const saveDialog = ()=>{
        console.log("Questions ADD node elements: elements =>:", elements);
        dispatch(updateSetElementsForQuestionAction({categoryId: category, templateId:question, elements:RFInstObj.elements}))
    }
    
const cancelHandler = ()=>{
    reset({
        node: 'node',
        textMessage:'',
    }) 
    setUpdatElemTrigger(false)  
    dispatch(selectDeleteElementForQuestionAction(null))
}
    return (
            <form onSubmit = {handleSubmit(saveData)} autoComplete='off' >
                <DialogTitle id="form-dialog-title">{updatElemTrigger ? 'Update node of step dialog' : 'Add new step of dialog'}</DialogTitle>
                <DialogContent>
                    <div className={classes.selectBlock}>
                    <DialogContentText className={classes.dialogContentText}>
                        Type Node
                    </DialogContentText>
                    <Controller 
                        name='node'
                        control={control}
                        render={
                            ({onChange, onBlur, value}) => (             
                                <StyledInput
                                    value={nodeValue}
                                    onChange={handleNodeChange}
                                    variant='outlined' 
                                    label='Select Type of Node' 
                                    size='small'
                                    type='select' 
                                    select
                                    error = {(errors?.node) ? true : false}
                                    helperText = {(errors?.node?.message) ? errors.node.message : ''}
                                    fullWidth
                                >
                                    {responseType.map((option) => (
                                        <MenuItem key={option.value} value={option.value}>
                                            {option.label}
                                        </MenuItem>
                                    ))} 
                                </StyledInput>
                            )
                        }
                    />
                    </div>
                    <DialogContentText>
                        Text Message
                    </DialogContentText>
                    <div>
                    <Controller 
                        name='textMessage'
                        control={control}
                        render={
                            ({onChange, onBlur, value}) => (             
                                <StyledInput
                                    value={textMessageValue}
                                    onChange={handletextMessageChange}
                                    variant='outlined' 
                                    label='Enter Category name' 
                                    multiline
                                    rows={4}    
                                    type='text' 
                                    error = {(errors?.textMessage) ? true : false}
                                    helperText = {(errors?.textMessage?.message) ? errors.textMessage.message : ''}
                                />      
                            )
                        }
                    />
                                  
                    </div>
                    <div>
                        {nodeValue && nodeValue==='singleChoice' &&
                        <AddOptions options={options} setOptions={setOptions} />}
                    </div>
                    <DialogActions className={classes.dialogAction}>
                        <ButtonCustom
                            onClick={cancelHandler} 
                            varianttrig='contained'
                            variant='contained' 
                            size='small' 
                            color="primary"
                        >
                            Cancel
                        </ButtonCustom>
                        <ButtonCustom varianttrig='contained' variant='contained' size='small' color="secondary" type='submit' >
                            Save
                        </ButtonCustom>
                    </DialogActions>
                    <DialogActions>
                        <h3>Save Dialog</h3>
                        <br/>
                        <div>
                        <ButtonCustom
                            onClick={saveDialog}
                            varianttrig='contained' 
                            variant='contained' 
                            size='small' 
                            color="primary"
                        >
                            Save Dialog
                        </ButtonCustom>
                        </div>
                    </DialogActions>
                </DialogContent>
            </form>
    )

}

export default FormAddNodeDialog
