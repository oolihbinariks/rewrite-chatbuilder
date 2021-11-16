import React from 'react'
import { DialogActions, DialogContent, DialogTitle, makeStyles} from '@material-ui/core';

import { ButtonCustom } from '../Buttons/ButtonOutlined';

const useStyles = makeStyles((theme) => ({
    dialogAction:{
        paddingRight:'0',
    }
  }));

const ConfirmDel = ({onClose, deleteElemHandler}) => {
    const classes = useStyles();
    return (
        <>         
            <DialogTitle id="form-dialog-title">Are you sure you want to delete that?</DialogTitle>
            <DialogContent>
                <DialogActions className={classes.dialogAction}>
                    <ButtonCustom onClick={onClose} varianttrig='contained' variant='contained' size='small' color="primary">
                        Cancel
                    </ButtonCustom>
                    <ButtonCustom onClick={deleteElemHandler} varianttrig='contained' variant='contained' size='small' color="secondary" type='submit' >
                        Confirm
                    </ButtonCustom>
                </DialogActions>
            </DialogContent>
        </>
    )

}

export default ConfirmDel
