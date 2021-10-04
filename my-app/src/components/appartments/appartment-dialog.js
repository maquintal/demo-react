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
import { setSelectedBuilding } from "../../store/rootSlice";

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
  const dispatche = useDispatch()

  const addAppartment = () => {
    console.log(state.reducer.selectedBuilding.buildingInfo.appartments)
  }
    return (
        <div>
          <Dialog open={openDialog} maxWidth="xl" fullWidth={true}>
            <DialogTitle /*className={classes.dialogTitle}*/>
              <div className={classes.headerWrapper}>
              <Button variant="outlined" component="div" onClick={() => {addAppartment()}}>
                Ajouter un appartement
                </Button>
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
