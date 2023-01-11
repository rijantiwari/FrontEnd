import logo from "./logo.svg";
import "./App.css";
import CountrySelect from "./materialui/MaterialUi";
import IconLabelButtons from "./materialui/MaterialUi";
import InputAdornments from "./materialui/MaterialUi";
import GridComponent from "./materialui/GridComponent";
import { CssBaseline } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AboutUs from "./materialui/AboutUs";
import Layout from "./materialui/Layout";
import ContactUs from "./materialui/ContactUs";
import PrivateRoutes from "./materialui/PrivateRoutes";
import SignUp from "./Form/Login";
import Login from "./Form/Login";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <PrivateRoutes />
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
