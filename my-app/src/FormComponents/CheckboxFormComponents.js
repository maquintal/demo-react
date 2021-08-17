import { Checkbox } from "@material-ui/core";
import { useController } from "react-hook-form";

export function Checkbox1({ control, name, label }) {
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
    <Checkbox
      value={inputProps.value}
      {...inputProps}
      inputRef={ref}
    />
  )
}