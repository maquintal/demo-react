import React from "react";
import { useWatch } from "react-hook-form";

import { Input } from "./FormComponents/formComponents";

const EmbeddedFieldArrayComponent = ({ control, /* name, label, */ index, getValues }) => {


  console.log(index)
  console.log(getValues)

  /* const isChecked = useWatch({
    control,
    name: `test[${index}].cb`, // without supply name will watch the entire form, or ['firstName', 'lastName'] to watch both
    // defaultValue: getValues(`test[${index}].cb`) // default value before the render
  }); */

  // console.log(isChecked)
  return (
    // isChecked ?
      <Input
        control={control}
        name={`test.${index}.secondaryLastName`}
        label="Last Name"
      />
    // : null
  )
}

export default EmbeddedFieldArrayComponent;