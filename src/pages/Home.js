import LandBanner from "../components/LandBanner";
import { Link } from "react-router-dom";
import Navigation from "../components/Navigation";

export default function Home() {
  return (
    <div className="App">
      <div className="head">
        <Navigation />
      </div>
      <div style={{ textAlign: "center" }}>
        <b>Welcome to 22Bit HR Platform</b>
      </div>
      <main>
        <div className="container">
          <Link to="/add">Add Employees</Link>
          <Link to="/view">View Employees</Link>
        </div>
      </main>
      <footer>&copy;</footer>
    </div>
  );
}
