import React from "react";
import InputMask from "react-input-mask";
import TextField from "@mui/material/TextField";

const MaskedInput = ({ register, error, watch }) => {
  return (
    <InputMask
      mask="9999 9999 9999 9999"
      maskChar="-"
      defaultValue={watch("creditCard") || ""}
      {...register("creditCard", {
        required: "Credit card number is required",
        pattern: {
          value: /^[0-9\s]{0,19}$/,
          message: "Please enter a 16-digit credit card number",
        },
      })}
    >
      {(inputProps) => (
        <TextField
          {...inputProps}
          name="creditCard"
          variant="outlined"
          error={!!error}
          helperText={error?.message}
        />
      )}
    </InputMask>
  );
};

export default MaskedInput;
