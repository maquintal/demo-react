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
  Button,
  DialogActions,
} from "@material-ui/core";

import ExpandMoreIcon from "@material-ui/icons/ExpandMoreOutlined";
import DeleteIcon from '@material-ui/icons/Delete';
import AddBoxIcon from '@material-ui/icons/AddBox';

import { makeStyles } from "@material-ui/core/styles";

// REDUX
import { useDispatch, useSelector } from "react-redux";
import { setSelectedAppartment } from "../../store/rootSlice";
// import { useUpdateAppartmentsMutation } from "../../services/appartments"
import { useUpdateAppartmentsMutation } from "../../services/buildingInfo"

// CUSTOM
import { Input } from "../../FormComponents/formComponents"
import CustomizedSnackbars from "../../snackbar";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const AppartmentForm = ({ index }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const router = useRouter()
  const state = useSelector((state) => state);

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [severity, setSeverity] = React.useState("");
  const [snackMessage, setSnackMessage] = React.useState("");

  const { data: post } = useUpdateAppartmentsMutation();

  const [
    updateAppartments, // This is the mutation trigger
    { isLoading, isError, isSuccess, error, fulfilledTimeStamp, isUninitialized }, // This is the destructured mutation result
  ] = useUpdateAppartmentsMutation();

  // const [value, setValue] = React.useState(0);
  const { control, handleSubmit, getValues, reset } = useForm({
    defaultValues: state?.reducer?.buildings[index]
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "appartments", // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  );

  React.useEffect(() => {
    // console.log(isUninitialized)
    if (fulfilledTimeStamp && isSuccess) {
      setSnackMessage("Record Updated"),
        setSeverity("success")
      // handleClose();
    } else {
      setSnackMessage(error?.error)
      setSeverity("error")
    }

    setOpenSnackbar(!isUninitialized)

  }, [fulfilledTimeStamp, error, isSuccess, isUninitialized])

  const handleSave = async (formData, isSuccess, isError, error) => {
    // try {
    //   dispatch(setSelectedBuildingBuildingInfo(formData));
    // } catch (error) {
    //   // throw new Error(error);
    //   setSnackMessage(error)
    // }

    updateAppartments({
      selectedBuilding: state.reducer.selectedBuilding,
      appartmentsFormData: formData,
    });

  };


  // useEffect(() => {
  //   reset({
  //     // appartments: state?.reducer?.buildings[1]
  //     // appartments: [{
  //     //   // _id: _id,
  //     //   firstName: { value: "firstName" },
  //     //   lastName: { value: "lastName" }
  //     // }]
  //     // appartments: [{
  //     //   app_number: "",
  //     //   firstName: "",
  //     //   lastName: "",
  //     // }]
  //   });
  // }, [reset]);

  return (
    <form /* onSubmit={handleSubmit(onSubmit)} */>
      <h1>Field Array </h1>
      {fields.map((item, index) => {
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
                      name={`appartments.[${index}].app_number`}
                      control={control}
                      label="Appartement #"
                    // rules={{ required: true }}
                    />
                  </Badge>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Input
                  name={`appartments.[${index}].firstName`}
                  control={control}
                  label="Prénom"
                // rules={{ required: true }}
                />
                <Input
                  name={`appartments.[${index}].lastName`}
                  control={control}
                  label={"Nom"}
                />
                <Button
                  size="small"
                  onClick={() => remove(index)}
                >
                  <DeleteIcon />
                </Button>

              </AccordionDetails>
            </Accordion>

          </React.Fragment>
        );
      })}

      <DialogActions>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => {
            append({
            });
          }}
        >
          ajouter
        </Button>
        <Button
          variant="outlined"
          color="primary"
          onClick={handleSubmit(handleSave)}
        >
          {" "}
          {isLoading ? "Loading" : "Sauvegarder"}
          {/* {"Sauvegarder"} */}
        </Button>
      </DialogActions>
      {(openSnackbar && (
        <CustomizedSnackbars
          opened={openSnackbar}
          severity={severity}
          message={snackMessage}
        />
      )) ||
        null}
    </form>

  );
};

export default AppartmentForm;
