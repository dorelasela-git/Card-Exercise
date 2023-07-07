import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

export const MultiStepContext = React.createContext({});

export const StepContextProvider = ({ children }) => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    firstname: "",
    email: "",
    address: "",
    city: "",
    postalcode: "",
    creditCard: "",
    expirydate: "",
    cvv: "",
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
  } = useForm();

  const onPrevClick = () => {
    setCurrentStep(() => currentStep - 1);
  };

  const submitData = (data, step) => {
    setFormData((prevState) => {
      return {
        ...prevState,
        ...data,
      };
    });
    if (step === 3) {
      const finalData = { ...formData, ...data };
      const storageData = localStorage.getItem("formData");
      if (storageData) {
        localStorage.removeItem("formData");
      }
      localStorage.setItem("formData", JSON.stringify(finalData));
      alert("successfully submitted :D !");
      reset();
      setCurrentStep(1);
      console.log(finalData);
    }
  };
  const handleValidation = (event) => {
    const { name, value } = event.target;
    setValue(name, value, { shouldValidate: true });
  };

  return (
    <>
      <MultiStepContext.Provider
        value={{
          currentStep,
          setCurrentStep,
          submitData,
          register,
          handleSubmit,
          errors,
          setValue,
          onPrevClick,
          formData,
          handleValidation,
        }}
      >
        {children}
      </MultiStepContext.Provider>
    </>
  );
};
