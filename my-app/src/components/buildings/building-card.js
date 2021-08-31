import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Collapse,
  Grid,
  IconButton,
  Typography,
  Avatar,
  AccordionSummary,
  AccordionDetails,
  Accordion,
} from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import clsx from "clsx";
import { FixedSizeList } from "react-window";
import PropTypes from "prop-types";

const BuildingCard = ({ building, classes }) => {
  const { formData } = building;

  return (
    <>
      <Grid item xs={4}>
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
              <span style={{ fontWeight: "bold" }}> Obtenu le: </span>{" "}
              2021-08-26
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <span style={{ fontWeight: "bold" }}>Propriétaire:</span> Gestion
              Maher&DuTremblay
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <EditIcon />
            </IconButton>
            <IconButton aria-label="share" color="secondary">
              <DeleteIcon />
            </IconButton>
            <Typography variant="body2" color="textSecondary" component="p">
              Appartements
            </Typography>
          </CardActions>
          <CardContent>
            <Accordion>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>Appartements</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Ici ajouter une LIST avec les appartements a afficher
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
};

export default BuildingCard;
