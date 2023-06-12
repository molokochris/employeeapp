import AddEmployee from "./AddEmployee";
import { Navigate, useNavigate } from "react-router-dom";
import data from "../Data/data.json"
import { useState } from "react";

export default function ViewEmployees() {

    const [employees, setEmployees] = useState(data);

    const navigate = useNavigate(); 
    const goBack = () => {
        navigate(-1);
    };

    
    
    return (
        <div className="view">
            <button onClick={goBack}>back</button>
            <div className="view-header">
                <b>22Bit Employees</b>
            </div>
            <table className="employee-table">
                        <tr>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Contact No.</th>
                            <th>Email</th>
                            <th>ID</th>
                            <th>Employee Position</th>
                        </tr>
                        {employees.map((employee) => (<tr>
                            <td>{employee.firstName}</td>
                            <td>{employee.surname}</td>
                            <td>{employee.contact}</td>
                            <td>{employee.email}</td>
                            <td>{employee.id}</td>
                            <td>{employee.position}</td>
                        </tr>
                    
                ))}
                </table>
        </div>
    );
}