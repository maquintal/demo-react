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
    <></>
  );
};

const paymentMethod = [
  { title: "Chèque", year: 1994 },
  { title: "Argent", year: 1994 },
  { title: "Virement Automatique", year: 1994 },
];

export default AppartmentForm;
