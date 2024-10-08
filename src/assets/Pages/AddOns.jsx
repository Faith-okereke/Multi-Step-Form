import "/src/App.css";
import { ContextData } from "../../ContextStore";
import { useContext, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import AddOnsContext from "../Data/AddOnsData";
import PrevNextKeys from "../Component/PrevNextKeys";

function AddOns() {
  const {
    nextPage,
    addOnsSelectedValue,
    setAddOnsSelectedValue,
    selectedYearlyPlan,
    addOnsData,
    isChecked
  } = useContext(ContextData);

  const [checkedAddOns, setCheckedAddOns] = useState(() => {
    const initialState = {};
    addOnsSelectedValue.forEach(addon => {
      initialState[addon.id] = true;
    });
    return initialState;
  });

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
    nextPage();
  };


  useEffect(() => {
    const selectedAddOns = Object.entries(checkedAddOns)
      .filter(([_, isChecked]) => isChecked)
      .map(([id]) => addOnsData[id]);
    setAddOnsSelectedValue(selectedAddOns);
  }, [checkedAddOns, addOnsData, setAddOnsSelectedValue]);

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
            className={`flex mt-[10px] md:w-[400px] w-full justify-between border-solid rounded-lg cursor-pointer p-3 items-center hover:border-marineBlue ${
              checkedAddOns[item.id] 
                ? "border-[1px] border-marineBlue" 
                : "border border-coolGray"
            }`}
          >
            <div className="flex items-center gap-3">
              <input
              className="cursor-pointer"
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
              {isChecked.checked
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