import { Outlet } from "react-router-dom";
import "./App.css";
import HeaderBar from "./components/HeaderBar";

function App() {
  return (
    <>
      <HeaderBar />
      <Outlet />
    </>
  );
}

export default App;
