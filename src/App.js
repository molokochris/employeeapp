import "./App.css";
import Navigation from "./components/Navigation";
import Container from "./components/Container";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { useState } from "react";
import AuthPage from "./components/AuthPage";
import Register from "./pages/Register";
import Home from "./pages/Home";
import AddEmployee from "./pages/AddEmployee";
import ViewEmployees from "./pages/ViewEmployees";
// import LandBanner from './components/LandBanner';

function App() {
  const [verified, SetVerified] = useState(false);
  // return verified ? (
  //   <div className="App">
  //     <div className="head">
  //       <Navigation />
  //     </div>
  //     <main>
  //       <Container />
  //     </main>
  //     <footer>&copy;</footer>
  //   </div>
  // ) : (
  //   // <Routes>
  //   //   <Route path={"/"} Component={<AuthPage />} />
  //   // </Routes>
  //   <AuthPage />
  // );
  return (
    <Routes>
      {/* <Route index element={<Navigation />} /> */}
      <Route path={"/"} element={<AuthPage />} />
      <Route path={"/Register"} element={<Register />} />
      <Route path={"/Home"} element={<Home />} />
      <Route path={"/add"} element={<AddEmployee />} />
      <Route path={"/view"} element={<ViewEmployees />} />
      {/* <Route path={"/add"} Component={<AddEmployee />} />*/}
      {/* <Route path={"/register"} Component={<Register />} /> */}
    </Routes>
  );
}

export default App;
