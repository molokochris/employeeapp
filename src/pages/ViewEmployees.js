import AddEmployee from "./AddEmployee";
import { Navigate, useNavigate } from "react-router-dom";
export default function ViewEmployees() {

    const navigate = useNavigate(); 
    const goBack = () => {
        navigate(-1);
    };
    
    return (
        <div className="">
            <button onClick={goBack}>back</button>
            <div className="view-header">
                <b>22Bit Employees</b>
                
            </div>
        </div>
    );
}