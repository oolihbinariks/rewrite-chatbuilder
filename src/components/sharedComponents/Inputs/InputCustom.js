import React, { forwardRef } from 'react';
import {withStyles, TextField} from '@material-ui/core';

const Input = withStyles({
    root: {
        background:'#fff',
        borderRadius:'30px',
        '& label.Mui-focused':{
            color:'#000',
        },
        '& .MuiOutlinedInput-root':{
            borderRadius: "30px",
            '& .MuiSelect-select:focus':{
                background:"none"
            },
            '&.Mui-focused fieldset':{
                borderColor:'#ccc'
            },
            '& .MuiOutlinedInput-input':{
                // padding:'10px 15px'
            }, 
        },
    },
})(TextField);

export const StyledInput = forwardRef((props, ref)=>{
    return(
        <Input 
            variant='outlined' 
            margin='normal'
            size='small' 
            inputRef={ref} 
            fullWidth 
            {...props} 
        />
    )
})