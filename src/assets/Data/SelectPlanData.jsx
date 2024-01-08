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
    const [yearly, setYearly] = useState([
        {
            id: 1,
            img: arcade,
            plan: "Arcade",
            price: " $90",
            
    
        },
        {
            id: 2,
            img: advanced,
            plan: "Advanced",
            price: " $120",
        },
        {
            id: 3,
            img: pro,
            plan: "Pro",
            price: " $150",
        }
    ]
    
    )
    
  const [selectedMonthlyPlan, setSelectedMonthlyPlan] = useState({
    title: "",
    price : null,
  });

  const [selectedYearlyPlan, setSelectedYearlyPlan] = useState({
    title: "",
    price: null
  })
    return(
        <ContextPlans.Provider 
        value={{
            monthly,
            setMonthly,
            yearly,
            setYearly,
            selectedMonthlyPlan,
            setSelectedMonthlyPlan,
            selectedYearlyPlan,
            setSelectedYearlyPlan
        }} >
            {children}
        </ContextPlans.Provider>
    )
} 



export default ContextPlans