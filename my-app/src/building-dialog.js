import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";

import ActionButton from "../src/components/ActionButton";

import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  dialogTitle: {
    paddingRight: "0px",
  },
}));

export default function BuildingDialog(props) {
  const { title, children, openDialog, setOpenDialog } = props;
  const classes = useStyles();
  return (
    <div>
      <Dialog open={openDialog} maxWidth="md">
        <DialogTitle className={classes.dialogTitle}>
          <div style={{ display: "flex" }}>
            <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
              {title}
            </Typography>
            <ActionButton color="secondary" onClick={() => setOpenDialog(false)}>
              <CloseIcon fontSize="large" />
            </ActionButton>
          </div>
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
      </Dialog>
    </div>
  );
}
