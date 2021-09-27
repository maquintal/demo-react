import { TextField } from "@material-ui/core";
import { useController } from "react-hook-form";

export function Input({ control, name, label, type, rules }) {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields, isSubmitted }
  } = useController({
    name,
    control,
    // rules: { required: true },
    rules: { rules },
    defaultValue: "",
  });

  /**
   * The Error Module from RHF is not working properly with the useController mode
   * this is the reason why we need to create our own error handling system
   *  
   * the error handling module returns true or false, by default it returns false
   * to be returned true, if the component must meet thoses 3 conditions
   * 
   * isSubmitted
   * rules?.required !== false
   * inputProps.value === ""
   * 
   * */

  const displayError = (isSubmitted && rules?.required !== false && inputProps.value === "") || false
  const displayHelperText = displayError ? rules?.required : ""

  return (
    <TextField
      fullWidth
      {...inputProps}
      inputRef={ref}
      variant={"outlined"}
      label={label}
      type={type}
      error={displayError}
      helperText={displayHelperText}
    />
  )
} 