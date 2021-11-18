import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Collapse from "@material-ui/core/Collapse";
import IconButton from "@material-ui/core/IconButton";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import ActionButton from "../src/components/ActionButton";

const useRowStyles = makeStyles({
  root: {
    "& > *": {
      borderBottom: "unset",
    },
  },
});

function createData(name, calories, fat, carbs, protein, price, dumb) {
  return {
    name,
    calories,
    fat,
    carbs,
    protein,
    price,
    dumb,
    history: [
      {
        name: "Doe, John",
        date: "1345 Zotique-Giard, Chambly J3L 4V8",
        customerId: "1991-11-19",
        amount: "438-887-3374",
        email: "test@test.com",
      },
      {
        name: "Doe, Johnette",
        date: "1345 Zotique-Giard, Chambly J3L 4V8",
        customerId: "1991-10-25",
        amount: "514-475-1885",
        email: "kathou@test.com",
      },
    ],
  };
}

function Row(props) {
  const { row } = props;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell align="right">{row.calories}</TableCell>
        <TableCell align="right">{row.fat}</TableCell>
        <TableCell align="right">{row.carbs}</TableCell>
        <TableCell align="right">{row.protein}</TableCell>
        <TableCell align="right">{row.dumb}</TableCell>
      </TableRow>
      {/* COLLAPSED CONTENT */}
      <TableRow>
        <TableCell
          style={{
            paddingBottom: 0,
            paddingTop: 0,
            marginBottom: 10,
            backgroundColor: "#E8E8E8",
          }}
          colSpan={7}
        >
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Informations de la personne enquêté
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Nom, Prénom</TableCell>
                    <TableCell>Adresse actuelle</TableCell>
                    <TableCell>Date de naissance</TableCell>
                    <TableCell>Téléphone</TableCell>
                    <TableCell>Email</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.history.map((historyRow) => (
                    <TableRow key={historyRow.date}>
                      <TableCell>{historyRow.name}</TableCell>
                      <TableCell>{historyRow.date}</TableCell>
                      <TableCell>{historyRow.customerId}</TableCell>
                      <TableCell>{historyRow.amount}</TableCell>
                      <TableCell>{historyRow.email}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}

const rows = [
  createData(
    "Camps Frank",
    "5645Elie",
    "103",
    1250,
    "2021-11-17",
    "",
    "En cours"
  ),
  createData(
    "Grégoire Martin",
    "5645Elie",
    "104",
    1000,
    "2021-11-19",
    "",
    "Approuvé"
  ),
];

export default function Corpiq() {
  return (
    <>
    <Grid container style={{marginBottom: 20}}>
        <Grid item xs={12}>
            <ActionButton variant="outlined">Ajouter une enquête</ActionButton>
        </Grid>
    </Grid>
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <TableCell />
              <TableCell>Agent de Location</TableCell>
              <TableCell align="right">Adresse de location</TableCell>
              <TableCell align="right">#App</TableCell>
              <TableCell align="right">Montant de la location/mois</TableCell>
              <TableCell align="right">Date de la demande</TableCell>
              <TableCell align="right">Status de la demande</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <Row key={row.name} row={row} />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
