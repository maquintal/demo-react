import React, { useMemo } from "react";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"

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
import { useForm, useFieldArray } from "react-hook-form";

import { makeStyles } from "@material-ui/core/styles";
import { SelectInput } from "./FormComponents/SelectFormComponent";
import { Checkbox1 } from "./FormComponents/CheckboxFormComponents";

import CustomizedSnackbars from "./snackbar";

import { setSelectedBuilding } from "../src/store/rootSlice"

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function BuildingForm() {

  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const { control, handleSubmit, getValues } = useForm({
    defaultValues: state?.selectedBuilding?.formData || {}
  });

  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState("");
  const [snackMessage, setSnackMessage] = React.useState("")
  const classes = useStyles();

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "test", // unique name for your Field Array
    // keyName: "id", default to "id", you can change the key name
  });

  const options = [
    "Martin Grégoire",
    "Francis Campeau",
    "kjiki",
    "Katherine Handfield"
  ]

  const onSubmit = (data) => {
    // console.log(data)
    dispatch(setSelectedBuilding(data))
  };

  const checkFormState = () => {
    const values = getValues();
    console.log(values)
  }

  const handleSave = async (formData) => {
    console.log(state.selectedBuilding)
    // try {
    //   dispatch(setSelectedBuilding(formData))
    // } catch (error) {
    //   throw new Error(error)
    // }
    // console.log(state.selectedBuilding.formData)
    // // Send a POST request
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:3000/api/buildings/createOneBuilding',
    //   data: { formData: formData }
    // }).then(async response => {
    //   if (response.status === 200) {
    //     await setSeverity("success")
    //     await setSnackMessage(`Record Created`)
    //   }
    //   console.log(response)
    // }).catch(async error => {
    //   await setSeverity("error")
    //   await setSnackMessage(`${error}`)
    //   return (`${error}`)
    // });

    setOpen(true)

  }

  return (
    <>
        <div>
          <div title="5655 Elie, St-Hubert" />
          <div className={classes.root}>
            <form onSubmit={handleSubmit(onSubmit)}>
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
                  <Input control={control} name="city" label="Ville" />
                </Grid>
                <Grid item xs={6}>
                  <Input
                    control={control}
                    name="province"
                    label="Province"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Input
                    control={control}
                    name="zip_code"
                    label="Code Postal"
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
                <Grid item xs={6}></Grid>
                {fields.map((field, index) => {
                  return (
                    <Grid item xs={12} key={`${field}-${index}`}>

                      <Grid item>
                        <button type="button" onClick={() => remove(index)}>Delete</button>
                      </Grid>
                      <Grid item>
                        <Input
                          control={control}
                          name={`test.${index}.appNumber`}
                          label="First Name"
                        />
                      </Grid>
                      <Grid item>
                        <Input
                          control={control}
                          name={`test.${index}.primaryFirstName`}
                          label="First Name"
                        />
                      </Grid>
                      <Grid item>
                        <Input
                          control={control}
                          name={`test.${index}.primaryLastName`}
                          label="Last Name"
                        />
                      </Grid>
                      <Grid item>
                        <Grid>
                          <Checkbox1
                            control={control}
                            name={`test.${index}.cb`}
                            label="Checkbox"
                          />
                        </Grid>
                      </Grid>
                    </Grid>
                  )
                })}
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
            <Button variant="outlined" color="secondary" onClick={() => checkFormState()}>
              {" "}
              FormState
            </Button>
          </div>
        </div>
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
