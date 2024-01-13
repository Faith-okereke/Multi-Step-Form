import "/src/App.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AddOnsContext } from "../Data/AddOnsData";
import ContextPlans from "../Data/SelectPlanData";
import AddContext from "../Data/AddOnsData";

function Finishing() {

  const navigate = useNavigate();
  const SelectAddOns = useContext(AddContext);
  const { selectedMonthlyPlan } = useContext(ContextPlans);
  let { addOnsSelectedValue, setAddOnsSelectedValue } = useContext(AddContext);
  console.log(addOnsSelectedValue);
  const [isChecked, setChecked] = useState({ checked: false });
  const [selectedPlan, setSelectedPlan] = useState(null);
  const SelectPlans = useContext(ContextPlans);

  return (
    <div className="mainSection">
      <h2>Finishing up</h2>
      <p> Double-check everything looks OK before confirming.</p>
      <div className="finish-all">
        <div className="finish">
          <div>
            <h5 className="text-sm font-bold text-marineBlue">
              Arcade(Monthly)
            </h5>
            <Link className="span-change text-xs" to="/select-plan">
              Change
            </Link>
          </div>

          <p>{!selectedMonthlyPlan ? `/mo` : `/yr`}</p>
        </div>
            <div className="finish-2">
              <p>{addOnsSelectedValue}</p>
              <p>${addOnsSelectedValue.price}/mo</p>
            </div>
  
      </div>
      <div className="totalling">
        <p>{`Total(per month)`}</p>
        <p>{}</p>
      </div>
      <div className="bottom">
        <Link className="goBack no-underline" to="/add-ons">
          Go back
        </Link>
        <button
          onClick={() => {
            navigate("/thank-you");
          }}
          className="bg-blue text-white py-2 px-3 rounded-md text-xs float-right cursor-pointer mt-8"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
export default Finishing;
