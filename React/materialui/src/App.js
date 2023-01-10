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
import ContactUs from "./ContactUs";

function App() {
  return (
    <div className="App">
      <CssBaseline />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<GridComponent />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
