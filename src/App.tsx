import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Form from "./pages/Form";
import Login from "./pages/Login";
import { About } from "views/About";
import { Home } from "views/Home";
import { HR } from "views/HR";
import { Financer } from "views/Financer";
import { ProductManager } from "views/ProductManager";
import { Admin } from "views/Admin";
import { QueryClient, QueryClientProvider } from "react-query";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <>
            <Routes>
              <Route path="/About" element={<About />} />
              <Route path="/Form" element={<Form />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Admin" element={<Admin />} />
              <Route path="/ProductManager" element={<ProductManager />} />
              <Route path="/Financer" element={<Financer />} />
              <Route path="/HR" element={<HR />} />
              <Route path="/" element={<Home />} />
            </Routes>
        </>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
