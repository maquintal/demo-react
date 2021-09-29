// NODEJS//
import React from "react";
import axios from "axios"

// REDUX //
import { useDispatch, useSelector } from "react-redux";
import { setSelectedBuilding, setSelectedBuildingBuildingInfo } from "../../store/rootSlice";

// MATERIAL //
import {
  Button, Grid
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

// RHF//
import { useFieldArray, useForm } from "react-hook-form";
import { Checkbox1 } from "../../FormComponents/CheckboxFormComponents";
import { Input } from "../../FormComponents/formComponents";
import { SelectInput } from "../../FormComponents/SelectFormComponent";
import { AutoCompleteStringInput } from "../../FormComponents/AutoCompleteStringInput";

// CUSTOM //
import CustomizedSnackbars from "../../snackbar";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

export default function BuildingForm() {

  const dispatch = useDispatch()
  const state = useSelector(state => state)

  const { control, handleSubmit, getValues, errors } = useForm({
    reValidateMode: 'onSubmit',
    defaultValues: state?.selectedBuilding?.buildingInfo || {}
  });

  const [open, setOpen] = React.useState(false);
  const [severity, setSeverity] = React.useState("");
  const [snackMessage, setSnackMessage] = React.useState("")
  const classes = useStyles();

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray({
    control, // control props comes from useForm (optional: if you are using FormContext)
    name: "test", // unique name for your Field Array
    // keyName: "id", default to "id", you can change the key name
  });

  const options = [
    "Martin Grégoire",
    "Francis Campeau",
    "kjiki",
    "Katherine Handfield"
  ]

  const checkFormState = () => {
    const values = getValues();
    console.log(values)
  }

  /* const onSubmit = (data) => {
    // console.log(data)
    dispatch(setSelectedBuilding(data))
  }; */

  const handleSave = async (formData) => {

    try {
      dispatch(setSelectedBuildingBuildingInfo(formData))
    } catch (error) {
      throw new Error(error)
    }

    // apres avoir modifié le state ou cé qu'on fait la mutation, dans le Reducer !?
    // option 2, ne pas modifié le state, et faire la mutation, pcq anyway le state va se mettre a jour apres
    // par contre, un save doit absolument se faire avant de changer de page.... TBD

    // Send a POST request
    // axios({
    //   method: 'post',
    //   url: 'http://localhost:3000/api/buildings/createOneBuilding',
    //   data: { buildingFormData: formData }
    // }).then(async response => {
    //   if (response.status === 200) {
    //     await setSeverity("success")
    //     await setSnackMessage(`Record Created`)
    //   }
    //   console.log(response)
    // }).catch(async error => {
    //   await setSeverity("error")
    //   await setSnackMessage(`${error}`)
    //   return (`${error}`)
    // });

    await axios({
      method: 'post',
      url: 'http://localhost:3000/api/buildings/updateOneBuildingInfo',
      data: { selectedBuilding: state?.selectedBuilding, buildingFormData: formData }
    }).then(async response => {
      if (response.status === 200) {
        setSeverity("success")
        setSnackMessage(`Record Created`)
      } else {
        setSeverity("error")
        setSnackMessage(`${error}`)        
      }
      console.log(response)
    }).catch(async error => {
      setSeverity("error")
      setSnackMessage(`${error}`)
      return (`${error}`)
    });

    setOpen(true)

  }

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
                      <button type="button" onClick={() => remove(index)}>Delete</button>
                    </Grid>
                    <Grid item>
                      <Input
                        control={control}
                        name={`test.${index}.appNumber`}
                        label="First Name"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        control={control}
                        name={`test.${index}.primaryFirstName`}
                        label="First Name"
                      />
                    </Grid>
                    <Grid item>
                      <Input
                        control={control}
                        name={`test.${index}.primaryLastName`}
                        label="Last Name"
                      />
                    </Grid>
                    <Grid item>
                      <Grid>
                        <Checkbox1
                          control={control}
                          name={`test.${index}.cb`}
                          label="Checkbox"
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                )
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
            Sauvegarder
          </Button>
          <Button
            variant="outlined"
            color="primary"
          >
            {" "}
            Annuler
          </Button>
          <Button
            variant="outlined"
            color="secondary"
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
      {open &&
        <CustomizedSnackbars
          opened={open}
          severity={severity}
          message={snackMessage}
        />
        || null}
    </>
  );
}
