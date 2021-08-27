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

function renderRow({props}) {
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

const BuildingCard = ({ building, classes, expanded, handleExpandClick }) => {
  
    const {formData} = building
    


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
            title={`${formData.civicNumber} ${formData.street}, ${formData.city}, ${formData.zipCode}`}
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
            <Typography variant="body2" color="textSecondary" component="p">
              Appartements
            </Typography>
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
    </>
  );
};

export default BuildingCard;
