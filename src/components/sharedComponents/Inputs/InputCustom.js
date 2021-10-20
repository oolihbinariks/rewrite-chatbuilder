import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


export const StyledInput = withStyles({
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
                // padding:'10px 14px'
            }, 
        },
    },
  })(TextField);
  