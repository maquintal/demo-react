import React, { useState } from "react";
import axios from "axios";

import BuildingCard from "../src/components/buildings/building-card";
import BuildingDialog from "../src/building-dialog";
import BuildingForm from "../src/building-form";

import { red } from "@material-ui/core/colors";

import { makeStyles, Grid, Button } from "@material-ui/core";
import { flexbox } from "@material-ui/system";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: "relative",
    overflow: "auto",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  cardWrapper: {
    display: flexbox,
    justifyContent: "center",
  }
}));

const Buildings = ({ buildings }) => {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Button variant="outlined" onClick={() => setOpenDialog(true)}>
            Ajouter un immeuble
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} >
        {buildings?.map((building) => {
          return (
            <Grid item xs={4} className={classes.cardWrapper}>
              <BuildingCard
                building={building}
                classes={classes}
                expanded={expanded}
                handleExpandClick={handleExpandClick}
              />
            </Grid>
          );
        })}
      </Grid>
      <BuildingDialog
        title={`Ajouter un immeuble`}
        openDialog={openDialog}
        handleClose={handleClose}
      >
        <BuildingForm />
      </BuildingDialog>
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
