import React, { useEffect } from "react";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Button,
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

const paymentMethod = [
  { title: "Chèque", year: 1994 },
  { title: "Argent", year: 1994 },
  { title: "Virement Automatique", year: 1994 },
];

export default AppartmentForm;
