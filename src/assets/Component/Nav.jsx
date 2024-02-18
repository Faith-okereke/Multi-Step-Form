import "/src/App.css";
import { NavBar } from "../Data/NavBarData.jsx";

export default function Nav() {
  return (
    <>
      <div className="nav">
        <nav className="w-screen sm:w-[200px] bg-[url(/bg-sidebar-mobile.svg)] sm:bg-[url(/bg-sidebar-desktop.svg)] h-[150px] sm:h-[450px] z-[-2] p-[10px] bg-cover bg-repeat sm:block flex justify-center gap-3 items-center">
          {/* Sidebar start */}
          {NavBar.map((item) => (
            <div
              className=" w-200  bg-cover bg-center  bg-no-repeat p-15 rounded-10"
              key={item.id}
            >
              <div className="sideBarInfo">
                <div className="flex ">
                  <p className="sm:text-[14px] border-white border-[1px] rounded-[50%] object-contain sm:w-[20px] flex justify-center items-center text-white cursor-pointer text-[10px] w-[25px] h-[25px]">
                    {item.id}
                  </p>
                </div>

                <div className="items hidden sm:block">
                  <p>{`step ${item.id}`}</p>
                  <p>{item.step}</p>
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
