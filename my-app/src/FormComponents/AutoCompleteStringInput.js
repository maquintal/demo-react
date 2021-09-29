import { useController } from "react-hook-form";

import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export function AutoCompleteStringInput({ control, name, label, type, rules, options, multiple }) {
  const classes = useStyles();
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields, isSubmitted }
  } = useController({
    name,
    control,
    rules: {required: rules?.required},
    defaultValue: "",
  });

  const displayError = (isSubmitted && rules?.required !== false && inputProps.value === "") || false
  const displayHelperText = displayError ? `${inputProps.name} est requis` : ""

  return (
    <div className={classes.root}>
      <Autocomplete
        {...inputProps}
        multiple={multiple}
        id="tags-outlined"
        options={options}
        getOptionLabel={(option) => option}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            inputRef={ref}
            {...params}
            variant="outlined"
            label="filterSelectedOptions"
            placeholder="Favorites"
            error={displayError}
            helperText={displayHelperText}
            required={rules?.required !== false || false}
          />
        )}
        onChange={(_, data) => inputProps.onChange(data)}
      />
    </div>
  );
}