import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

import Login from "./components/login/Login";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import CreateCompany from "./pages/createCompany/CreateCompany";
import CompanyView from "./pages/CompanyView";
import CompanyAdmin from "./pages/CompanyAdmin";
import CompanyProducts from "./pages/CompanyProducts";
import Companies from "./pages/Companies";
import NotFound from "./pages/NotFound";
import OrdersAdmin from "./pages/OrdersAdmin";
import BuyChart from "./pages/buyChart/BuyChart";

import "./styles/main.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Login />} path="/" exact />
          <Route element={<Login />} path="/login" exact />
          <Route element={<Home />} path="/home" exact />
          <Route element={<Admin />} path="/admin" exact />
          <Route element={<BuyChart />} path="/home/buyChart" exact />
          <Route
            element={<CreateCompany />}
            path="/admin/company/create"
            exact
          />
          <Route
            element={<CompanyView />}
            path="/company/:id/:companyName"
            exact
          />
          <Route
            element={<OrdersAdmin />}
            path="/admin/companies/orders"
            exact
          />
          <Route
            element={<CompanyAdmin />}
            path="/admin/companies/:id/:companyName"
            exact
          />
          <Route
            element={<CompanyProducts />}
            path="/admin/companies/companyProducts/:id/:companyName"
            exact
          />
          <Route element={<Companies />} path="/admin/companies" exact />
          <Route element={<NotFound />} path="*" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
