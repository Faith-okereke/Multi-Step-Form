import "/src/App.css";
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ContextPlans from "../Data/SelectPlanData";
import AddContext from "../Data/AddOnsData";

function Finishing() {

  const navigate = useNavigate();
  const SelectAddOns = useContext(AddContext);
  const { selectedMonthlyPlan } = useContext(ContextPlans);
  let { addOnsSelectedValue, setAddOnsSelectedValue } = useContext(AddContext)
  const { selectedPlans, setSelectedPlans } = useContext(ContextPlans);
  const SelectPlans = useContext(ContextPlans);
  const totalPerMonth = selectedPlans.price + addOnsSelectedValue.reduce((total, item) => total + item.price, 0);
  console.log(selectedPlans)
  console.log(addOnsSelectedValue)
  return (
    <div className="mainSection">
      <h2>Finishing up</h2>
      <p> Double-check everything looks OK before confirming.</p>
      <div className="finish-all">
        <div className="finish">
          <div >
            <h5 className="text-sm font-900 text-marineBlue">
              {selectedPlans.plan} (Monthly)
            </h5>
            <Link className="text-coolGray span-change " to="/select-plan">
              Change
            </Link>
          </div>

          <p>${selectedPlans.price}{!selectedMonthlyPlan ? `/mo` : `/yr`}</p>
        </div>
        {addOnsSelectedValue.map((item, index)=>(
           <div className="finish-2">
           <p>{item.topic}</p>
           <p>${item.price}/mo</p>
         </div>

        ))}
           
      </div>
      <div className="totalling">
        <p>{`Total(per month)`}</p>
        <p className="total-price text-lg text-purpleBlue">${totalPerMonth}/mo</p>
      </div>
      <div className="bottom">
        <Link className="goBack no-underline" to="/add-ons">
          Go back
        </Link>
        <button
          onClick={() => {
            navigate("/thank-you");
          }}
          className="bg-purpleBlue text-white py-2 px-3 rounded-md text-xs float-right cursor-pointer mt-8"
        >
          Confirm
        </button>
      </div>
    </div>
  );
}
export default Finishing;
