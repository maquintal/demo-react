import React, { useEffect } from "react";

import { useDispatch } from "react-redux";

import {setSelectedBuilding} from '../../store/rootSlice'

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

import ActionButton from "../ActionButton";

import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    paddingRight: "0px",
  },
}));

export default function BuildingDialog({
  title,
  children,
  openDialog,
  setOpenDialog,
  handleClose
  /* , setOpenDialog */
}) {

  const classes = useStyles();
  const dispatch = useDispatch();

 const handleKeyPress = () => (event) => {
    if(event.key === 27){
      console.log('esc press here! ')
    }
  }

  useEffect(()=>{
    handleClose()
  },[])

  return (
    <div>
      <Dialog open={openDialog} maxWidth="md" onClose={handleClose} >
        <DialogTitle className={classes.dialogTitle}>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <ActionButton color="secondary" onClick={() => {
              /* setOpenDialog(false); */
              dispatch(setSelectedBuilding({}));
              handleClose();
              }}>
              <CloseIcon fontSize="large" />
            </ActionButton>
          </div>
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </div>
  );
}
