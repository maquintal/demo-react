import React, { useState } from "react";
import BuildingForm from "../src/building-form";
// import BuildingForm from "../src/building-formWithFormState";
import BuildingDialog from "../src/building-dialog";

import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CancelIcon from "@material-ui/icons/Cancel";

import {
  makeStyles,
  Grid,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
} from "@material-ui/core";

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
  const [openForm, setOpenForm] = React.useState(false);

  const [formData, setFormData] = React.useState({
    civicNumber: "",
    street: "",
    city: "",
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const addNewBuilding = () => {
    setOpenForm(true);
  };

  const closeOpenedForm = () => {
    setOpenForm(false);
  };


  return (
    <>
      {/* button in bottom of the page */}
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={() => setOpenDialog(true)}
      >
        <AddIcon />
      </Fab>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="outlined" onClick={addNewBuilding}>
            Ajouter un immeuble
          </Button>
        </Grid>
      </Grid>
      {(openForm && (
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Card mt={3} variant="outlined" elevation={3}>
              <CardHeader
                action={
                  <IconButton
                    aria-label="settings"
                    color="secondary"
                    onClick={closeOpenedForm}
                  >
                    <CancelIcon />
                  </IconButton>
                }
                title="Ajouter un nouveau batiment"
                // subheader="September 14, 2016"
              />
              <CardContent>
                <BuildingForm
                  handleChange={handleChange}
                  formData={formData}
                  // handleSnackBar={handleSnackBar}
                />
              </CardContent>
              <CardActions>
                <Button
                  variant="outlined"
                  color="primary"
                  // onClick={handleSubmit(handleSave)}
                >
                  Sauvegarder
                </Button>
                <Button variant="outlined" color="primary">
                  {" "}
                  Annuler
                </Button>
                <Button variant="outlined" color="secondary">
                  {" "}
                  Supprimer
                </Button>
                <Button
                  variant="outlined"
                  color="secondary"
                  onClick={() => checkFormState()}
                >
                  {" "}
                  FormState
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      )) ||
        null}
      {/* <BuildingDialog
        title="Si vide = Nouveau bâtiment. Sinon afficher le numero civique, la rue et la ville"
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
      >
        <BuildingForm
          handleChange={handleChange}
          formData={formData}
          // handleSnackBar={handleSnackBar}
        />
      </BuildingDialog> */}
    </>
  );
}
