import React, { useState } from 'react'
import { yupResolver } from '@hookform/resolvers/yup';
import { DialogActions, DialogContent, DialogContentText, DialogTitle, makeStyles, MenuItem } from '@material-ui/core';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ButtonCustom } from '../../../../components/sharedComponents/Buttons/ButtonOutlined';
import { StyledInput } from '../../../../components/sharedComponents/Inputs/InputCustom';
import * as yup from "yup";
import { updateSetElementsForQuestionAction } from '../../../../store/actions/TemplatesActions/templatesActionCreators';
import { useParams } from 'react-router-dom';
import { AddOptions } from './AddOptions';
import { getStateRFInstObj, getTemplateById } from '../../../../store/selectors/templatesSelectors';
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

    const questionById = templateById.templates.find(template=> template.id === question)
    const { register, handleSubmit, reset, watch, formState: { errors } } = useForm({
        resolver: yupResolver(nodeDialogValidateSchema)
      });
    const [options, setOptions] = useState([])
    const dispatch = useDispatch()
    const saveData = data => {
        const newNode = {
            id: uuidv4(),
            number:`N${questionById.elements.length+1}`,
            type:'message',
            position: { x: 600, y: 300 },
            data:{
                nodeType: data.node,
                message: data.textMessage,
                options: options
            }
        }
        dispatch(updateSetElementsForQuestionAction({categoryId: category, templateId:question, elements:[...RFInstObj.elements, newNode]}))
        console.log('data', data);
        reset({
            node: 'node',
            textMessage:'',
        })
        setOptions([])
    };
    const saveDialog = ()=>{
        console.log("Questions ADD node elements: elements =>:", elements);
        dispatch(updateSetElementsForQuestionAction({categoryId: category, templateId:question, elements:RFInstObj.elements}))
    }

    const nodeValue = watch("node");
    return (
            <form onSubmit = {handleSubmit(saveData)} autoComplete='off' >
                <DialogTitle id="form-dialog-title">Add new step of dialog</DialogTitle>
                <DialogContent>
                    <div className={classes.selectBlock}>
                    <DialogContentText className={classes.dialogContentText}>
                        Type Node
                    </DialogContentText>
                    <StyledInput
                        variant='outlined' 
                        label='Select Type of Node' 
                        size='small'
                        type='select' 
                        id='node'
                        select
                        defaultValue={responseType[0].value}
                        {...register('node')}
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
                    </div>
                    <DialogContentText>
                        Text Message
                    </DialogContentText>
                    <div>
                    <StyledInput
                            variant='outlined' 
                            label='Enter Category name' 
                            size='small'
                            multiline
                            rows={4}    
                            type='text' 
                            id='message'
                            {...register('textMessage')}
                            error = {(errors?.textMessage) ? true : false}
                            helperText = {(errors?.textMessage?.message) ? errors.textMessage.message : ''}
                            fullWidth 
                            />                    
                    </div>
                    <div>
                        {nodeValue && nodeValue==='singleChoice' &&
                        <AddOptions options={options} setOptions={setOptions} />}
                    </div>
                    <DialogActions className={classes.dialogAction}>
                        <ButtonCustom
                            onClick={()=>{
                                    reset({
                                        node: 'node',
                                        textMessage:'',
                                    })
                                }
                            } 
                            variant='contained' 
                            size='small' 
                            color="primary"
                        >
                            Cancel
                        </ButtonCustom>
                        <ButtonCustom variant='contained' size='small' color="secondary" type='submit' >
                            Save
                        </ButtonCustom>
                    </DialogActions>
                    <DialogActions>
                        <h3>Save Dialog</h3>
                        <br/>
                        <div>
                        <ButtonCustom
                            onClick={saveDialog} 
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
