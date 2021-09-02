import React from "react";
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

const BuildingCard = ({ building, classes }) => {
  const { formData } = building;

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Card className={classes.root} key={building?._id}>
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
          <Button variant="outlined">
            <Typography variant="body2" color="textSecondary" component="p">
              Appartements
            </Typography>
          </Button>
          <IconButton
            aria-label="add to favorites"
            onClick={() => setOpenDialog(true)}
          >
            <EditIcon />
          </IconButton>
          <IconButton aria-label="share" color="secondary">
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
        <BuildingForm
          buildingId={building._id}
          formData={formData}
        />
      </BuildingDialog>
    </>
  );
};

export default BuildingCard;
