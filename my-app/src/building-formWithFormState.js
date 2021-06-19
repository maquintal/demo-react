import React from "react";
import axios from "axios"

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

export default function BuildingForm({handleChange, formData}) {
  const classes = useStyles();

  React.useEffect(() => {
    console.log(formData)
  }, [formData])

  const handleSave = (formData) => {
    // Send a POST request
    axios({
      method: 'post',
      url: 'http://localhost:3000/api/createOneDocIntoCollection',
      // data: { data: formData }
      data: { formData: formData }
    });
  }

  return (
    <>
      <Container>
        <div>
          <div title="5655 Elie, St-Hubert" />
          <div className={classes.root}>
            <Grid container spacing={3}>
              <Grid item xs={2}>
                <TextField 
                  fullWidth
                  label="Numéro civic"
                  name="civicNumber"
                  variant="outlined"
                  value={formData.civicNumber}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Rue"
                  name="street"
                  variant="outlined"
                  value={formData.street}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={3}>
                <TextField
                  fullWidth
                  label="Ville"
                  name="city"
                  variant="outlined"
                  value={formData.city}
                  onChange={handleChange}
                />
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
              <Button variant="outlined" color="primary" onClick={() => handleSave(formData)}> Sauvegarder</Button>
              <Button variant="outlined" color="primary"> Annuler</Button>
              <Button variant="outlined" color="secondary"> Supprimer</Button>
          </div>
        </div>
      </Container>
    </>
  );
}
