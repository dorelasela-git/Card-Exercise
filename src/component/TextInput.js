import { TextField } from "@mui/material";

const TextInput = ({
  name,
  register,
  label,
  errors,
  validationSchema,
  ...rest
}) => {
  return (
    <>
      <TextField
        label={label}
        name={name}
        {...register(name, validationSchema)}
        error={!!errors[name]}
        helperText={errors[name]?.message}
        {...rest}
      />
    </>
  );
};
export default TextInput;
