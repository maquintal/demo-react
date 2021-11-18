import React from "react";

import {
  Grid,
  Typography,
  Box,
  IconButton,
  Button,
  Card,
  CardContent,
  DialogActions
} from "@material-ui/core";
import AddBoxIcon from "@material-ui/icons/AddBox";
import RemoveCircleIcon from "@material-ui/icons/RemoveCircle";
import { useFieldArray, useForm } from "react-hook-form";

import { Input } from "../../FormComponents/formComponents";

const CorpiqForm = ({handleClose}) => {
  const { control, handleSubmit, getValues, errors } = useForm({
    reValidateMode: "onSubmit",
    defaultValues: {},
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "persons", // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  );

  const test = (a) => {
    console.log(a);
      
  };

  return (
    <>
      <form>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Typography variant="h6">
              Informations sur l'adresse de location
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Input
              control={control}
              name={`location_address`}
              label="Adresse de Location (civic, rue, ville, province, code postal)"
            />
          </Grid>
          <Grid item xs={3}>
            <Input
              control={control}
              name={`location_appartment`}
              label="Appartement de Location"
            />
          </Grid>
          <Grid item xs={3}>
            <Input
              control={control}
              name={`location_price`}
              label="Montant de la Location"
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              control={control}
              name={`investigation_date`}
              label="Date de la demande de l'enquête"
            />
          </Grid>
          <Grid item xs={6}>
            <Input
              control={control}
              name={`investigation_status`}
              label="Status de la demande de l'enquête"
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} style={{ marginTop: 15 }}>
          <Grid item xs={12}>
            <Box display="flex">
              <Typography variant="h6" style={{ marginRight: 10 }}>
                Informations sur la/les personne(s) (NE SUPPRIME PAS LE BON)
              </Typography>
              <IconButton
                color="inherit"
                onClick={() => {
                  append({});
                }}
              >
                <AddBoxIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
          {/*  */}
          {fields.map((item, index) => {
            return (
              <React.Fragment key={`fragment-${index}`}>
                <Card
                  key={index}
                  style={{ width: "100%", marginTop: 20 }}
                  elevation="5"
                >
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Box display="flex" justifyContent="flex-end">
                          <IconButton
                            color="secondary"
                            onClick={() => {remove(index)}}
                          >
                            <RemoveCircleIcon />
                          </IconButton>
                        </Box>
                      </Grid>
                      <Grid item xs={6}>
                        <Input
                          control={control}
                          name={`persons.[${index}].person_lastname`}
                          label="Nom de famille"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Input
                          control={control}
                          name={`persons.[${index}].person_firstname`}
                          label="Prénom"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Input
                          control={control}
                          name={`persons.[${index}].person_birthday`}
                          label="Date de naissance"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Input
                          control={control}
                          name={`persons.[${index}].person_phone`}
                          label="numéro de téléphone"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Input
                          control={control}
                          name={`persons.[${index}].person_email`}
                          label="Email"
                        />
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </React.Fragment>
            );
          })}
          {/*  */}
        </Grid>
        <DialogActions style={{marginTop: 30}}>
            <Button color="primary" variant="outlined">Sauvegarder</Button>
            <Button  color="secondary" variant="outlined">Supprimer</Button>
            <Button  variant="outlined" onClick={() => handleClose()}>Annuler</Button>
        </DialogActions>
      </form>
    </>
  );
};

export default CorpiqForm;
