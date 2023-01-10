import logo from "./logo.svg";
import "./App.css";
import CountrySelect from "./materialui/MaterialUi";
import IconLabelButtons from "./materialui/MaterialUi";
import InputAdornments from "./materialui/MaterialUi";
import GridComponent from "./materialui/GridComponent";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      {/* <CountrySelect/> */}
      {/* <IconLabelButtons /> */}
      {/* <InputAdornments/> */}
      <GridComponent />
      <CssBaseline />
      <BrowserRouter></BrowserRouter>
      <Routes></Routes>
    </div>
  );
}

export default App;
