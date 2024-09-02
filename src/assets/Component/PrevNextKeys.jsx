import React,{useContext} from "react";
import { ContextData } from "../../ContextStore";
export default function PrevNextKeys() {
    const { nextPage, selectedPlans, prevPage } = useContext(ContextData);

  return (
    <div>
      {" "}
      <div className="flex justify-between items-center sm:mt-[30px] pt-20">
        <p
          className=" no-underline text-lightGray font-bold cursor-pointer hover:underline"
          onClick={prevPage}
        >
          Go back
        </p>
        <button
          type="submit"
          className="bg-marineBlue text-white py-3 px-4  rounded-md float-right cursor-pointer text-xs"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}
