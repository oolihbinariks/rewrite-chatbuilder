import React, { useEffect, useState } from 'react'

//import share components
import { StyledInput } from '../../components/sharedComponents/Inputs/InputCustom';
import { ButtonCustom } from '../../components/sharedComponents/Buttons/ButtonOutlined';

//import components and feature from material ui
import { Card, CardContent, DialogActions, DialogContent, DialogContentText, DialogTitle, FormControlLabel, Grid, makeStyles, MenuItem, Paper, Radio, RadioGroup } from '@material-ui/core';

//import features and hooks for react-redux state management
import { useDispatch, useSelector } from 'react-redux';

//import hooks and features for working with forms
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//import selectors
import { getCategoriesAll } from '../../store/selectors/templatesSelectors';
import { getPrepareCampaign } from '../../store/selectors/campaignsSelectors';

//import actionCreators
import { savePrepareCampaignSagaAction, setStepTypeAction } from '../../store/actions/CampaignsActions/campaignsActionCreators';

//import constants
import { CREATE_CAMP_STEP_TWO_ROUTE } from '../../constants/routesUrl';

//import other additional libraries
import { useHistory } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { DateTimePicker } from '../../components/sharedComponents/DateTimePicker';
import { getTime } from 'date-fns'

const useStyles = makeStyles((theme) => ({
    dialogAction:{
        paddingRight:'0px',
    },
    formRowBlock:{
        marginBottom:theme.spacing(2),
    },
    firstMenuItem:{
        paddingLeft:theme.spacing(2),
        paddingBottom: '0',
        marginBottom:'0'
    },
    dialogContentMenuItem:{
        paddingLeft:theme.spacing(2),
        paddingBottom:'0',
        marginBottom:'0'
    },
    menuItem:{
        paddingLeft:theme.spacing(4),
        paddingBottom: '0',
        marginBottom:'0',
    },
    root: {
        margin:'0 auto',
        maxWidth: '405px',
        minWidth: '120px',
        minHeight:'380px',
      },
      datePickWidth:{
          width:'225px',
          '& .MuiPickersBasePicker-container':{

              "& .MuiPickersBasePicker-pickerView":{
                minWidth:'290px !important'
              }
          }
      }
  }));

const campaignTypeSet = [
    {
        value:'singleEntry',
        label:'single entry'
    },
    {
        value:'multipleEntry',
        label:'multiple entry'
    },
]
//Set validation schema
const nodeDialogValidateSchema = yup.object({
    campaignName: yup.string().required('Please enter text message'),
    campaignCategory: yup
        .string()
        .test(
            'Campaign template',
            'Please select a campaign template',
            async value => (await value) !== "node",
        )
        .required('Please enter text message'),
    campaignType: yup.string('Please select campaign type ')
        .oneOf(campaignTypeSet.map(campaignType=>campaignType.value), "Please select a campaign type")
        .required("Please select campaign type"),
    campaignTemplate: yup.string('Please select dialog template')
        .required("Please select dialog template"),
})

