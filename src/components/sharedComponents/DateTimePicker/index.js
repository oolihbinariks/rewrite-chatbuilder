import React from 'react'
import DateFnsUtils from '@date-io/date-fns';
import {
    KeyboardDateTimePicker,
    MuiPickersUtilsProvider,
  } from '@material-ui/pickers';
import { StyledInput } from '../Inputs/InputCustom';

export const DateTimePicker = (props)=> {
        return (
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDateTimePicker 
                inputVariant='outlined'
                // variant='inline'
                // autoOk
                TextFieldComponent={StyledInput}
                format="dd/MM/yyyy HH:mm"
                {...props}
              />
            </MuiPickersUtilsProvider>
    )
}