import { TextField } from "@material-ui/core";
import { useController } from "react-hook-form";

export function Input({ control, name, label, type }) {
  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty, error },
    formState: { touchedFields, dirtyFields }
  } = useController({
    name,
    control,
    // rules: { required: true },
    defaultValue: "",
  });

  console.log(error)
  return (
    <TextField
      fullWidth
      {...inputProps}
      inputRef={ref}
      variant={"outlined"}
      label={label}
      type={type}
    />
  )
} 