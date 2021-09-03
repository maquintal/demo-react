import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: 0,
    margin: theme.spacing(0.5),
  },
  secondary: {
    backgroundColor: '#f4b2c9',
    "& .MuiButton-label": {
      color: theme.palette.secondary.main,
    },
  },
  primary: {
    backgroundColor: theme.palette.primary.light,
    "& . MuiButton-label": {
      color: theme.palette.primary.main,
    },
  },
}));

export default function ActionButton(props) {
  const { color,variant, children, onClick } = props;
  const classes = useStyles();
  return (
    <div>
      <Button className={`${classes.root} ${classes[color]}`} variant={variant} onClick={onClick}>
        {children}
      </Button>
    </div>
  );
}
