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

import BuildingDialog from "../../building-dialog"
import BuildingForm from "../../building-form";

const BuildingCard = ({ building, classes }) => {
  const { formData } = building;

  const [openDialog, setOpenDialog] = React.useState(false);

  const handleClose = () => {
    setOpenDialog(false)
  }

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
            <IconButton aria-label="add to favorites" onClick={ () => setOpenDialog(true) }>
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
                <Typography className={classes.heading}>
                  Appartements
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>
                  Fool me once, shame on you. Fool Chuck Norris once and he will
                  roundhouse you in the face. Guns don't kill people. Chuck
                  Norris kills people Chuck Norris was once stuck in a rut, that
                  rut is now known as the Grand Canyon, Not even Google can find
                  Chuck Norris. A time paradox was invented when Chuck Norris
                  went back in time to raise himself. Now he has provoked the
                  event 2012. Chuck Norris does not kick ass and take names. In
                  fact, Chuck Norris kicks ass and assigns the corpse a number.
                  It is currently recorded to be in the billions, When Chuck
                  Norris sends in his taxes, he sends blank forms and includes
                  only a picture of himself, crouched and ready to attack. Chuck
                  Norris has not had to pay taxes, ever Chuck Norris doesn't
                  wash his clothes, he disembowels them, When Chuck Norris does
                  a pushup, he isn't lifting himself up, he's pushing the Earth
                  down Chuck Norris taught James Bond how to pick up girls Chuck
                  Norris doesn't go hunting... CHUCK NORRIS GOES KILLING Chuck
                  Norris plays hacky-sack...with a bowling ball When Chuck
                  Norris does a pushup, he isn't lifting himself up, he's
                  pushing the Earth down, The quickest way to a man's heart is
                  with Chuck Norris' fist. Guns don't kill people. Chuck Norris
                  kills people Chuck Norris invented Kentucky Fried Chicken's
                  famous secret recipe, with eleven herbs and spices. But nobody
                  ever mentions the twelfth ingredient: Fear. Superstitions all
                  revolve the same idea - Chuck Norris is the end result. Chuck
                  Norris once roundhouse kicked someone so hard that his foot
                  broke the speed of light, went back in time, and killed Amelia
                  Earhart while she was flying over the Pacific Ocean Chuck
                  Norris is currently suing NBC, claiming Law and Order are
                  trademarked names for his left and right legs, Chuck Norris
                  can win a game of Connect Four in only three moves Chuck
                  Norris uses pepper spray to spice up his steaks Someone once
                  videotaped Chuck Norris getting pissed off. It was called
                  Walker: Texas Chain Saw Massacre, Chuck Norris will attain
                  statehood in 2009. His state flower will be the Magnolia.
                  Chuck Norris can slam a revolving door, Someone once
                  videotaped Chuck Norris getting pissed off. It was called
                  Walker: Texas Chain Saw Massacre. Remember the Soviet Union?
                  They decided to quit after watching a DeltaForce marathon on
                  Satellite TV. There is no theory of evolution. Just a list of
                  creatures Chuck Norris has allowed to live, There is no theory
                  of evolution. Just a list of creatures Chuck Norris has
                  allowed to live. Chuck Norris will attain statehood in 2009.
                  His state flower will be the Magnolia, If Chuck Norris was in
                  Mortal Combat the fight would be over before it started, Chuck
                  Norris can throw paper airplanes into orbit. Sweating bullets
                  is actully what happens when Chuck Norris gets hot, Beard
                  spelled backwards spells Chuck Norris.
                </Typography>
              </AccordionDetails>
            </Accordion>
          </CardContent>
        </Card>
      </Grid>
      <BuildingDialog
        title="Si vide = Nouveau bâtiment. Sinon afficher le numero civique, la rue et la ville"
        openDialog={openDialog}
        // setOpenDialog={setOpenDialog}
        handleClose={handleClose}
      >
        <BuildingForm
          // handleChange={handleChange}
          formData={formData}
          // handleSnackBar={handleSnackBar}
        />
      </BuildingDialog>
    </>
  );
};

export default BuildingCard;
