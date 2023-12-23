import "./App.css";
import Personalnfo from "./assets/Components/PersonalInfo";
import SelectPlan from "./assets/Components/SelectPlan";
import AddOns from "./assets/Components/AddOns";
import Finishing from "./assets/Components/Finishing";
import ThankYou from "./assets/Components/ThankYou";
import Nav from "./assets/Components/Nav";
import { useState } from "react";
function App() {
  const formArr = [1, 2, 3, 4];
  const [state, setState] = useState(formArr[0]);
  const forward = () => {
    setState(state + 1);
  };
  const backward = () => {
    setState(state - 1);
  };
  const submit = () => {
    window.location.reload();
  };
  return (
    <>
      <div className="all">
        <Nav />
        <div>
          {state === 1 && <Personalnfo />}
          {state === 2 && <SelectPlan />}
          {state === 3 && <AddOns />}
          {state === 4 && <Finishing />}
          {state === 5 && <ThankYou />}
          {state !== 5 && (
            <div className="bottom">
              {state !== 1 && (
                <a href="#" onClick={backward}>
                  Go back
                </a>
              )}
  <div className={state == 1 ? "firstPage" : ""}>
  <button
                
                onClick={state === !4 ? submit : forward}
                type="submit"
              >
                {state === 4 ? "Confirm" : "Next"}
              </button>
  </div>
             
            </div>
          )}
        </div>
      </div>

      <div className="attribution">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Your Name Here</a>
      </div>
    </>
  );
}
export default App;
