import React, { useState } from "react";
// import BuildingForm from "../src/building-form";
import BuildingForm from "../src/building-formWithFormState";
import BuildingDialog from "../src/building-dialog";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Buildings() {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);

  const [formData, setFormData] = React.useState({
    civicNumber: "",
    street: "",
    city: "",
  })

  const handleChange = (event) => {
    setFormData({...formData, [event.target.name]: event.target.value});
  };

  return (
    <>
        {/* button in bottom of the page */}
      <Fab color="primary"  aria-label="add" className={classes.fab} onClick={() => setOpenDialog(true)}>
        <AddIcon />
      </Fab>
      <BuildingDialog
        title="Si vide = Nouveau bâtiment. Sinon afficher le numero civique, la rue et la ville"
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      >
        <BuildingForm
          handleChange={handleChange}
          formData={formData}
          // handleSnackBar={handleSnackBar}
        />
      </BuildingDialog>
    </>
  );
}