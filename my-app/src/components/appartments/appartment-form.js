// NODEJS
import React, { Component, useEffect } from "react";

// NEXT
import { useRouter } from 'next/router'

// RHF
import { useFieldArray, useForm } from "react-hook-form";

// UI
import {
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  Divider,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Badge,
  Button
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMoreOutlined";
import { makeStyles } from "@material-ui/core/styles";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAppartment } from "../../store/rootSlice";
import { useUpdateAppartmentsMutation } from "../../services/appartments"

// CUSTOM
import { Input } from "../../FormComponents/formComponents"

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
  const { data: post } = useUpdateAppartmentsMutation();

  const [
    updateAppartments, // This is the mutation trigger
    { isLoading, isError, isSuccess, error, fulfilledTimeStamp, isUninitialized }, // This is the destructured mutation result
  ] = useUpdateAppartmentsMutation();

  // const [value, setValue] = React.useState(0);
  const { control, handleSubmit, getValues, reset } = useForm({
    // defaultValues: [{
    //   app_number: "",
    //   firstName: "",
    //   lastName: "",
    // }]

    defaultValues: state?.reducer?.selectedBuilding?.appartments  
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

  // const onSubmit = (data) => console.log("data", data);

  const handleSave = async (formData, isSuccess, isError, error) => {
    // try {
    //   dispatch(setSelectedBuildingBuildingInfo(formData));
    // } catch (error) {
    //   // throw new Error(error);
    //   setSnackMessage(error)
    // }

    console.log(formData)
    updateAppartments({
      selectedBuilding: state.reducer.selectedBuilding,
      appartmentsFormData: formData,
    });

  };

  // console.log(fields)

  useEffect(() => {
    reset({
      // appartments: state?.reducer?.selectedBuilding?.appartments
      // appartments: [{
      //   // _id: _id,
      //   firstName: { value: "firstName" },
      //   lastName: { value: "lastName" }
      // }]
      appartments: [{
        app_number: "",
        firstName: "",
        lastName: "",
      }]
    });
  }, [reset]);

  return (
    <form /* onSubmit={handleSubmit(onSubmit)} */>
      <h1>Field Array </h1>
      {fields.map((item, index) => {
        console.log(item)
        return (
          <React.Fragment key={`fragment-${index}`}>
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography component={'div'} className={classes.heading}>
                  <Badge badgeContent={4} color="primary" variant="dot">
                    <Input
                      name={`appartments.${index}.app_number`}
                      control={control}
                      label="Appartement #"
                      // rules={{ required: true }}
                    />
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
            // firstName: { value: "" },
            // lastName: { value: "" }
          });
        }}
      >
        append
      </button>
      <Button
        variant="outlined"
        color="primary"
        onClick={handleSubmit(handleSave)}
      >
        {" "}
        {/* {isLoading ? "Loading" : "Sauvegarder"} */}
        {"Sauvegarder"}
      </Button>
      {/* <input type="submit" /> */}
    </form>

  );
};

export default AppartmentForm;
