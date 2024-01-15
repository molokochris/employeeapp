import React, { useEffect, useState } from "react";
import Table from "../components/Table";
import {
  Employee,
  deleteEmployee,
  getEmployees,
  searchEmployees,
} from "../api/services";
import { Link } from "react-router-dom";
import SearchForm from "../components/SearchForm";
import useDebounce from "../hooks/debounce";
import { auth } from "../api/firebase";
import axios from "axios";

const Employees = () => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [search, setSearch] = useState<string>("");
  const [token, setToken] = useState<any>();

  const handleSeachInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearch(value);
  };

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:3000/employees");
        console.log(response.data)
        setEmployees(response.data);
      } catch (error) {
        console.error(error);
        setEmployees([]); // Set an empty array in case of errors
      }
    };
  
    fetchEmployees();
  }, []);

  // useEffect(() => {
  //   const fetchEmployees = async () => {
  //     try {
  //       const employees = await searchEmployees(search);
  //       setEmployees(employees);
  //     } catch (error) {
  //       setEmployees([]);
  //     }
  //   };

  //   search && fetchEmployees();
  // }, [debouncedValue]);

  const handleDeleteEmployee = async (employeeId: string) => {
    try {
      const response = await axios.delete(`http://localhost:3000/employees/${employeeId}`);
  
      if (response.status === 200) { // Check for successful deletion (status code 200)
        setEmployees((prevEmployees) =>
          prevEmployees.filter((employee) => employee.id !== employeeId)
        );
      } else {
        alert("Failed to delete employee. Try again");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to delete employee. Please check your connection and try again.");
    }
  };

  return (
    <div className="relative bg-slate-900 flex flex-col py-10 items-center justify-center h-screen w-screen">
      <div className="w-full xl:w-2/3">
        <Link to="/admin" className="text-red-400 px-3 py-1 left-0">
          Go Back
        </Link>
        <div className="text-white w-full my-4 px-2 md:px-4 p-5 border border-slate-700 shadow ">
          <h3 className="font-semibold text-2xl text-white">Employees</h3>
          <SearchForm handleSearchEmployee={handleSeachInput} />
          <Table employees={employees} handleDelete={handleDeleteEmployee} />
        </div>
      </div>
    </div>
  );
};

export default Employees;
