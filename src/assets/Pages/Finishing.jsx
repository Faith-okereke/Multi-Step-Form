import "/src/App.css";
import { useContext , useState} from "react";
import { Link,useNavigate } from "react-router-dom";
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
            <h5>{selectedPlan}</h5> <Link className="span-change text-sm" to="/select-plan">
            Change
          </Link>
          </div>

          <p>{selectedMonthlyPlan?`/mo` : `/yr`}</p>
        </div>
        {SelectAddOns.addOnsData.map((item)=>{
          return(
            <div key={item.id} className="finish-2">
          <p>{item.topic}</p>
          <p>${item.price}/mo</p>
        </div>
          )
        })}
        
      </div>
      <div className="totalling">
        <p>{`Total(per })`}</p>
        <p>{}</p>
      </div>
      <div className="bottom">
          <Link className="goBack no-underline" to="/add-ons">
            Go back
          </Link>
          <button  onClick={() => {
          navigate("/thank-you");
        }} className="bg-hsl-213-96-18 text-white py-2 px-3 rounded-md text-sm float-right cursor-pointer">
            Next
          </button>
        </div>
    </div>
  );
}
export default Finishing;
