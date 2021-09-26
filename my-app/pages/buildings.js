import React, { useEffect } from "react";
import axios from "axios";

import BuildingCard from "../src/components/buildings/building-card";
import BuildingDialog from "../src/building-dialog";
import BuildingForm from "../src/building-form";

import { red } from "@material-ui/core/colors";

import { makeStyles, Grid, Button } from "@material-ui/core";
import { flexbox } from "@material-ui/system";

// redux
import { useDispatch, useSelector } from "react-redux"
import { getBuildings, setSelectedBuilding } from "../src/store/rootSlice"

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
}));

const Buildings = ({ buildings }) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const [expanded, setExpanded] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);

  useEffect(() => {
    dispatch(getBuildings(buildings))
  }, [state.buildings])

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
          <Button variant="outlined" onClick={() => { dispatch(setSelectedBuilding({})); setOpenDialog(true) }}>
            Ajouter un immeuble
          </Button>
        </Grid>
      </Grid>

      <Grid container spacing={2} >
        {state.buildings?.map((building, index) => {
          return (
            <Grid item xs={4} className={classes.cardWrapper} key={index}>
              <BuildingCard
                building={building}
                classes={classes}
                expanded={expanded}
                handleExpandClick={handleExpandClick}
                key={building._id}
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
    const buildings = res.data;
    return { buildings };
  } catch (error) {
    return { error };
  }
};

export default Buildings;
