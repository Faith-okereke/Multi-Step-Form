import { NavBar } from "../Data/NavBarData.jsx";
import { ContextData } from "../../ContextStore.jsx";
import { useContext } from "react";
export default function Nav() {
  const {currentStep} = useContext(ContextData)
  return (
    <>
      <div className="">
        <nav className=" bg-[url(/bg-sidebar-mobile.svg)]  sm:bg-[url(/bg-sidebar-desktop.svg)] bg-cover bg-no-repeat sm:block flex justify-center md:gap-3 gap-5 items-center p-3 md:w-full w-screen h-full md:rounded-md ">
          {/* Sidebar start */}
          {NavBar.map((item) => (
            <div
              className="md:pl-3 md:pr-16 py-16 md:py-0 md:px-0 "
              key={item.id}
            >
              <div className="flex md:gap-3 items-center justify-start pt-4">
                
                  <p className={`sm:text-[14px] border-white border-[1px] rounded-full object-contain sm:w-[20px] flex justify-center items-center  cursor-pointer  md:w-6 md:h-6 w-12 h-12 md:text-sm text-xl p-5 md:p-0 ${
                    currentStep === item.id ? `active` : `notActive`
                  }`}>
                    {item.id}
                  </p>
                

                <div className="uppercase text-white hidden md:block">
                  <p className=" text-[9px] text-pastelBlue">{`step ${item.id}`}</p>
                  <p className=" text-xs">{item.step}</p>
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
