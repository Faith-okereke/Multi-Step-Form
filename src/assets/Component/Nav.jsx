import { NavBar } from "../Data/NavBarData.jsx";
import { ContextData } from "../../ContextStore.jsx";
import { useContext } from "react";

export default function Nav() {
  const { currentStep } = useContext(ContextData);
  return (
    <>
      <div className="md:bg-desktop bg-mobile  bg-no-repeat bg-cover md:pr-12 md:pl-8 md:py-8 py-20 lg:rounded-lg rounded-none">
        <nav className="flex md:flex-col lg:justify-start justify-center gap-5">
          {/* Sidebar start */}
          {NavBar.map((item) => (
            <div className="z-20" key={item.id}>
              <div className="flex justify-start gap-3 items-center">
                <div className="fle justify-center items-center gap-6">
                  <p
                    className={`w-8  flex items-center justify-center h-8   rounded-full ${
                      currentStep === item.id ? `active` : `notActive`
                    }`}
                  >
                    {item.id}
                  </p>
                </div>

                <div className=" md:flex gap-0 flex-col hidden uppercase">
                  <p className=" text-lightBlue text-xs ">{`step ${item.id}`}</p>
                  <p className=" text-sm text-white font-bold">{item.step}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Sidebar end */}
        </nav>
      </div>
    </>
  );
}
