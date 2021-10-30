import React, { useState } from 'react'
import { StyledInput } from '../../../../components/sharedComponents/Inputs/InputCustom';
import { Avatar, Chip, Fab, IconButton, makeStyles } from '@material-ui/core';
import Add from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
const useStyles = makeStyles((theme) => ({
    fab:{
        marginLeft: theme.spacing(1),
        padding: 0,
    },
    selectBlock:{
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',
        marginBottom:theme.spacing(2),
    },
    option:{
        width:'80%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    optionEdit:{
        width:'100%',
        display: 'flex',
        justifyContent: 'space-between',
    },
    deleteIconPrimary: {
        '&.MuiAvatar-root':{
            width:'30px',
            height:'30px',
          backgroundColor: theme.palette.background.main,
          color: theme.palette.text.primary,
          borderRadius:'50%',
          border:`1px solid ${theme.palette.background.main}`,
          '& :hover':{
            boxSizing: 'content-box',
            padding:'6px',
            backgroundColor: "white",
            borderRadius:'50%',
            border:`1px solid ${theme.palette.background.main}`,
    
          },
        },
      },
    editOptionBlock:{
        margin:'5px',
        padding:'5px 5px',
        display:'flex',
        alignItems:'center',
        justifyContent:'space-between',

    }
}));

export const AddOptions = ({options, setOptions}) =>{
    const classes = useStyles();

    const [textOption, setTextOption] = useState('')
    const [errorText, setErrorText] = useState('')
    const optionHandler = (e) =>{
        setTextOption(e.target.value)
        setErrorText('')
    }
    const addOptionHandler = () =>{
        if (!textOption || textOption.trim()==='') {
            setErrorText('Enter Option Name!')
        }else{
            setOptions([...options, {id: options.length + 1, optionText: textOption}])
            setErrorText('')
            setTextOption('')
        }
    }

    const acceptEditOptionHandler = (e, id) => {
        if (!selectedOption || selectedOption.trim()==='') {
            setErrorTextEditOpt('Enter Option Name!')
        }else{
            setOptions([...options.map(option =>{
                if(option.id === id){
                    return{...option, optionText: selectedOption}
                }else{
                    return option
                }
            })])
            setEdit(false)
        }
    }

    ////edit state option
    const [edit, setEdit] = useState(null)
    const editTurn = (option)=>{
        setEdit(option)
        setSelectedOption(option.optionText)
    }
    ///selectedOption state
    const [selectedOption, setSelectedOption] = useState("")
    const handlereditOption = (e)=>{
        setSelectedOption(e.target.value)
        setErrorTextEditOpt('')
    }
    const deleteOption = (id)=>{
        setOptions(options.filter(option=>option.id !== id))
    }
    /// errorText edit option
    const [errorTextEditOpt, setErrorTextEditOpt] = useState('')
    const optionsSet = (options && options.length>0) ? options.map(option => {
        if (edit && edit?.id === option.id) {
            return(
                <div key={option.id} className={classes.selectBlock}>
                    <StyledInput
                        autoFocus
                        variant='outlined' 
                        label='Enter Option Name' 
                        size='small'
                        type='text' 
                        id='options'
                        value={selectedOption}
                        onBlur={(e)=>(acceptEditOptionHandler(e, option.id))}
                        onChange={handlereditOption}
                        error = {(errorTextEditOpt ? true : false)}
                        helperText = {(errorTextEditOpt) ? errorTextEditOpt : ''}
                        fullWidth
                    />
                </div>
            )
        }else{
            return(
                <div className={classes.editOptionBlock} key = {option.id}>
                    <Chip 
                        className={classes.optionEdit} 
                        label={option.optionText} 
                        deleteIcon={
                            <IconButton onClick={()=>deleteOption(option.id)} edge="end" aria-label="delete">
                                <Avatar aria-label="recipe" className={classes.deleteIconPrimary}>
                                    <DeleteIcon />
                                </Avatar>
                            </IconButton>
                        }
                        color='default'
                        variant='default' 
                        onClick={()=>editTurn(option)}
                        onDelete={()=>deleteOption(option.id)}
                    /> 
                </div>
            )
        }
    }) : "";
    return(
        <React.Fragment>
            <div>
                {optionsSet}
            </div>
            <div className={classes.selectBlock}>
                <StyledInput
                    className={classes.option} 
                    variant='outlined' 
                    label='Enter Option Name' 
                    size='small'
                    type='text' 
                    id='options'
                    value={textOption}
                    onChange={optionHandler}
                    error = {(errorText ? true : false)}
                    helperText = {(errorText) ? errorText : ''}
                    fullWidth
                />
                <Fab size='small' className={classes.fab} color="primary" aria-label="add" onClick={addOptionHandler}>
                    <Add />
                </Fab>
            </div>
        </React.Fragment>
    )
}       