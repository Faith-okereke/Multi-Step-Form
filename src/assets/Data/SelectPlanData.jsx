import arcade from "/src/assets/images/icon-arcade.svg";
import advanced from "/src/assets/images/icon-advanced.svg";
import pro from "/src/assets/images/icon-pro.svg";
import { createContext , useState} from "react";


const ContextPlans= createContext()

export const PlanData =({children})=> {
    const [monthly, setMonthly] = useState([
        {
            id: 1,
            img: arcade,
            plan: "Arcade",
            price: 9,
    
        },
        {
            id: 2,
            img: advanced,
            plan: "Advanced",
            price: 12,
        },
        {
            id: 3,
            img: pro,
            plan: "Pro",
            price: 15,
        }
    ]
    )
    const [selectedPlans, setSelectedPlans] = useState({
        title: "",
        price: 0,
        id:null
      });
      
      
    return(
        <ContextPlans.Provider 
        value={{
            monthly,
            setMonthly,
            selectedPlans,
            setSelectedPlans
           
        }} >
            {children}
        </ContextPlans.Provider>
    )
} 



export default ContextPlans