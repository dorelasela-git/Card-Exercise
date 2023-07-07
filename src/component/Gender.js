import FormLabel from "@mui/material/FormLabel";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import FormControl from "@mui/material/FormControl";
import React from "react";

const Gender = ({ name, formData, defaultValue2 }) => {
  return (
    <>
      <FormControl>
        <FormLabel>Gender</FormLabel>
        <RadioGroup
          name={name}
          defaultValue={formData.gender}
          row
          aria-labelledby="demo-row-radio-buttons-group-label"
        >
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="male" control={<Radio />} label="Male" />
        </RadioGroup>
      </FormControl>
    </>
  );
};
export default Gender;
