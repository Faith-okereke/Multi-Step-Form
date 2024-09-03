import React, { useContext } from "react";
import "./App.css";
import AddOns from "./assets/Pages/AddOns";
import Finishing from "./assets/Pages/Finishing";
import Personalnfo from "./assets/Pages/Personalnfo";
import SelectPlan from "./assets/Pages/SelectPlan";
import ThankYou from "./assets/Pages/ThankYou";
import "./index.css";
import { ContextData } from "./ContextStore";
import Nav from "./assets/Component/Nav";
function App() {
  const { currentStep } = useContext(ContextData);
  const formComponents = [Personalnfo, SelectPlan, AddOns, Finishing, ThankYou];
  const validateCurrentStep = () => {
    switch (currentStep) {
      case 1:
        return <Personalnfo />;
      case 2:
        return <SelectPlan />;
      case 3:
        return <AddOns />;
      case 4:
        return <Finishing />;
      default:
        return <ThankYou />;
    }
  };

  return (
    <div className="md:grid min-h-screen place-items-center bg-fullWhite">
      <div className="flex md:flex-row flex-col md:bg-white bg-fullWhite rounded-lg md:p-3 relative md:mt-10 mt-0">
        <Nav />
        <div className="md:px-16 px-8 md:pt-6 pt-8 pb-7 md:min-h-[80vh] min-h-[50vh] bg-white  md:m-auto mx-8 -my-12 z-10 rounded-lg md:rounded-none">
          {React.createElement(formComponents[currentStep - 1] ?? "div")}
        </div>
      </div>

      <div className="flex flex-row md:justify-end justify-center align-baseline mt-20 text-xs md:text-base pb-6">
        <p>
          Challenge by
          <a href="https://www.frontendmentor.io?ref=challenge" target="_blank"> Frontend Mentor</a>
          . Coded by{" "}
          <a href="https://www.frontendmentor/Faith-okereke">Faith Okereke</a>
        </p>
      </div>
    </div>
  );
}
export default App;
