import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Drawer} from '@material-ui/core'

const useStyles = makeStyles((theme) =>({
    drawer:{
      width: '350px',
    }
}))

export default function SideMenu({setOpenSideMenu,openSideMenu}) {
  const classes = useStyles();
  return (
    <div>
      <Drawer open={openSideMenu} anchor='right'
      onClose={()=>setOpenSideMenu(false)}>
      <div className={classes.drawer}>
        <h1>Hello SideMenu</h1>
      </div>
      </Drawer>
    </div>
  )
  
}