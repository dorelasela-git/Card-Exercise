import { Controller } from "react-hook-form";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import dayjs from "dayjs";

const ExpiryDate = ({ control, name, errors, validationSchema }) => {
  return (
    <>
      <Controller
        name={name}
        control={control}
        rules={validationSchema}
        render={({ field }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              format="MM/YY"
              views={["month", "year"]}
              value={field.value ? dayjs(field.value) : null}
              onChange={(date) => field.onChange(new Date(date))}
              slotProps={{
                textField: {
                  error: !!errors[name],
                  helperText: errors[name]?.message,
                },
              }}
            />
          </LocalizationProvider>
        )}
      />
    </>
  );
};
export default ExpiryDate;
