import React, { useState, useEffect, useMemo } from "react";
import PlanDataContext from "./assets/Data/SelectPlanData";
import AddOnsContext from "./assets/Data/AddOnsData";

export const ContextData = React.createContext();

const PlanType = {
  MONTHLY: 'monthly',
  YEARLY: 'yearly'
};

function ContextStore({ children }) {
  const [currentStep, setCurrentStep] = useState(1);
  const [isChecked, setChecked] = useState({ checked: false });
  const [personalData, setPersonalData] = useState(() => {
    const storedData = localStorage.getItem("personalData");
    return storedData ? JSON.parse(storedData) : {
      name: "",
      email: "",
      number: "",
    };
  });

  const [selectedPlans, setSelectedPlans] = useState({
    plan: "",
    price: undefined,
    id: null,
  });

  const [planData, setPlanData] = useState(() => {
    const storedData = localStorage.getItem("planData");
    return storedData ? JSON.parse(storedData) : PlanDataContext;
  });

  const [isMonthlyPlan, setIsMonthlyPlan] = useState(true);
  const [addOnsSelectedValue, setAddOnsSelectedValue] = useState([]);
  const [addOnsData, setAddOnsData] = useState(AddOnsContext);

  const nextPage = () => setCurrentStep(prevPage => prevPage + 1);
  const prevPage = () => setCurrentStep(prevPage => prevPage - 1);

  const yearlyPrice = useMemo(() => planData.price * 12, [planData.price]);

  useEffect(() => {
    localStorage.setItem("personalData", JSON.stringify(personalData));
  }, [personalData]);

  useEffect(() => {
    localStorage.setItem("planData", JSON.stringify(planData));
  }, [planData]);

  const contextValue = {
    currentStep,
    setCurrentStep,
    personalData,
    setPersonalData,
    nextPage,
    prevPage,
    selectedPlans,
    setSelectedPlans,
    isMonthlyPlan,
    setIsMonthlyPlan,
    yearlyPrice,
    addOnsSelectedValue,
    setAddOnsSelectedValue,
    addOnsData,
    setAddOnsData,
    PlanType,
    planData,
    setPlanData,
    isChecked,
    setChecked
  };

  return (
    <ContextData.Provider value={contextValue}>
      {children}
    </ContextData.Provider>
  );
}

export default ContextStore;