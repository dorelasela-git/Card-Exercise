import { Box, Button, Tooltip } from "@mui/material";
import { useContext, useEffect } from "react";
import { MultiStepContext } from "../context/Context";
import TextInput from "../component/TextInput";
import PostalCodeInput from "../component/PostalCodeInput";
import { useForm } from "react-hook-form";
import "./style/styleShippingDetails.css";

const ShippingDetails = () => {
  const { submitData, formData, onPrevClick, setCurrentStep } =
    useContext(MultiStepContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm();

  useEffect(() => {
    setValue("address", formData.address);
    setValue("city", formData.city);
    setValue("postalcode", formData.postalcode);
  }, [setValue]);

  const currentStep = 2;
  const secondStepSubmit = (data) => {
    setCurrentStep(() => currentStep + 1);
    submitData(data, currentStep);
  };

  const handleValidation = (event) => {
    const { name, value } = event.target;
    setValue(name, value, { shouldValidate: true });
  };

  return (
    <form onSubmit={handleSubmit(secondStepSubmit)} noValidate>
      <Box className="shipping-details-box">
        <div className="input-container">
          <TextInput
            required
            register={register}
            name="address"
            label="Address"
            id="outlined-required"
            errors={errors}
            type="text"
            validationSchema={{
              required: "Address is required",
              minLength: {
                value: 5,
                message: "Address should be more than 5 characters",
              },
            }}
            onChange={handleValidation}
          />

          <TextInput
            required
            register={register}
            name="city"
            label="City"
            id="outlined-required"
            errors={errors}
            type="text"
            validationSchema={{
              required: "Address is required",
            }}
            onChange={handleValidation}
          />

          <PostalCodeInput
            required
            register={register}
            name="postalcode"
            type="text"
            label="Postal Code"
            errors={errors}
            onChange={handleValidation}
          />
        </div>

        <div className="button-container">
          <Tooltip title="Previous">
            <Button
              variant="outlined"
              color="secondary"
              onClick={onPrevClick}
              className="prev-button"
            >
              Previous
            </Button>
          </Tooltip>
          <Tooltip title="next">
            <Button
              variant="outlined"
              color="primary"
              type="submit"
              className="next-button"
            >
              Next
            </Button>
          </Tooltip>
        </div>
      </Box>
    </form>
  );
};

export default ShippingDetails;
