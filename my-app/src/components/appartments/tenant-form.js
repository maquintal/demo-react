import React from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Tabs,
  Tab,
  Box,
  Grid,
  Card,
  CardContent,
  makeStyles,
} from "@material-ui/core";

import { useForm, useFieldArray } from "react-hook-form";

import { Input } from "../../FormComponents/formComponents";
import ActionButton from "../ActionButton";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
    cardHeaderWrapper: {
      display: "flex",
      justifyContent: "flex-end"
    },
  }));
  

const TenantForm = () => {
  const { control, handleSubmit, getValues } = useForm({
    // defaultValues: initialValue
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "tenant", // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  );
  const checkFormState = () => {
    const values = getValues();
    console.log("values ", values);
  };
  const classes = useStyles();
  return (
    <>
      {/* <Box mb={2}> */}
      <ActionButton variant="outlined" onClick={() => append({})}>
        <Typography component={"p"}>Ajouter un locataire</Typography>
      </ActionButton>
      <ActionButton variant="outlined" onClick={() => checkFormState()}>
        <Typography component={"p"}>FormState</Typography>
      </ActionButton>
      {/* </Box> */}
      <form>
        {fields.map((field, index) => {
          return (
            <Box mt={2}>
              <Card
                style={{
                  backgroundColor: "#d3e3ff",
                  border: "1px solid #848484",
                }}
                key={`tenant-${index}`}
              >
                <CardContent>
                  <Grid container spacing={1}>
                    <Grid item xs={12} className={classes.cardHeaderWrapper}>
                      <ActionButton
                        color="secondary"
                        variant="outlined"
                        onClick={() => remove(index)} 
                      >
                        <CloseIcon fontSize="small" />
                      </ActionButton>
                    </Grid>
                    <Grid item xs={6}>
                      <Input
                        control={control}
                        name={`tenant.${index}.lastname`}
                        label="Nom de Famille"
                      />
                    </Grid>
                    <Grid item xs={6}>
                      <Input
                        control={control}
                        name={`tenant.${index}.firstname`}
                        label="Prénom"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Input
                        control={control}
                        name={`tenant.${index}.phone_number1`}
                        label="Numéro de téléphone"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Input
                        control={control}
                        name={`tenant.${index}.phone_number2`}
                        label="Second Numéro de téléphone"
                      />
                    </Grid>
                    <Grid item xs={4}>
                      <Input
                        control={control}
                        name={`tenant.${index}.email`}
                        label="Adresse courriel"
                      />
                    </Grid>
                  </Grid>
                </CardContent>
              </Card>
            </Box>
          );
        })}
      </form>
    </>
  );
};

export default TenantForm;
