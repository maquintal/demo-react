import React from "react";

import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";

import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import {
  AppBar,
  Tabs,
  Tab,
  Typography,
  Box,
  Card,
  CardHeader,
  CardContent,
  Divider,
  Grid,
  Button,
} from "@material-ui/core";
import { Input } from "../../src/FormComponents/formComponents";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
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

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    // width: 500,
  },
  SwipeableViews: {
    height: "100vh",
  },
  input: {
    margin: 10,
  },
  card: {
    marginTop: 20,
  },
}));

export default function FullWidthTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  const state = useSelector((state) => state);
  const { control, handleSubmit, getValues, errors } = useForm({});

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <div className={classes.root}>
      APPARTEMENT {state?.reducer?.selectedAppartment._id}
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Bail" {...a11yProps(0)} />
          <Tab label="Transactions" {...a11yProps(1)} />
          <Tab label="Rangement" {...a11yProps(2)} />
          <Tab label="Stationnement" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
        className={classes.SwipeableViews}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <Card>
            <CardHeader
              title={<Typography variant="h6">Informations</Typography>}
            />
            <Divider />
            <CardContent>
                <Grid container>
                  <Grid item >
                    <Box display="block">
                        <Input control={control} name="building_number" label="immeuble"  className={classes.input}/>
                        <Input control={control} name="appartment_number" label="unite"  className={classes.input}/>
                    </Box>
                    <Box display="flex" flexDirection="row">
                      <Grid item xs={6}>
                            <Input control={control} name="appartment_width" label="grandeur de l'unite"  className={classes.input}/>
                      </Grid>
                      <Grid item xs={6}>
                        <Box ml={1}>
                          <Input control={control} name="appartment_floor" label="etage"  className={classes.input}/>
                        </Box>
                      </Grid>
                    </Box>
                  </Grid>
                  <Box ml={3}>
                  <Grid item >
                    <Box display="block">
                        <Input control={control} type="date" name="start_lease" label="Debut du bail" className={classes.input} />
                        <Input control={control} type="date" name="end_lease" label="Fin du bail"  className={classes.input}/>
                    </Box>
                  </Grid>
                  </Box>
                  {/* <Grid item >1</Grid> */}
                </Grid>
            </CardContent>
          </Card>

          <Card className={classes.card}>
            <CardHeader
              title={<Typography variant="h6">Locataires</Typography>}
            />
            <Divider />
            <CardContent>
              <Button variant="outlined"> Ajouter</Button>
              <Grid xs={3} item>
                  <Input
                    control={control}
                    name="building_number"
                    label="immeuble"
                  />
                  <Input
                    control={control}
                    name="appartment_number"
                    label="unité"
                  />
                <Box display="flex" flexDirection="row">
                  <Input
                    control={control}
                    name="app_width"
                    label="nombre de pièces"
                  />
                  <Box ml={1}>
                    <Input control={control} name="etage" label="étage" />
                  </Box>
                </Box>
              </Grid>
              <Grid xs={3} item></Grid>
              <Grid xs={3} item></Grid>
            </CardContent>
          </Card>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Transactions
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Rangement
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Stationement
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}
