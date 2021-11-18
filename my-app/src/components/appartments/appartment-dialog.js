import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

// import {  } from "../../store/rootSlice"

import { useDispatch, useSelector } from "react-redux"

import CloseIcon from '@material-ui/icons/Close';
import ActionButton from "../ActionButton";
import { addAppartmentToBuilding } from "../../store/rootSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  headerWrapper: {
    display: "flex",
    justifyContent: "space-between"
  }
}));

const AppartmentDialog = ({ title, children, openDialog, handleClose }) => {
  const classes = useStyles();
  const state = useSelector(state => state)
  const dispatch = useDispatch()

  const addAppartment = () => {
    dispatch(addAppartmentToBuilding({}))
  }
    return (
        <div>
          <Dialog open={openDialog} fullWidth={true} onClose={handleClose}>
            <DialogTitle>
              <div className={classes.headerWrapper}>
                <Typography variant='h6'>
                  Veuillez choisir l'appartement désiré.
                  </Typography>
                <ActionButton color="secondary"  onClick={() => handleClose()}>
                  <CloseIcon fontSize="large" />
                </ActionButton>
              </div>
            </DialogTitle>
            <DialogContent dividers>{children}</DialogContent>
          </Dialog>
        </div>
      );
};

export default AppartmentDialog;
