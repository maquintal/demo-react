import React, { useState } from "react";
import clsx from "clsx";
import BuildingForm from "../src/building-form";
// import BuildingForm from "../src/building-formWithFormState";
import BuildingDialog from "../src/building-dialog";

import Fab from "@material-ui/core/Fab";
import Avatar from "@material-ui/core/Avatar";
import AddIcon from "@material-ui/icons/Add";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import CancelIcon from "@material-ui/icons/Cancel";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { red } from "@material-ui/core/colors";
import { FixedSizeList } from 'react-window';
import PropTypes from 'prop-types';

import {
  makeStyles,
  Grid,
  Button,
  Card,
  CardHeader,
  CardContent,
  CardActions,
  CardMedia,
  IconButton,
  Typography,
  ListItem,
  ListItemText,
  Collapse,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  root: {
    maxWidth: 345,
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

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Appartement # ${index + 1}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function Buildings() {
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
      <Grid container spacing={2}>
        <Grid item xs={4}>
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
              title="5655 Élie, Saint-Hubert, A1B 2C3"
              subheader="Agent: Martin Grégoire"
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
                <span style={{ fontWeight: "bold" }}> Obtenu le: </span>{" "}
                2021-08-26
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span style={{ fontWeight: "bold" }}>Propriétaire:</span>{" "}
                Gestion Maher&DuTremblay
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <EditIcon />
              </IconButton>
              <IconButton aria-label="share" color="secondary">
                <DeleteIcon />
              </IconButton>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
              <Typography variant="body2" color="textSecondary" component="p">Appartements</Typography>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <FixedSizeList
                  height={400}
                  width={300}
                  itemSize={46}
                  itemCount={200}
                >
                  {renderRow}
                </FixedSizeList>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
        <Grid item xs={4}>
          <Card className={classes.root}>
            <CardHeader
              avatar={
                <Avatar
                  aria-label="recipe"
                  className={classes.avatar}
                  src="/img/MAQ.jpg"
                ></Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="5655 Élie, Saint-Hubert, A1B 2C3"
              subheader="Agent: Martin Grégoire"
            />
            <CardMedia
              className={classes.media}
              image="/img/5645_Elie.jpg"
              title="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="textSecondary" component="p">
                <span style={{ fontWeight: "bold" }}>
                  Nombre d'appartements dans l'immeuble:
                </span>{" "}
                70
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span style={{ fontWeight: "bold" }}> Obtenu le: </span>{" "}
                2021-08-26
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                <span style={{ fontWeight: "bold" }}>Propriétaire:</span>{" "}
                construction Philippe DuTremblay
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <EditIcon />
              </IconButton>
              <IconButton aria-label="share" color="secondary">
                <DeleteIcon />
              </IconButton>

              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </IconButton>
              <Typography variant="body2" color="textSecondary" component="p">Appartements</Typography>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                <FixedSizeList
                  height={400}
                  width={300}
                  itemSize={46}
                  itemCount={200}
                >
                  {renderRow}
                </FixedSizeList>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
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
}
