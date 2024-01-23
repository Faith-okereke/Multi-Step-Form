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
        [name]: checked,
      };
    });
    
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
    <div className="mainSection rounded-lg z-10 bg-white mt-[-50px] pl-3 pr-3 mx-[20px] pb-3 sm:mt-0">
      <ToastContainer />
      <h2 className="font-[700] text-[22px] text-marineBlue">Pick add-ons</h2>
      <p  className="pb-[15px] text-coolGray text-[12px]
      
    ">Add-ons help enhance your gaming experience.</p>
      <form>
        {SelectAddOns.addOnsData.map((item) => (
          <div
            onClick={(e) => checkAddons(e, item.id)}
            style={
              isChecked[item.id]
                ? {
                    border: "1.5px solid hsl(243, 100%, 62%)"
                  }
                : { border: "1px solid hsl(229, 24%, 87%)"}
            }
            className="flex mt-[10px] gap-4 justify-between border-solid border-coolGray rounded-lg cursor-pointer p-1.5 items-center"
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
                <h4 className="text-marineblue text-[13px] sm:text-[12px] py-1 text-marineBlue text-bold">{item.topic}</h4>
                <p className="text-[9px] sm:text-[9px] text-coolGray">{item.perks}</p>
              </div>
            </div>
            <p className="text-[9px] text-purpleBlue">
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
            className="bg-marineBlue text-white py-2 px-3 rounded-md text-xs float-right cursor-pointer mt-8"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
}
export default AddOns;
