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
    <div className="mainSection rounded-lg z-10 bg-white mt-[-50px] pl-3 pr-3 mx-[20px] pb-3 sm:mt-0">
      <h2  className="font-[700] text-[20px]">Finishing up</h2>
      <p className="pb-[15px] text-[12px] text-coolGray"> Double-check everything looks OK before confirming.</p>
      <div className="finish-all">
        <div className="finish border-b-[1px]">
        <div className="flex items-center justify-between ">
            <h5 className="text-sm font-900 text-marineBlue">
              {selectedPlans.plan}{selectedMonthlyPlan ? `(Monthly)` : `(Yearly)`}
            </h5>

          <p className="text-[10px] font-bold text-marineBlue">${selectedMonthlyPlan ? `${selectedPlans.price}` : `${selectedPlans.price *10}`}  {selectedMonthlyPlan ? `/mo` : `/yr`}</p>
        </div>
        <Link className="text-coolGray span-change " to="/select-plan">
              Change
            </Link>
            </div>
        {addOnsSelectedValue.map((item, index)=>(
           <div className="finish-2" key={item.id}>
           <p className="text-coolGray pt-[10px]">{item.topic}</p>
           <p>${selectedMonthlyPlan ? `${item.price}` : `${item.price *10}`}{selectedMonthlyPlan ? `/mo` : `/yr`}</p>
         </div>

        ))}
           
      </div>
      <div className="totalling pt-[20px] p-[10px] flex justify-between items-center gap-[3rem[">
        <p className="text-[12px]">{`Total(per month)`}</p>
        <p className="total-price text-[12px] text-purpleBlue">{selectedMonthlyPlan? totalPerMonth: totalPerMonth*10}{selectedMonthlyPlan ? `/mo` : `/yr`}</p>
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
