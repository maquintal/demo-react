import React from "react";
import { TextField, Button, Grid } from "@material-ui/core";
import { useController, useForm } from "react-hook-form";

import {
  Input
} from "./formComponents";

/* function Input({ control, name, label }) {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return (
    <TextField
      {...inputProps}
      inputRef={ref}
      variant={"outlined"}
      label={label}
    />
  )
} */

const ReactHookFormDemo = () => {
  const { control, handleSubmit } = useForm();
  
  const onSubmit = (data) => {
    console.log(data)
  }

  return (
    <form>
      <Grid container>
        <Grid item xs={4}>
          <Input
            control={control}
            name="civicNumber"
            label="Numero Civic"
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            control={control}
            name="city"
            label="Ville"
          />
        </Grid>
        <Grid item xs={4}>
          <Input
            control={control}
            name="street"
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
      </Grid>
    </form>
  )
}

export default ReactHookFormDemo