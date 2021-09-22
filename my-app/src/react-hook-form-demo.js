import React from "react";
import { useDispatch, useSelector } from "react-redux"

// UI
import { TextField, Button, Grid } from "@material-ui/core";
import { useController, useForm } from "react-hook-form";

// CUSTOM FORM INPUT
import {
  Input
} from "./FormComponents/formComponents";

// REDUX
import { chooseCivicNumber, setForm } from "../src/store/rootSlice"

const ReactHookFormDemo = () => {
  const { control, handleSubmit } = useForm();

  const dispatch = useDispatch()
  const state = useSelector(state => state.demo)

  const onSubmit = (data) => {
    console.log(data)
    dispatch(setForm(data.demo))
    console.log(state)
  }

  console.log(state)
  return (
    <form>
      <Grid container>
        <Grid item xs={4}>
          <Input
            control={control}
            name="demo.civicNumber"
            label="Numero Civic"
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            control={control}
            name="demo.city"
            label="Ville"
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            control={control}
            name="demo.street"
            label="Rue"
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            onClick={handleSubmit(onSubmit)}
          >
            submit
          </Button>
        </Grid>
        <Grid item xs={12}>
          <pre>{JSON.stringify(state, null, 2)}</pre>
        </Grid>
      </Grid>
    </form>
  )
}

export default ReactHookFormDemo