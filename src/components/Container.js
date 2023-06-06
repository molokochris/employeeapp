import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import LandBanner from "./LandBanner";
import AddEmployee from "../pages/AddEmployee"
import ViewEmployees from "../pages/ViewEmployees"
import { useState } from "react";

export default function Container() {
    const [currentPage, setCurrentPage] = useState('/');

    const handleClick = (page) => {
        setCurrentPage(page);
    };

    console.log(currentPage === '/')
    console.log(currentPage)
    if (currentPage === '/') {
        return (
            <>
            <LandBanner />
            <Router>
                <div>
                    <div className="container">
                        <Link to="add-employees">
                            <button onClick={() => handleClick('add')}>
                                Add Employees
                            </button>
                        </Link>
                        <Link to="/view-employees">
                            <button onClick={() => handleClick('view')}>
                                View Employees
                            </button>
                        </Link>
                    </div>
                </div>
            </Router>
            </>
            
        );
    } else if (currentPage === 'add') {
        return (
            <AddEmployee />
        );
    } else if (currentPage === 'view') {
        return (
            <ViewEmployees />
        );
    } else {
        return <h1>Error 404 Bitch!</h1>
    }
    
}