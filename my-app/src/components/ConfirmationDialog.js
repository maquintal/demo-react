import React from "react";

import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Typography,
  Button,
  makeStyles,
} from "@material-ui/core";
import PropTypes from 'prop-types';

// import {  } from "../../store/rootSlice"

// import { useDispatch, useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "30%",
    height: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  headerWrapper: {
    // display: "flex",
    // justifyContent: "space-between",
  },
}));

export function ConfirmationDialog({ children, openDialog, handleClose, onClick, message }) {
  const classes = useStyles();
  // const [value, setValue] = React.useState(valueProp);
  const radioGroupRef = React.useRef(null);

  // React.useEffect(() => {
  //   if (!open) {
  //     setValue(valueProp);
  //   }
  // }, [valueProp, open]);

  const handleEntering = () => {
    if (radioGroupRef.current != null) {
      radioGroupRef.current.focus();
    }
  };

  const handleCancel = () => {
    handleClose();
  };

  const handleOk = () => {
    handleClose(/* value */);
  };

  return (
    <div>
      <Dialog
        open={openDialog}
        maxWidth="xl"
        fullWidth={true}
        onClose={handleClose}
        className={classes.root}
      >
        <DialogTitle>
          {message}
        </DialogTitle>
        <DialogContent dividers>{children}</DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleCancel}>
            Cancel
          </Button>
          <Button onClick={onClick}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
