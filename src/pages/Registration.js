import React, { useState } from "react";
import LandingPage from "../components/ConferenceRegistration/LandingPage";
import RegistrationStepOne from "../components/ConferenceRegistration/RegistrationStepOne";
import RegistrationStepTwo from "../components/ConferenceRegistration/RegistrationStepTwo";

function Registration() {
    const [step, setStep] = useState(0);
    const [formData, setFormData] = useState({});
  
    const handleNextStep = (data) => {
      setFormData((prev) => ({ ...prev, ...data }));
      setStep(step + 1);
    };
  
    const handleBack = () => {
      setStep(step - 1);
    };
  
    const handleSubmit = (data) => {
      console.log({ ...formData, ...data });
      alert("Registration successful!");
    };
  
    return (
      <div>
        {step === 0 && <LandingPage onRegister={() => setStep(1)} />}
        {step === 1 && (
          <RegistrationStepOne onNext={handleNextStep} onBack={handleBack} />
        )}
        {step === 2 && (
          <RegistrationStepTwo onSubmit={handleSubmit} onBack={handleBack} />
        )}
      </div>
    );
  }
  
  export default Registration;
  