// NODEJS//
import React from "react";

// REDUX //
import { useDispatch, useSelector } from "react-redux";
import { setSelectedBuilding, setSelectedBuildingBuildingInfo } from "../../store/rootSlice";
import { useUpdateBuildingInfoMutation } from "../../services/buildingInfo"

// MATERIAL //
import { Button, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// RHF//
import { useFieldArray, useForm } from "react-hook-form";
import { Checkbox1 } from "../../FormComponents/CheckboxFormComponents";
import { Input } from "../../FormComponents/formComponents";
import { SelectInput } from "../../FormComponents/SelectFormComponent";

import { AutoCompleteStringInput } from "../../FormComponents/AutoCompleteStringInput";
import { ConfirmationDialog } from "../ConfirmationDialog";

// CUSTOM //
import CustomizedSnackbars from "../../snackbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function BuildingForm({ handleClose }) {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  const { control, handleSubmit, getValues, errors } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: state?.reducer?.selectedBuilding?.buildingInfo || {},
  });

  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const [severity, setSeverity] = React.useState("");
  const [snackMessage, setSnackMessage] = React.useState("");
  const [openConfirmDialog, setOpenConfirmDialog] = React.useState(false);
  
  const classes = useStyles();

  const { data: post } = useUpdateBuildingInfoMutation();

  const [
    updatePost, // This is the mutation trigger
    { isLoading, isError, isSuccess, error, fulfilledTimeStamp, isUninitialized }, // This is the destructured mutation result
  ] = useUpdateBuildingInfoMutation();

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "appartments", // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  );

  const options = [
    "Martin Grégoire",
    "Francis Campeau",
    "kjiki",
    "Katherine Handfield",
  ];

  const checkFormState = () => {
    const values = getValues();
    console.log(values);
  };

  /* const onSubmit = (data) => {
    // console.log(data)
    dispatch(setSelectedBuilding(data))
  }; */

  // console.log(error)

  React.useEffect(() => {
    console.log(isUninitialized)
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
    try {
      dispatch(setSelectedBuildingBuildingInfo(formData));
    } catch (error) {
      // throw new Error(error);
      setSnackMessage(error)
    }

    updatePost({
      selectedBuilding: state.reducer.selectedBuilding,
      buildingFormData: formData,
    });

  };

  const handleCloseConfirmationDialog = () => {
    setOpenConfirmDialog(false);
  };

  return (
    <>
      <div>
        <div title="5655 Elie, St-Hubert" />
        <div className={classes.root}>
          <form /* onSubmit={handleSubmit(handleSave)} */>
            <Grid container spacing={3}>
              <Grid item xs={4}>
                <Input
                  control={control}
                  name="civicNumber"
                  label="Numero Civic"
                  rules={{ required: true }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Input
                  control={control}
                  name="street"
                  label="Rue"
                  rules={{ required: true }}
                />
              </Grid>
              <Grid item xs={12}>
                <Input
                  control={control}
                  name="city"
                  label="Ville"
                  rules={{ required: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  control={control}
                  name="province"
                  label="Province"
                  rules={{ required: true }}
                />
              </Grid>
              <Grid item xs={6}>
                <Input
                  control={control}
                  name="zip_code"
                  label="Code Postal"
                  rules={{ required: true }}
                />
              </Grid>
              <Grid item xs={6}>
                {/* <SelectInput
                  control={control}
                  label="Agent De location"
                  name="rental_agent"
                  options={options}
                  rules={{ required: true }}
                /> */}
                <AutoCompleteStringInput
                  control={control}
                  label="Agent De location"
                  name="rental_agent"
                  options={options}
                  rules={{ required: true }}
                  multiple={false}
                />
              </Grid>
              <Grid item xs={6}></Grid>
              {fields.map((field, index) => {
                return (
                  <Grid item xs={12} key={`${field}-${index}`}>
                    <Grid item>
                      <button type="button" onClick={() => remove(index)}>
                        Delete
                      </button>
                    </Grid>
                    <Grid item>
                      <Input
                        control={control}
                        name={`appartments.${index}.appNumber`}
                        label="First Name"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        control={control}
                        name={`appartments.${index}.primaryFirstName`}
                        label="First Name"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        control={control}
                        name={`appartments.${index}.primaryLastName`}
                        label="Last Name"
                      />
                    </Grid>
                    <Grid item>
                      <Grid>
                        <Checkbox1
                          control={control}
                          name={`appartments.${index}.cb`}
                          label="Checkbox"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                );
              })}
            </Grid>
          </form>
        </div>
        <div spacing={2}>
          <Button
            variant="outlined"
            color="primary"
            onClick={handleSubmit(handleSave)}
          >
            {" "}
            {/* {isLoading ? "loading" : null} Sauvegarder */}
            {isLoading ? "Loading" : "Sauvegarder"}
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              handleClose();
              dispatch(setSelectedBuilding({}));
            }}
          >
            {" "}
            Annuler
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => setOpenConfirmDialog(true)}
          >
            {" "}
            Supprimer
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            onClick={() => checkFormState()}
          >
            {" "}
            FormState
          </Button>
        </div>
      </div>
      {(openSnackbar && (
        <CustomizedSnackbars
          opened={openSnackbar}
          severity={severity}
          message={snackMessage}
        />
      )) ||
        null}
      <ConfirmationDialog
        message="en attente de redux delete action pour ne pas a réutiliser la function dans building-card.js"
        openDialog={openConfirmDialog}
        handleClose={handleCloseConfirmationDialog}
        onClick={() =>
          /* deleteOneBuildingById(building._id); */ setOpenConfirmDialog(false)
        }
      >
        De plus, en pesant sur ok, le dialog de confirmation se ferme, mais pas celui du building 
        (ce qui serait normal qu'il se ferme, car tu confirme vouloir supprimer le building)
        repenser a la methode des dialog (redux state??); Voila enfin la magie de REDUX.
      </ConfirmationDialog>
    </>
  );
}
