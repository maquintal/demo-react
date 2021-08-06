import { TextField } from "@material-ui/core";
import { useController } from "react-hook-form";

export function Input({ control, name, label }) {
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
      fullWidth
      {...inputProps}
      inputRef={ref}
      variant={"outlined"}
      label={label}
    />
  )
} 