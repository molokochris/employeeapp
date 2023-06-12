import LandBanner from "../components/LandBanner";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
        <LandBanner />
        <div className="container">
            <Link to="/add">Add Employees</Link>
            <Link to="/view">View Employees</Link>
        </div>
    </>
  );
}
