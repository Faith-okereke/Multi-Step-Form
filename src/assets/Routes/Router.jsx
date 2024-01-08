import { Route, Routes } from "react-router-dom"
import SelectPlan from "../Pages/SelectPlan"
import Personalnfo from "../Pages/Personalnfo";
import AddOns from "../Pages/AddOns";
import Finishing from "../Pages/Finishing";
import ThankYou from "../Pages/ThankYou";
const Router=()=>{
    return(
        <Routes>
            <Route path="/" element={<Personalnfo/>}/>
            <Route path="/select-plan" element={<SelectPlan/>}/>
            <Route path="/add-ons" element={<AddOns/>}/>
            <Route path="/review" element={<Finishing/>}/>
            <Route path="/thank-you" element={<ThankYou/>}/>

            </Routes>
    )    
}
export default Router