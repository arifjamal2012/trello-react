import React from 'react';
import {Paper, InputBase, Button} from '@material-ui/core';
import ClearIcon from '@material-ui/icons/Clear';

export default function InputCard() {
    return (
        <div>
            <div>
            <Paper>
                <InputBase multiline fullWidth />
            </Paper>  
            </div>
            <div>
                <Button>Add Card</Button>
                <ClearIcon />
            </div>
        </div>
    )
}
