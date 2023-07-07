import { TextField } from "@mui/material";

const PostalCodeInput = ({ register, name, errors, label, ...rest }) => {
  return (
    <>
      <TextField
        name={name}
        label={label}
        {...register(name, {
          required: "Postal Code is required",
          pattern: {
            value: /^\d{4}$/,
            message: "Please enter a valid 4-digit Postal Code",
          },
        })}
        error={!!errors[name]}
        helperText={errors[name]?.message}
        {...rest}
      />
    </>
  );
};
export default PostalCodeInput;
