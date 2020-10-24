import React from 'react';
import { Paper,Typography } from '@material-ui/core';
import {fade, makeStyles} from '@material-ui/core/styles';
import InputCard from './InputCard'

const useStyle = makeStyles((theme) => ({
    root: {
        marginTop: theme.spacing(2),
        
    },
    addCard: {
        padding: theme.spacing(1,1,1,2),
        margin: theme.spacing(0,1,1,1),
        background: '#ebecf0',
        '&:hover':{
            backgroundColor: fade('#000',0.25)
        }
    },
}));

export default function InputContainer() {
    const classes = useStyle();
    return (
        <div className={classes.root}>
            <InputCard />
            <Paper className={classes.addCard} evaluation={0}>
                <Typography>
                   + Add a card
                </Typography>
            </Paper>
        </div>
    )
}
