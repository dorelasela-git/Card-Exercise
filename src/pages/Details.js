import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import {
  Box,
  Button,
  FormGroup,
  InputLabel,
  FormControl,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  Checkbox,
  FormHelperText,
  Typography,
  Slider,
} from "@mui/material";
import { useContext } from "react";
import { MultiStepContext } from "../context/Context";
import TextInput from "../component/TextInput";
import { useForm } from "react-hook-form";
import "./style/stylePersonalInfo.css";
import ExpiryDate from "../component/ExpiryDate";

const Details = () => {
  const { submitData, setCurrentStep, formData, onPrevClick } =
    useContext(MultiStepContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
    trigger,
  } = useForm();

  const firstStepSubmit = (data, event) => {
    alert("successfully submitted :D !");
    submitData(data);
    console.log(data);
  };

  const handleValidation = (event) => {
    const { name, value } = event.target;
    setValue(name, value, { shouldValidate: true });
  };

  const currentDate = new Date();

  return (
    <form onSubmit={handleSubmit(firstStepSubmit)} noValidate>
      <Box className="personal-info-box">
        <div className="input-container">
          <Typography variant="h5" component="h1">
            Please fill in your details :
          </Typography>
          <FormLabel>Name:</FormLabel>
          <TextInput
            required
            register={register}
            name="firstname"
            label="First Name"
            errors={errors}
            type="text"
            validationSchema={{
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name should be more than 2 characters",
              },
            }}
            onChange={handleValidation}
          />
          <FormControl error={!!errors.gender}>
            <FormLabel>Select your Birthdate:</FormLabel>
            <ExpiryDate
              register={register}
              name="expirydate"
              id="outlined-disabled"
              errors={errors}
              onChange={handleValidation}
              control={control}
              validationSchema={{
                required: { value: true, message: "Birth-Date is required" },
                max: {
                  value: new Date(
                    currentDate.getFullYear(),
                    currentDate.getMonth(),
                  ),
                  message: "Invalid Date",
                },
              }}
            />
            <FormLabel>Gender</FormLabel>
            <RadioGroup name="gender" row>
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
                {...register("gender", { required: "Gender is required" })}
              />
              <FormControlLabel
                value="male"
                control={<Radio />}
                {...register("gender", { required: "Gender is required" })}
                label="Male"
              />
            </RadioGroup>
            <FormHelperText>{errors.gender?.message}</FormHelperText>
          </FormControl>

          <FormControl required error={!!errors.country} fullWidth>
            <FormLabel>Select your Country :</FormLabel>
            <Select
              id="country"
              label="Country"
              defaultValue={formData.country}
              {...register("country", {
                required: "Country is required",
              })}
              onChange={(e) => {
                setValue("country", e.target.value);
                trigger("country");
              }}
            >
              <MenuItem value="Austria">Austria </MenuItem>
              <MenuItem value="Italy">Italy</MenuItem>
              <MenuItem value="Spain">Spain </MenuItem>
            </Select>
            {errors.country && (
              <FormHelperText> {errors.country?.message} </FormHelperText>
            )}
          </FormControl>
          <FormGroup>
            <InputLabel> Select your preferred payment type: </InputLabel>
            <FormControlLabel
              color="success"
              required
              control={
                <Checkbox
                  color="success"
                  {...register("payment")}
                  value="creditCards"
                />
              }
              label="Credit cards"
            />
            <FormControlLabel
              required
              control={
                <Checkbox
                  color="success"
                  {...register("payment")}
                  value="cash"
                />
              }
              label="Cash"
            />
            <FormControlLabel
              color="success"
              required
              control={
                <Checkbox
                  color="success"
                  {...register("payment")}
                  value="checks"
                />
              }
              label="Checks"
            />
            {errors.country && (
              <FormHelperText> {errors.country?.message} </FormHelperText>
            )}
          </FormGroup>
          <Typography>Slider Value:</Typography>
          <Slider
            {...register("slider")}
            defaultValue={0}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={0}
            max={10}
          />
        </div>
        <div className="button-container">
          <Button
            style={{ marginLeft: "10px" }}
            variant="outlined"
            color="primary"
            type="submit"
          >
            Submit
          </Button>
          <Link to="/payment">
            <Button variant="outlined" color="primary">
              Continue to payment
            </Button>
          </Link>
        </div>
      </Box>
    </form>
  );
};

export default Details;
