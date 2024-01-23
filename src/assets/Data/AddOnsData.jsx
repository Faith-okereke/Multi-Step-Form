import { useState}  from "react";
import { createContext } from "react";
const AddContext = createContext()
export const AddOnsContext =({children})=>{
    const [addOnsData, setAddOnsData] = useState([
        {
            id: 1,
            topic: "Online Research" ,
            perks: "Access to multiple players",
            price: 1,
        },
    
        {
            id: 2,
            topic: "Larger Storage" ,
            perks: "Extra 1TB of cloud save",
            price:2,
        },
        {
            id: 3,
            topic: "Customizable profile" ,
            perks: "Custom theme on your profile",
            price: 2,
        },
    ])
    const [addOnsSelectedValue, setAddOnsSelectedValue] = useState([
        addOnsData
    ])
    return(
        <AddContext.Provider 
        value={{
            addOnsData,
            setAddOnsData,
            addOnsSelectedValue,
            setAddOnsSelectedValue,
        }}
        >
        {children}
        </AddContext.Provider>
    )
}
export default AddContext