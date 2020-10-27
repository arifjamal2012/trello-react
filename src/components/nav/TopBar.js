import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {AppBar, Toolbar,Button} from '@material-ui/core';

const useStyle = makeStyles((theme) =>({
    AppBar: {
        background:'None',
    },
    title: {
        flexGrow: 1,
    },
    btn:{
        color: '#fff',
        backgroundColor: '#000'

    }
    
    
}));
export default function TopBar({setOpenSideMenu}) {
    const classes = useStyle();
    return(
        <div>
            <AppBar position='static' className={classes.AppBar} elevation={0}>
                <Toolbar>
                <h1 className={classes.title}>Daily todo</h1>
                <Button className={classes.btn} onClick={()=>setOpenSideMenu(true)}>
                    Change Background
                </Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}