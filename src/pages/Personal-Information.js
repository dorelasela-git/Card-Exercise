import React, { useEffect } from "react";
import { Box, Button, Tooltip } from "@mui/material";
import { useContext } from "react";
import { MultiStepContext } from "../context/Context";
import TextInput from "../component/TextInput";
import EmailInput from "../component/EmailInput";
import { useForm } from "react-hook-form";
import "./style/stylePersonalInfo.css";

const PersonalInformation = () => {
  const { submitData, setCurrentStep, formData } = useContext(MultiStepContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue("firstname", formData.firstname);
    setValue("email", formData.email);
  }, [setValue]);

  const currentStep = 1;
  const firstStepSubmit = (data, event) => {
    setCurrentStep(() => currentStep + 1);
    submitData(data, currentStep);
  };

  const handleValidation = (event) => {
    const { name, value } = event.target;
    setValue(name, value, { shouldValidate: true });
  };

  return (
    <form onSubmit={handleSubmit(firstStepSubmit)} noValidate>
      <Box className="personal-info-box">
        <div className="input-container">
          <TextInput
            required
            register={register}
            helperText={"test"}
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

          <EmailInput
            required
            formData={formData}
            register={register}
            name="email"
            label="Email"
            errors={errors}
            type="email"
            onChange={handleValidation}
          />
        </div>
        <Tooltip title="Next">
          <Button
            className="button"
            type="submit"
            variant="outlined"
            color="primary"
          >
            Next
          </Button>
        </Tooltip>
      </Box>
    </form>
  );
};

export default PersonalInformation;
