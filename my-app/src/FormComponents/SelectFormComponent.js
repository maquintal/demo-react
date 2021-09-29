import React from "react";
import { FormControl, InputLabel, Select, MenuItem } from "@material-ui/core";
import { useController } from "react-hook-form";

export function SelectInput({ control, name, label, options, rules }) {
  const [rental_agent, set_rental_agent] = React.useState("");
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: rules?.required },
    defaultValue: "",
  });

  return (
    <FormControl fullWidth>
      <InputLabel id="selectId">{label}</InputLabel>
      <Select
        labelId="selectId"
        id="demo-simple-select"
        value={rental_agent}
        {...inputProps}
        inputRef={ref}
        variant={"outlined"}
      >
        <MenuItem value=""></MenuItem>
        {options.map((option) => (
          <MenuItem key={option} value={option}>{option}</MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
