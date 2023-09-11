import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./main.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Routes/Home/index.tsx";
import Promo from "./Routes/Promo/index.tsx";
import Subscription from "./Routes/Subscription/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="promo" element={<Promo />} />
          <Route path="inscricao" element={<Subscription />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
