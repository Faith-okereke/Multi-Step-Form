import React, { useState } from "react";
export const ContextData = React.createContext();
import PlanData from "./assets/Data/SelectPlanData";
import AddOnsContext from "./assets/Data/AddOnsData";
function ContextStore({ children }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [personalData, setPersonalData] = useState(
    JSON.parse(localStorage.getItem("personalData")) || {
      name: "",
      email: "",
      number: "",
    }
  );
  const nextPage = () => {
    setCurrentStep((prevPage) => prevPage + 1);
  };

  const prevPage = () => {
    setCurrentStep((prevPage) => prevPage - 1);
  };
  const [selectedPlans, setSelectedPlans] = useState({
    plan: "",
    price: undefined,
    id: null,
  });
  const [monthly, setMonthly] = useState(
    JSON.parse(localStorage.getItem("planData")) || PlanData
  );
  let yearly = PlanData.price * 10;
  const [addOnsSelectedValue, setAddOnsSelectedValue] = useState([]);
  const { addOnsData, setAddOnsData } = useState(AddOnsContext);
  return (
    <ContextData.Provider
      value={{
        currentStep,
        setCurrentStep,
        personalData,
        setPersonalData,
        nextPage,
        prevPage,
        selectedPlans,
        setSelectedPlans,
        monthly,
        setMonthly,
        yearly,
        addOnsSelectedValue,
        setAddOnsSelectedValue,
        addOnsData,
        setAddOnsData
      }}
    >
      {children}
    </ContextData.Provider>
  );
}
export default ContextStore;
