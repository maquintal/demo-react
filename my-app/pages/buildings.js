import React, { useEffect } from "react";
import axios from "axios";

import BuildingCard from "../src/components/buildings/building-card";
import BuildingDialog from "../src/components/buildings/building-dialog"
import BuildingForm from "../src/components/buildings/building-form";

// import { red } from "@material-ui/core/colors";

import { makeStyles, Grid, Button, LinearProgress } from "@material-ui/core";
// import { flexbox } from "@material-ui/system";

// redux
import { useDispatch, useSelector } from "react-redux"
import { getBuildings, setSelectedBuilding } from "../src/store/rootSlice"
import { useGetPokemonByNameQuery } from "../src/store/service/pokemon"

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

const Buildings = () => {
  const classes = useStyles();
  const dispatch = useDispatch()
  const state = useSelector(state => state)
  const [expanded, setExpanded] = React.useState(false);
  const [openDialog, setOpenDialog] = React.useState(false);
  // const [buildings, setBuildings] = React.useState([]) don't know if it will be used

  const { data, error, isLoading } = useGetPokemonByNameQuery()

  useEffect(() => {
    console.log("43")
    dispatch(getBuildings(data))
  }, [data, state.reducer.selectedBuilding])

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleClose = () => {
    console.log("allo")
    const test = useGetPokemonByNameQuery()
    console.log(test)
    dispatch(setSelectedBuilding({}))
    setOpenDialog(false);
  };

  if (isLoading) {
    return <LinearProgress />
  }

  if (error) {
    return "error"
  }

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
        {state.reducer.buildings?.map((building, index) => {
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
        <BuildingForm
          isLoading={isLoading}
          // handleClose={handleClose}
        />
      </BuildingDialog>
    </>
  );
};

export default Buildings;
