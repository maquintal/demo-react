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
  Card,
  CardContent,
  CardHeader,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { useForm, useFieldArray } from "react-hook-form";
import PropTypes from "prop-types";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import { Input } from "../../FormComponents/formComponents";
import ActionButton from "../ActionButton";
import TenantForm from "./tenant-form";

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
    overflowY: 'scroll',
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

// function a11yProps(index) {
//   return {
//     id: `vertical-tab-${index}`,
//     "aria-controls": `vertical-tabpanel-${index}`,
//   };
// }

const AppartmentForm = (props) => {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);
  const { control, handleSubmit, getValues } = useForm({
    // defaultValues: initialValue
  });
  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control, // control props comes from useForm (optional: if you are using FormContext)
      name: "test", // unique name for your Field Array
      // keyName: "id", default to "id", you can change the key name
    }
  );

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className={classes.heading}>#100</Typography>
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
              <Tab label="Informations" /*{...a11yProps(1)}*/ />
              <Tab label="Commentaires" /*{...a11yProps(2)}*/ />
            </Tabs>
            <TabPanel value={value} index={0} variant="scrollable">
              <TenantForm />
            </TabPanel>
            <TabPanel value={value} index={1}>
              Item Two
            </TabPanel>
            <TabPanel value={value} index={2}>
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
    </div>
  );
};

export default AppartmentForm;
