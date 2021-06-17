import React from "react";

import {
  Container,
  Grid,
  Card,
  CardHeader,
  CardContent,
  TextField,
  Select,
  MenuItem,
  CardActions,
  Button,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function BuildingForm() {
  const classes = useStyles();
  return (
    <>
      <Container>
        <div>
          <div title="5655 Elie, St-Hubert" />
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <TextField fullWidth label="Numéro civic" variant="outlined" />
              </Grid>
              <Grid item xs={3}>
                <TextField fullWidth label="Rue" variant="outlined" />
              </Grid>
              <Grid item xs={3}>
                <TextField fullWidth label="Ville" variant="outlined" />
              </Grid>
              <Grid item xs={2}>
                <TextField fullWidth label="Province" variant="outlined" />
              </Grid>
              <Grid item xs={2}>
                <TextField fullWidth label="Code Postal" variant="outlined" />
              </Grid>
              <Grid item xs={12}>
                <Select
                  fullWidth
                  variant="outlined"
                  labelId="demo-customized-select-label"
                  id="demo-customized-select"
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value="Martin Grégoire">Martin Grégoire</MenuItem>
                  <MenuItem value="Francis Campeau">Francis Campeau</MenuItem>
                  <MenuItem value="Marc-André Quintal">Marc-André Quintal</MenuItem>
                </Select>
              </Grid>
            </Grid>
          </div>
          <div spacing={2}>
              <Button variant="outlined" color="primary"> Sauvegarder</Button>
              <Button variant="outlined" color="primary"> Annuler</Button>
              <Button variant="outlined" color="secondary"> Supprimer</Button>
          </div>
        </div>
      </Container>
    </>
  );
}
