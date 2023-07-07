import { TextField } from "@mui/material";

const EmailInput = ({ register, name, errors, label, ...rest }) => {
  return (
    <>
      <TextField
        name={name}
        label={label}
        {...register("email", {
          required: `Email is required`,
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "Invalid email address",
          },
        })}
        error={!!errors["email"]}
        helperText={errors["email"]?.message}
        {...rest}
      />
    </>
  );
};
export default EmailInput;
