import React from 'react';
import {Paper, Typography,CssBaseline} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import Title from './Title';
import Card from './Card';

const useStyle = makeStyles((theme) => ({
    root: {
        width: 300,
        backgroundColor: '#ebecf0',
        marginLeft: theme.spacing(1),
    },
}))

export default function List() {
    const classes = useStyle();
    return (
        <div>
            <Paper className={classes.root}>
                <CssBaseline />
                <Title/>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Paper>
        </div>
    );
}
