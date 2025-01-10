import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import Login from "./pages/Login";
import { Navbar } from "./components/Navbar/Navbar";
import { About } from "views/About/About";
import { Home } from "views/Home/Home";
import { HR } from "views/HR/HR";
import { Financer } from "views/Financer/Financer";
import { ProductManager } from "views/ProductManager/ProductManager";
import { Admin } from "views/Admin/Admin";


function App() {

  return (
    <BrowserRouter>
    <>
    <Navbar/>
    <Routes>
      <Route path="/About" element={<About/>}/>
      <Route path="/Form" element={<Form/>}/>
      <Route path="/Login" element={<Login/>}/>
      <Route path="/Admin" element={<Admin/>}/>
      <Route path="/ProductManager" element={<ProductManager/>}/>
      <Route path="/Financer" element={<Financer/>}/>
      <Route path="/HR" element={<HR/>}/>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </>
    </BrowserRouter>
  );
}

export default App;
