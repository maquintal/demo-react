import React, { Component, useEffect } from "react";
import { useRouter } from 'next/router'

import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Typography,
} from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";
import { setSelectedAppartment } from "../../store/rootSlice";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const AppartmentForm = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter()
  const state = useSelector((state) => state);

  console.log(state?.reducer?.selectedBuilding?.appartments)

  const [value, setValue] = React.useState(0);
  const { control, handleSubmit, getValues, reset } = useForm({
    defaultValues:
      state?.reducer?.selectedBuilding?.appartments

  });

  // console.log(control)
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "appartments", // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  );

  // useEffect(() => {
  //   console.log(fields.length)
  //   if(fields.length <= 0) {
  //     append({input: 'text'})  
  //   }
  // }, [])

  // const handleChange = (event, newValue) => {
  //   setValue(newValue);
  // };

  const onSubmit = (data) => console.log("data", data);

  // console.log(fields)

  useEffect(() => {
    reset({
      appartments: state?.reducer?.selectedBuilding?.appartments
      // appartments: [{
      //   // _id: _id,
      //   firstName: { value: "firstName" },
      //   lastName: { value: "lastName" }
      // }]
    });
  }, [reset]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Field Array </h1>
      {fields.map((item, index) => {
        console.log(item)
        return (
          <React.Fragment>
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  <Badge badgeContent={4} color="primary" variant="dot">
                    <Input name={`appartments.${index}.app_number`} control={control} label="Appartement #" />
                  </Badge>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                {/* <Input
                  name={`appartments.[${index}]._id`}
                  control={control}
                  label="Grandeur de l'appartement"
                  defaultValue={item._id}
                /> */}
                <Input
                  name={`appartments.[${index}][firstName]`}
                  control={control}
                  label="Grandeur de l'appartement"
                  defaultValues={item?.firstName}
                />
                <Input
                  name={`appartments.${index}.lastName.value`}
                  control={control}
                />
                <button type="button" onClick={() => remove(index)}>
                  Delete
                </button>

              </AccordionDetails>
            </Accordion>

          </React.Fragment>
        );
      })}

      <button
        type="button"
        onClick={() => {
          append({
            firstName: { value: "" },
            lastName: { value: "" }
          });
        }}
      >
        append
      </button>
      <input type="submit" />
    </form>

  );
};

export async function getStaticPaths() {
  // Return a list of possible value for id
}

export default AppartmentForm;