const FormCreateCampaign = () => {
    //Initial classes, dispatch, router's params
    const classes = useStyles();
    const dispatch = useDispatch()
    let history = useHistory()

     //getting important data from Redux State
     const categoriesTemplates = useSelector(state => getCategoriesAll(state.templates))
     const prepareCampaign = useSelector(state => getPrepareCampaign(state))
     console.log("categoriesTemplates", categoriesTemplates);
     console.log("prepareCampaign", prepareCampaign);

    //Set useForm
    const defaultValues = {
        campaignCategory:prepareCampaign.campaignCategory, 
        campaignName:prepareCampaign.campaignName,
        campaignType:prepareCampaign.campaignType,
        campaignTemplate:prepareCampaign.campaignTemplate,
        datePick: prepareCampaign.datePick
    }
    const { handleSubmit, reset, watch, control, formState: { errors } } = useForm({
        defaultValues: defaultValues,
        resolver: yupResolver(nodeDialogValidateSchema)
    });

    const cancelHandler = ()=>{
        reset({
            campaignCategory:"node", 
            campaignName:'',
            campaignType:'',
            campaignTemplate:'',
            datePick: new Date()
        }) 
    }

    const saveData = (data) => {
        const newCampaign = {
            id: uuidv4(),
            campaignCategory: data.campaignCategory, 
            campaignName: data.campaignName,
            campaignType: data.campaignType,
            campaignTemplate: data.campaignTemplate,
            datePick: getTime(data.datePick)
        }
        dispatch(savePrepareCampaignSagaAction(newCampaign))
        dispatch(setStepTypeAction('stepTwo'))
        console.log(data)
        cancelHandler()
        history.push (CREATE_CAMP_STEP_TWO_ROUTE);
    };
       
    // Set side Effects
    const campaignTemplateCategoryId = watch("campaignCategory");
    const [selectTemplatesTrigger, setSelectTemplatesTrigger] = useState(null)
    useEffect(() => {
        categoriesTemplates.find(category=>category.id===campaignTemplateCategoryId)

        if (campaignTemplateCategoryId && campaignTemplateCategoryId !== 'node') {
            setSelectTemplatesTrigger(categoriesTemplates.find(category=>category.id===campaignTemplateCategoryId))
        }else{
            setSelectTemplatesTrigger(null)
        }
    }, [campaignTemplateCategoryId])
    
    return (
        <Paper>
            <form onSubmit = {handleSubmit(saveData)} autoComplete='off' >
                <Grid container>
                    <Grid item xs={12} md={6}>
                        <DialogTitle>Let's start with some campaign details:</DialogTitle>
                        <DialogContent>
                            <div className={classes.formRowBlock}>
                                <DialogContentText>
                                    Campaign Name
                                </DialogContentText>
                                <Controller 
                                    name='campaignName'
                                    defaultValue=""
                                    control={control}
                                    render={
                                        ({field}) => (             
                                            <StyledInput    
                                                {...field}
                                                label='Enter Category name'
                                                type='text' 
                                                error = {!!errors?.campaignName?.message}
                                                helperText = {errors?.campaignName?.message} 
                                            />      
                                        )
                                    }
                                /> 
                                
                            </div>
                            <div className={classes.formRowBlock}>
                                <DialogContentText>
                                    Campaign Template
                                </DialogContentText>
                                <Controller 
                                    name='campaignCategory'
                                    control={control}
                                    defaultValue="node"
                                    render={
                                        ({field}) => (             
                                            <StyledInput   
                                                {...field}
                                                label='Select Type of Category' 
                                                type='select' 
                                                select
                                                error = {!!errors?.campaignCategory?.message}
                                                helperText = {errors?.campaignCategory?.message}
                                            >
                                                <MenuItem className={classes.firstMenuItem} value={'node'}>
                                                        Choose Category
                                                </MenuItem>
                                                
                                                <DialogContentText className={classes.dialogContentMenuItem}>
                                                    Campaign Name
                                                </DialogContentText>

                                                {categoriesTemplates.map((option) => (
                                                    <MenuItem className={classes.menuItem} key={option.id} value={option.id}>
                                                        {option.name}
                                                    </MenuItem>
                                                ))} 
                                                <DialogContentText className={classes.dialogContentMenuItem}>
                                                    Create
                                                </DialogContentText>
                                                <MenuItem className={classes.menuItem} value={'createNew'}>
                                                        Create New
                                                </MenuItem>
                                            </StyledInput>
                                        )
                                    }
                                />             
                            </div>
                            <div className={classes.formRowBlock}>
                                <DialogContentText>
                                    Please choose Campaign Type
                                </DialogContentText>
                                <Controller 
                                    name='campaignType'
                                    defaultValue=""
                                    control={control}
                                    render={
                                        ({field:{name, onChange, onBlur, value, ref}}) => (             
                                            <RadioGroup name={name} onChange={onChange} onBlur={onBlur} value={value} ref={ref}>
                                                {campaignTypeSet.map(option=>(
                                                    <FormControlLabel key={option.value} value={option.value} control={<Radio />} label={option.label} />
                                                ))}
                                            </RadioGroup>
                                        )
                                    }
                                />             
                                    {errors?.campaignType?.message && <div style={{color:'red', marginLeft:'16px', fontSize:'0.875rem'}}>{errors?.campaignType?.message}</div>}
                            </div> 
                            <div className={classes.formRowBlock}>
                                <DialogContentText>
                                    Campaign Start Date
                                </DialogContentText>
                                <div className={classes.datePickWidth} >
                                    <Controller
                                        name='datePick'
                                        defaultValue={new Date()}
                                        control={control}
                                        render={
                                            ({field:{value, onChange}}) => (             
                                                <DateTimePicker
                                                    variant ='inline'
                                                    autoOk
                                                    disablePast
                                                    value={value}
                                                    onChange={onChange}
                                                />      
                                            )
                                        }
                                    /> 
                                </div>
                                
                            </div>
                            <DialogActions className={classes.dialogAction}>
                                <ButtonCustom
                                    onClick={cancelHandler} 
                                    varianttrig='contained'
                                    variant='contained' 
                                    size='small' 
                                    color="primary"
                                >
                                    Clear
                                </ButtonCustom>
                                <ButtonCustom varianttrig='contained' variant='contained' size='small' color="secondary" type='submit' >
                                    Create New Campaign
                                </ButtonCustom>
                            </DialogActions>
                        </DialogContent>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        {selectTemplatesTrigger && <div>
                            <Card className={classes.root} variant='elevation' >
                                <CardContent>
                                    <img 
                                        alt={selectTemplatesTrigger.name} 
                                        src={require(`../../assets/images/${selectTemplatesTrigger.img}`).default}  
                                        height='100%' 
                                        width='100%'
                                    />
                                    <div className={classes.formRowBlock}>
                                        <DialogContentText>
                                            Please choose Template
                                        </DialogContentText>
                                            <Controller 
                                                name='campaignTemplate'
                                                defaultValue=""
                                                control={control}
                                                render={
                                                    ({field:{name, onChange, onBlur, value, ref}}) => (             
                                                        <RadioGroup aria-label="gender" name={name} onChange={onChange} onBlur={onBlur} value={value} ref={ref}>
                                                            {selectTemplatesTrigger.templates.map(option=>(
                                                                <FormControlLabel key={option.id} value={option.id} control={<Radio />} label={option.name} />
                                                            ))}
                                                        </RadioGroup>
                                                    )
                                                }
                                            />             
                                                {
                                                    errors?.campaignTemplate?.message && 
                                                        <div style={{color:'red', marginLeft:'16px', fontSize:'0.875rem'}}>
                                                            {errors?.campaignTemplate?.message}
                                                        </div>
                                                }
                                    </div> 
                                </CardContent>
                            </Card>
                            
                            
                        </div>}
                    </Grid>
                </Grid>
            </form>
        </Paper>
    )

}

export default FormCreateCampaign
