import React, { Component, useEffect } from "react";
import { useRouter } from 'next/router'

import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Typography,
} from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { setSelectedAppartment } from "../../store/rootSlice";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const AppartmentForm = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter()
  const state = useSelector((state) => state);

  // eventually create a routing pages

  return (
    <>
      {state?.reducer?.selectedBuilding?.appartments.map(
        (appartment, index) => {
          return (
            <>
              <List>
                <ListItem
                  button
                  onClick={() => {
                    dispatch(setSelectedAppartment(appartment),
                    router.push(`/appartment/${appartment._id}`));
                  }}
                >
                  {" "}
                  
                    <ListItemText primary={appartment._id} />
                </ListItem>
              </List>
            </>
          );
        }
      )}
    </>
  );
};

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export default AppartmentForm;
