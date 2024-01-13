import "/src/App.css";
import { NavBar } from "../Data/NavBarData.jsx";
import backgroundImage from "../../assets/images/bg-sidebar-desktop.svg";
export default function Nav() {
  return (
    <>
    <div className="nav bg">
    <nav
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width: "200px",
          padding: "10px",
          backgroundSize: "cover",
          height: "450px",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Sidebar start */}
        {NavBar.map((item) => (
          <div
            className=" w-200  bg-cover bg-center  bg-no-repeat p-15 rounded-10"
            key={item.id}
          >
            <div className="sideBarInfo">
              <p
                style={{
                  fontSize: "14px",
                  border: "1px solid #ffffff",
                  borderRadius: "50%",
                  objectFit: "contain",
                  width: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  color: "#fff",
                  cursor: "pointer",
                }}
              >
                {item.id}
              </p>

              <div className="items">
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
