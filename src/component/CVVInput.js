import { TextField } from "@mui/material";

const CVVInput = ({ register, name, errors, label, ...rest }) => {
  return (
    <>
      <TextField
        label={label}
        name={name}
        {...register(name, {
          required: "CVV is required",
          pattern: {
            value: /^\d{3}$/,
            message: "Please enter a valid CVV",
          },
        })}
        error={!!errors["cvv"]}
        helperText={errors["cvv"]?.message}
        {...rest}
      />
    </>
  );
};
export default CVVInput;
