import React from "react";
import axios from 'axios';
import { useDispatch } from "react-redux"

import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
  Avatar,
  Button,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";

import BuildingDialog from "../../building-dialog";
import BuildingForm from "../../building-form";

import AppartmentDialog from "../appartments/appartment-dialog";
import AppartmentForm from "../appartments/appartment-form";

import { setSelectedBuilding } from "../../store/rootSlice"

const BuildingCard = ({ building, classes }) => {
  const { formData } = building;
  
  const dispatch = useDispatch()

  const [openDialog, setOpenDialog] = React.useState(false);
  const [openAppartmentDialog, setOpenAppartmentDialog] = React.useState(false);

  const handleClose = () => {
    setOpenDialog(false);
  };

  const handleCloseAppartmentDialog = () => {
    setOpenAppartmentDialog(false);
  };

  const deleteOneBuildingById = async (id) => {
    // Send a POST request
    axios({
      method: "delete",
      url: "http://localhost:3000/api/buildings/deleteOneBuilding",
      data: { id: id },
    })
      .then(async (response) => {
        if (response.status === 200) {
          // await setSeverity("success");
          // await setSnackMessage(`Record Created`);
        }
        console.log('response ', response);
      })
      .catch(async (error) => {
        // await setSeverity("error");
        // await setSnackMessage(`${error}`);
        return `${error}`;
      });
  };

  return (
    <>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar
              aria-label="recipe"
              className={classes.avatar}
              src="/img/greg.jpg"
            ></Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={`${formData.civicNumber} ${formData.street}, ${formData.city}, ${formData.zip_code}`}
          subheader={`${formData.rental_agent}`}
        />
        <CardMedia
          className={classes.media}
          image="/img/5655_Elie.jpg"
          title="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            <span style={{ fontWeight: "bold" }}>
              Nombre d'appartements dans l'immeuble:
            </span>{" "}
            45
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span style={{ fontWeight: "bold" }}> Obtenu le: </span> 2021-08-26
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            <span style={{ fontWeight: "bold" }}>Propriétaire:</span> Gestion
            Maher&DuTremblay
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            variant="outlined"
            onClick={() => setOpenAppartmentDialog(true)}
          >
            <Typography variant="body2" color="textSecondary" component="p">
              Appartements
            </Typography>
          </Button>
          <IconButton
            aria-label="add to favorites"
            onClick={() => { dispatch(setSelectedBuilding(building)); setOpenDialog(true) }}
          >
            <EditIcon />
          </IconButton>
          <IconButton
            aria-label="share"
            color="secondary"
            onClick={() => deleteOneBuildingById(building._id)}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
        <CardContent></CardContent>
      </Card>

      <BuildingDialog
        title={`${formData.civicNumber} ${formData.street}, ${formData.city}, ${formData.zip_code}`}
        openDialog={openDialog}
        handleClose={handleClose}
      >
        <BuildingForm building={building} />
      </BuildingDialog>

      <AppartmentDialog
        // title={`${formData.civicNumber} ${formData.street}, ${formData.city}, ${formData.zip_code}`}
        title="test"
        openDialog={openAppartmentDialog}
        handleClose={handleCloseAppartmentDialog}
      >
        {/* 
        ======================================
        TO REFACTOR INTO COMPONENTS 
        ======================================*/}
        <AppartmentForm />
      </AppartmentDialog>
    </>
  );
};

export default BuildingCard;
