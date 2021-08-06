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

import { Input } from "./FormComponents/formComponents";
import { useForm } from "react-hook-form";

import { makeStyles } from "@material-ui/core/styles";
import { SelectInput } from "./FormComponents/SelectFormComponent";

import CustomizedSnackbars from "./snackbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function BuildingForm(formData) {

  const { control, handleSubmit } = useForm();
  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState("");
  const [snackMessage, setSnackMessage] = React.useState("")
  const classes = useStyles();

  const options = [
    "Martin Grégoire",
    "Francis Campeau",
    "Katherine Handfield"
  ]

  const onSubmit = (data) => {
  };

  React.useEffect(() => {
  }, [formData])

  const handleSave = async (formData) => {
    // Send a POST request
      axios({
        method: 'post',
        url: 'http://localhost:3000/api/buildings/createOneBuilding',
        data: { formData: formData }
      }).then(async response => {
        if (response.status === 200) {
          await setSeverity("success")
          await setSnackMessage(`Record Created`)
        }
        console.log(response)
    }).catch(async error => {
      await setSeverity("error")
      await setSnackMessage(`${error}`)
      return (`${error}`)
    });

    setOpen(true)

  }

  return (
    <>
      <Container>
        <div>
          <div title="5655 Elie, St-Hubert" />
          <div className={classes.root}>
            <form>
              <Grid container spacing={3}>
                <Grid item xs={4}>
                  <Input
                    control={control}
                    name="civicNumber"
                    label="Numero Civic"
                  />
                </Grid>
              </Grid>
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Input control={control} name="street" label="Rue" />
                </Grid>
                <Grid item xs={12}>
                  <Input control={control} name="city" label="Numero Civic" />
                </Grid>
                <Grid item xs={6}>
                  <Input
                    control={control}
                    name="province"
                    label="Numero Civic"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Input
                    control={control}
                    name="zip_code"
                    label="Numero Civic"
                  />
                </Grid>
                <Grid item xs={6}>
                  <SelectInput
                    control={control}
                    label="Agent De location"
                    name="rental_agent"
                    options={options}
                  />
                </Grid>
              </Grid>
            </form>
          </div>
          <div spacing={2}>
            <Button
              variant="outlined"
              color="primary"
              onClick={handleSubmit(handleSave)}
            >
              {" "}
              Sauvegarder
            </Button>
            <Button variant="outlined" color="primary">
              {" "}
              Annuler
            </Button>
            <Button variant="outlined" color="secondary">
              {" "}
              Supprimer
            </Button>
          </div>
        </div>
      </Container>
      {open &&
        <CustomizedSnackbars
          openned={open}
          severity={severity}
          message={snackMessage}
        />
      || null}
    </>
  );
}
