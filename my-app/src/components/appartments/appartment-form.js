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
  TextField,
  Badge,
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core";

import { useDispatch, useSelector } from "react-redux";

import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, useFieldArray } from "react-hook-form";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Input } from "../../FormComponents/formComponents";
import ActionButton from "../ActionButton";
import TenantForm from "./tenant-form";
import FormattedNumberInput from "../../FormComponents/Formated Input/Number";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  tabsRoot: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    display: "flex",
    height: "800px",
    overflowY: "scroll",
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
    width: "250px",
  },
  tabPanel: {
    width: "100%",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  const classes = useStyles();

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className={classes.tabPanel}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const AppartmentForm = (props) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  


  const [value, setValue] = React.useState(0);
  const { control, handleSubmit, getValues } = useForm({
    defaultValues: 
      state?.reducer?.selectedBuilding?.buildingInfo.appartments
    
  });

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "appartments", // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      {fields.map((appartment, index) => {
          return (
            <Accordion key={index}>
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography className={classes.heading}>
                  <Badge badgeContent={4} color="primary" variant="dot">
                    <Input ref={register()} name={`appartments.${index}.app_number`} control={control} label="Appartement #"/>
                  </Badge>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <div className={classes.tabsRoot}>
                  <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    className={classes.tabs}
                  >
                    <Tab label="Locataires" /*{...a11yProps(0)}*/ />
                    <Tab
                      label={
                        <Badge badgeContent={4} color="primary" variant="dot">
                          Informations
                        </Badge>
                      }
                    />
                    <Tab
                      label={
                        <Badge badgeContent={4} color="primary" variant="dot">
                          Finance
                        </Badge>
                      }
                    />
                    <Tab
                      label={
                        <Badge badgeContent={4} color="primary" variant="dot">
                          Commentaires
                        </Badge>
                      }
                    />
                  </Tabs>
                  {/* panel content */}
                  <TabPanel value={value} index={0} variant="scrollable">
                    <TenantForm />
                  </TabPanel>
                  <TabPanel value={value} index={1} variant="scrollable">
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid item xs={4}>
                          <Typography component="h5" variant="h5">
                            {" "}
                            Grandeur de l'appartement
                          </Typography>
                          <Input
                            control={control}
                            // name={`tenant.${index}.lastname`}
                            name="height"
                            // label="Grandeur de l'appartement"
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Grid item xs={4}>
                          <Typography component="h5" variant="h5">
                            {" "}
                            Méthode de paiement
                          </Typography>
                          <Autocomplete
                            id="combo-box-demo"
                            options={paymentMethod}
                            getOptionLabel={(option) => option.title}
                            style={{ width: "100%" }}
                            renderInput={(params) => (
                              <TextField
                                {...params}
                                // label="Combo box"
                                variant="outlined"
                              />
                            )}
                          />
                        </Grid>
                      </Grid>

                      <Grid item xs={6}>
                        <Typography component="h5" variant="h5">
                          {" "}
                          Début du Bail
                        </Typography>
                        <Input
                          control={control}
                          // name={`tenant.${index}.lastname`}
                          name="appartment_start_bail"
                          type="date"
                          // label="Grandeur de l'appartement"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <Typography component="h5" variant="h5">
                          {" "}
                          Fin du Bail
                        </Typography>
                        <Input
                          control={control}
                          // name={`tenant.${index}.lastname`}
                          name="appartment_end_bail"
                          type="date"
                          // label="Grandeur de l'appartement"
                        />
                      </Grid>
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={2}>
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Grid item xs={4}>
                          <Typography component="h5" variant="h5">
                            {" "}
                            Prix de l'appartement/mois
                          </Typography>
                          {/* <FormattedNumberInput
                            control={control}
                            name="price"
                          /> */}
                          <Input
                            control={control}
                            name="price"
                          />
                        </Grid>
                      </Grid>
                      <Grid item xs={12}>
                        <Box mt={5}>
                          <Typography component="h5" variant="h5">
                            {" "}
                            Reconduction du Bail
                          </Typography>
                        </Box>
                      </Grid>
                      <Grid item xs={4}>
                        <Input
                          control={control}
                          name="reconduction_per_percentage"
                          label="reconduction en %"
                        />
                      </Grid>
                      <Grid item xs={4}>
                        <Input
                          control={control}
                          name="reconduction_per_price"
                          label="reconduction en $"
                        />
                      </Grid>
                      <Grid item xs={6}>
                        <FormattedNumberInput
                          control={control}
                          name="appartment_price_after_reconduction"
                          label="Prix après reconduction"
                        />
                      </Grid>
                    </Grid>
                  </TabPanel>
                  <TabPanel value={value} index={3}>
                    <Grid container>
                      <Grid item xs={12}>
                        <TextField
                          id="outlined-multiline-static"
                          label="Commentaires"
                          multiline
                          rows={8}
                          defaultValue=""
                          variant="outlined"
                          fullWidth
                        />
                      </Grid>
                    </Grid>
                  </TabPanel>
                </div>
              </AccordionDetails>
            </Accordion>
          );
        }
      )}
    </div>
  );
};

const paymentMethod = [
  { title: "Chèque", year: 1994 },
  { title: "Argent", year: 1994 },
  { title: "Virement Automatique", year: 1994 },
];

export default AppartmentForm;
