import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";


import CloseIcon from '@material-ui/icons/Close';
import ActionButton from "../ActionButton";

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
    return (
        <div>
          <Dialog open={openDialog} maxWidth="xl" fullWidth={true}>
            <DialogTitle /*className={classes.dialogTitle}*/>
              <div className={classes.headerWrapper}>
              <Button variant="outlined" component="div">Ajouter un appartement</Button>
                {/* <Typography variant="h6" component="div" style={{ flexGrow: 1 }}>
                  {title}
                </Typography> */}
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
