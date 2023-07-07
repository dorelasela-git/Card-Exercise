import { Box, Button, Tooltip, InputLabel } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { useContext, useEffect } from "react";
import { MultiStepContext } from "../context/Context";
import ExpiryDate from "../component/ExpiryDate";
import CVVInput from "../component/CVVInput";
import { useForm } from "react-hook-form";
import "./style/stylePaymentInfo.css";
import MaskedInput from "../component/CreditCardInput";
import dayjs from "dayjs";

const PaymentInformation = () => {
  const { submitData, onPrevClick, formData } = useContext(MultiStepContext);
  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
    setValue,
    control,
  } = useForm({
    mode: "onChange",
  });

  useEffect(() => {
    setValue("creditCard", formData.creditCard);
    setValue("expirydate", formData.expirydate);
    setValue("cvv", formData.cvv);
  }, [setValue]);

  const currentStep = 3;
  const thirdStepSubmit = (data) => {
    submitData(data, currentStep);
  };

  const handleValidation = (event) => {
    const { name, value } = event.target;
    setValue(name, value, { shouldValidate: true });
  };
  const currentDate = new Date();

  return (
    <form onSubmit={handleSubmit(thirdStepSubmit)}>
      <Box className="box">
        <div className="input-container">
          <InputLabel>Credit Card Number:</InputLabel>
          <MaskedInput
            watch={watch}
            register={register}
            error={errors.creditCard}
          />
          <ExpiryDate
            register={register}
            name="expirydate"
            id="outlined-disabled"
            errors={errors}
            onChange={handleValidation}
            control={control}
            validationSchema={{
              required: { value: true, message: "Expiry Date is required" },
              min: {
                value: new Date(
                  currentDate.getFullYear(),
                  currentDate.getMonth(),
                ),
                message: "Invalid Date",
              },
            }}
          />
          <CVVInput
            register={register}
            name="cvv"
            id="outlined-disabled"
            label="CVV"
            type="number"
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
          <Tooltip title="Submit">
            <Button
              variant="outlined"
              endIcon={<SendIcon />}
              color="success"
              type="submit"
              className="submit-button"
            >
              Submit
            </Button>
          </Tooltip>
        </div>
      </Box>
    </form>
  );
};
export default PaymentInformation;
