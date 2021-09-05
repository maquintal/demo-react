import React from "react";
import PropTypes from "prop-types";
import MaskedInput from "react-text-mask";
import { Input, InputLabel, FormControl, makeStyles, TextField } from "@material-ui/core";
import { useController } from "react-hook-form";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function TextMaskCustom(props) {
  const { inputRef, ...other } = props;

  return (
    <MaskedInput
      {...other}
      ref={(ref) => {
        inputRef(ref ? ref.inputElement : null);
      }}
      mask={[
        "(",
        /[1-9]/,
        /\d/,
        /\d/,
        ")",
        " ",
        /\d/,
        /\d/,
        /\d/,
        "-",
        /\d/,
        /\d/,
        /\d/,
        /\d/,
      ]}
      placeholderChar={"\u2000"}
      showMask
    />
  );
}

TextMaskCustom.propTypes = {
  inputRef: PropTypes.func.isRequired,
};

const FormattedPhoneNumberInput = ({ control, name, label, type }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({});

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const {
    field: { ref, ...inputProps },
    fieldState: { invalid, isTouched, isDirty },
    formState: { touchedFields, dirtyFields },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  return (
    <>
    {/* <div className={classes.root}> */}
      {/* <FormControl> */}
        <TextField
          fullWidth
          label={label}
          variant="outlined"
          value={values.textmask}
          onChange={handleChange}
          name={name}
          // id="formatted-text-mask-input"
          InputProps={{
            inputComponent: TextMaskCustom,
          }}
        />
      {/* </FormControl> */}
    {/* // </div> */}
    </>
  );
};

export default FormattedPhoneNumberInput;
