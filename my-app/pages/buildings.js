import React, { useState } from "react";
import axios from "axios";

import BuildingForm from "../src/building-form";
// import BuildingForm from "../src/building-formWithFormState";
import BuildingDialog from "../src/building-dialog";
import BuildingCard from "../src/components/buildings/building-card";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import CancelIcon from "@material-ui/icons/Cancel";
import { red } from "@material-ui/core/colors";

import {
  makeStyles,
  Grid,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  IconButton,
  ListItem,
  ListItemText,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  expand: {
    transform: "rotate(0deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: "rotate(180deg)",
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

const Buildings = ({ buildings }) => {
  const classes = useStyles();
  const [openDialog, setOpenDialog] = React.useState(false);
  const [openForm, setOpenForm] = React.useState(false);
  const [expanded, setExpanded] = React.useState(false);

  const [formData, setFormData] = React.useState({
    civicNumber: "",
    street: "",
    city: "",
  });

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

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
      Ici dans le code, changer le grid form pour y ajouter un component pour
      alleger le code
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
      {/* ici est la section card pour les buildings a changer eventuellement pour un component */}
      <Grid container direction="row" alignItems="center" justify="center">
        {buildings?.map((building) => {
          return (
            <BuildingCard
              building={building}
              classes={classes}
              expanded={expanded}
              handleExpandClick={handleExpandClick}
            />
          );
        })}
      </Grid>
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
};

Buildings.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get(
      "http://localhost:3000/api/buildings/readAllBuildings"
    );
    console.log(res);
    const buildings = res.data;
    return { buildings };
  } catch (error) {
    return { error };
  }
};

export default Buildings;
