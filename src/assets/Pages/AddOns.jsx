import "/src/App.css";
import { ContextData } from "../../ContextStore";
import { useContext, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import AddOnsContext from "../Data/AddOnsData";
import PrevNextKeys from "../Component/PrevNextKeys";

function AddOns() {
  const [checkedAddOns, setCheckedAddOns] = useState({});
  const {
    nextPage,
    addOnsSelectedValue,
    setAddOnsSelectedValue,
    selectedYearlyPlan,
    addOnsData,
  } = useContext(ContextData);

  const anyCheckboxChecked = Object.values(checkedAddOns).some(Boolean);

  const checkAddons = (e, id) => {
    const { checked } = e.target;
    setCheckedAddOns(prev => ({ ...prev, [id]: checked }));

    setAddOnsSelectedValue(prev => {
      if (checked && addOnsData && addOnsData[id]) {
        return [...prev, addOnsData[id]];
      } else {
        return prev.filter(addon => addon.id !== id);
      }
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!anyCheckboxChecked) {
      toast.error("Select at least one add-on");
    } else {
      nextPage();
    }
    console.log(addOnsSelectedValue)
  };

  return (
    <div className="">
      <ToastContainer />
      <h2 className="font-[700] text-[22px] text-marineBlue">Pick add-ons</h2>
      <p className="pb-[15px] text-coolGray text-[12px]">
        Add-ons help enhance your gaming experience.
      </p>
      <form onSubmit={handleSubmit}>
        {AddOnsContext.map((item) => (
          <div
            key={item.id}
            className={`flex mt-[10px] md:w-[400px] w-full justify-between border-solid rounded-lg cursor-pointer p-3 items-center ${
              checkedAddOns[item.id] 
                ? "border-[1.5px] border-purpleBlue" 
                : "border border-coolGray"
            }`}
          >
            <div className="flex items-center gap-3">
              <input
                type="checkbox"
                id={`checked-${item.id}`}
                checked={checkedAddOns[item.id] || false}
                onChange={(e) => checkAddons(e, item.id)}
              />
              <div>
                <h4 className="text-marineblue text-[13px] sm:text-[12px] py-1 text-marineBlue font-bold">
                  {item.topic}
                </h4>
                <p className="text-[9px] sm:text-[9px] text-coolGray">
                  {item.perks}
                </p>
              </div>
            </div>
            <p className="text-[9px] text-purpleBlue">
              {selectedYearlyPlan
                ? `+$${item.price * 10}/yr`
                : `+$${item.price}/mo`}
            </p>
          </div>
        ))}
        <PrevNextKeys />
      </form>
    </div>
  );
}

export default AddOns;