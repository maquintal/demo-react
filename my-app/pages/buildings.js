import React from "react";
import BuildingForm from "../src/building-form";

import { Card } from "@material-ui/core";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";

import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  fab: {
    position: "absolute",
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
}));

export default function Buildings() {
  const classes = useStyles();
  return (
    <>
        {/* button in bottom of the page */}
      <Fab color="primary"  aria-label="add" className={classes.fab}>
        <AddIcon />
      </Fab>
      <BuildingForm/>
    </>
  );
}
