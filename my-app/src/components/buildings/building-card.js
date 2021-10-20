import React from "react";
import axios from 'axios';
import { useDispatch } from "react-redux"
import { useRouter } from 'next/router'

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

import BuildingDialog from "../buildings/building-dialog"
import BuildingForm from "../buildings/building-form";

import AppartmentDialog from "../appartments/appartment-dialog";
import AppartmentForm from "../appartments/appartment-form";

import { setSelectedBuilding } from "../../store/rootSlice"

import {ConfirmationDialog} from "../ConfirmationDialog";

const BuildingCard = ({ building, classes }) => {
  const { buildingInfo } = building;
  
  const dispatch = useDispatch()
  const router = useRouter()

  const [openDialog, setOpenDialog] = React.useState(false);
  const [openAppartmentDialog, setOpenAppartmentDialog] = React.useState(false);
  const [openConfirmDialog, setOpenConfirmDialog] = React.useState(false);

  const handleClose = () => {
    dispatch(setSelectedBuilding({}))
    setOpenDialog(false);
  };

  const handleCloseAppartmentDialog = () => {
    setOpenAppartmentDialog(false);
  };

  const handleCloseConfirmationDialog = () => {
    setOpenConfirmDialog(false);
  }

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
          title={`${buildingInfo.civicNumber} ${buildingInfo.street}, ${buildingInfo.city}, ${buildingInfo.zip_code}`}
          subheader={`${buildingInfo.rental_agent}`}
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
            onClick={() => {dispatch(setSelectedBuilding(building)), setOpenAppartmentDialog(true)}}
            // onClick={() => { dispatch(setSelectedBuilding(building)), router.push('/') }}
          >
            <Typography variant="body2" color="textSecondary" component="p">
              Appartements
            </Typography>
          </Button>
          <Button
            variant="outlined"
            onClick={() => { dispatch(setSelectedBuilding(building)), router.push('/') }}
          >
            <Typography variant="body2" color="textSecondary" component="p">
              route with state
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
            // onClick={() => deleteOneBuildingById(building._id)}
            onClick={() => setOpenConfirmDialog(true)}
          >
            <DeleteIcon />
          </IconButton>
        </CardActions>
        <CardContent></CardContent>
      </Card>

      <BuildingDialog
        title={`${buildingInfo.civicNumber} ${buildingInfo.street}, ${buildingInfo.city}, ${buildingInfo.zip_code}`}
        openDialog={openDialog}
        setOpenDialog={setOpenDialog}
        handleClose={handleClose}
      >
        <BuildingForm
          handleClose={handleClose}
        />
      </BuildingDialog>

      <AppartmentDialog
        // title={`${buildingInfo.civicNumber} ${buildingInfo.street}, ${buildingInfo.city}, ${buildingInfo.zip_code}`}
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

      <ConfirmationDialog
        message="voulez-vous couchez avec moi?"
        openDialog={openConfirmDialog}
        handleClose={handleCloseConfirmationDialog}
        onClick={() => {deleteOneBuildingById(building._id); setOpenConfirmDialog(false);}}
      />
    </>
  );
};

export default BuildingCard;
