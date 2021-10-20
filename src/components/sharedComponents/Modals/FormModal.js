import React from 'react';
import Dialog from '@material-ui/core/Dialog';
const FormModal = ({children, open, onClose}) => {
    return (
        <Dialog fullWidth open={open} onClose={onClose} aria-labelledby="form-dialog-title">
            {children}
        </Dialog>
    )
}

export default FormModal
