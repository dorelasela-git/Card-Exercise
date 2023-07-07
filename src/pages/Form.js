import React from "react";
import {
  Step,
  StepLabel,
  Stepper,
  Box,
  CardContent,
  InputLabel,
  Typography,
} from "@mui/material";
import PersonalInformation from "./Personal-Information";
import PaymentInformation from "./PaymentInformation";
import ShippingDetails from "./ShippingDetails";
import { useContext } from "react";
import { MultiStepContext } from "../context/Context";
import "./style/styleForm.css";

export default function Form() {
  const { currentStep } = useContext(MultiStepContext);
  const showStep = (step) => {
    switch (step) {
      case 1:
        return <PersonalInformation />;
      case 2:
        return <ShippingDetails />;
      case 3:
        return <PaymentInformation />;
      default:
        return null;
    }
  };
  return (
    <>
      <div className="form-container">
        <Box className="card-container">
          <Typography
            className="card"
            variant="h4"
            sx={{ marginBottom: "20px" }}
          >
            Register down below :
          </Typography>
          <CardContent>
            <Stepper activeStep={currentStep - 1}>
              <Step>
                <StepLabel>Personal Information</StepLabel>
              </Step>
              <Step>
                <StepLabel>Shipping Details</StepLabel>
              </Step>
              <Step>
                <StepLabel>Payment Information</StepLabel>
              </Step>
            </Stepper>
            {showStep(currentStep)}
          </CardContent>
        </Box>
      </div>
    </>
  );
}
