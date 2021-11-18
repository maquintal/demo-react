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

import { useDispatch, useSelector } from "react-redux";

import CloseIcon from "@material-ui/icons/Close";
import ActionButton from "../ActionButton";
import { addAppartmentToBuilding } from "../../store/rootSlice";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  headerWrapper: {
    display: "flex",
    justifyContent: "space-between",
  },
}));

const CorpiqDialog = ({ title, children, openDialog, handleClose }) => {
  const classes = useStyles();
  const state = useSelector((state) => state);

  return (
    <div>
      <Dialog
        open={openDialog}
        fullWidth={true}
        maxWidth="lg"
        onClose={handleClose}
      >
        <DialogTitle>
          <div className={classes.headerWrapper}>
            <Typography variant="h6">
              Veuillez compléter le formulaire pour entrer une nouvelle enquête de Crédit
            </Typography>
            <ActionButton color="secondary" onClick={() => handleClose()}>
              <CloseIcon fontSize="large" />
            </ActionButton>
          </div>
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </div>
  );
};

export default CorpiqDialog;
