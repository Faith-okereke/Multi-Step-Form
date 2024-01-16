import "/src/App.css";
import AddContext from "../Data/AddOnsData";
import ContextPlans from "../Data/SelectPlanData";
import { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

function AddOns() {
  const [isChecked, setIsChecked] = useState({ checked: false });
  let { addOnsSelectedValue, setAddOnsSelectedValue } = useContext(AddContext);
  const { addOnsData, setAddOnsData } = useContext(AddContext);
  const navigate = useNavigate();
  const SelectAddOns = useContext(AddContext);
  const { selectedYearlyPlan } = useContext(ContextPlans);
  const [num, setNum] = useState(0);
  const anyCheckboxChecked = Object.values(isChecked).some(
    (checked) => checked
  );

  const checkAddons = (e, id) => {
    const { name, checked } = e.target;
    setIsChecked((prevState) => {
      return {
        ...prevState,
        [id]: checked,
      };
    }, !isChecked);
    
    console.log(`Checkbox Checked: ${checked}`);
    console.log(`Add-on ID: ${id}`);

    setNum(id + 1);
    setAddOnsSelectedValue((prev) => [...prev, addOnsData[id]]);
    console.log(addOnsSelectedValue);

  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!anyCheckboxChecked) {
      toast.error("Select at least one addons");
    } else {
      navigate("/review");
    }

    console.log(isChecked.checked);
  };
  return (
    <div className="mainSection">
      <ToastContainer />
      <h2>Pick add-ons</h2>
      <p>Add-ons help enhance your gaming experience.</p>
      <form>
        {SelectAddOns.addOnsData.map((item) => (
          <div
            onClick={(e) => checkAddons(e, item.id)}
            style={
              isChecked[item.id]
                ? {
                    border: "1.5px solid  hsl(243, 100%, 62%)",
                    cursor: "pointer",
                  }
                : { border: "1px solid hsl(229, 24%, 87%)", cursor: "pointer" }
            }
            className="boxes"
            key={item.id}
          >
            <div className="boxes-first">
              <input
                onChange={(e) => checkAddons(e, item.id)}
                type="checkbox"
                name={`checked-${item.id}`}
                id={`checked-${item.id}`}
                checked={isChecked[item.id]}
              />

              <div>
                <h4>{item.topic}</h4>
                <p>{item.perks}</p>
              </div>
            </div>
            <p>
              {selectedYearlyPlan
                ? `+$${item.price * 10}/yr`
                : `+$${item.price}/mo`}
            </p>
          </div>
        ))}
        <div className="bottom mt-0">
          <Link className="goBack no-underline" to="/select-plan">
            Go back
          </Link>
          <button
            onClick={handleSubmit}
            type="submit"
            className="bg-blue text-white py-2 px-3 rounded-md text-xs float-right cursor-pointer mt-8"
          >
            Next
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddOns;
