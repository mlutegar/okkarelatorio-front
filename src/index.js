
import React from "react";
import { createRoot } from "react-dom/client";

import Home from "./pages/Home";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import { auth } from "./config/Firebase";
import { onAuthStateChanged } from "firebase/auth";
import Cadastro from "./pages/Cadastro";
import Colaborador from "./pages/Colaborador";
import Formulario from "./pages/Formulario";
import Diretor from "./pages/Diretor";
import FormularioDiretor from "./pages/FormularioDiretor";
import Presidente from "./pages/Presidente";
import FormularioPresidente from "./pages/FormularioPresidente";
import HistorioPresidente from "./pages/HistorioPresidente";
import VisualizarCard from "./pages/VisualizarCard";

const container = document.getElementById("root");
const root = createRoot(container);

onAuthStateChanged(auth, (user)=> {
  if (user) {
    window.sessionStorage.setItem("accessToken", user.accessToken);
  } else {
    window.sessionStorage.removeItem("accessToken");
  }
});

root.render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/colaborador" element={<Colaborador/>} />
        <Route path="/formulario" element={<Formulario/>} />

        <Route path="/diretor" element={<Diretor/>} />
        <Route path="/formulario-diretor" element={<FormularioDiretor/>} />

        <Route path="/presidente" element={<Presidente/>} />
        <Route path="/formulario-presidente" element={<FormularioPresidente/>} />
        <Route path="/historico" element={<HistorioPresidente/>} />

        <Route path="/visualizar-card" element={<VisualizarCard/>} />

        <Route path="/login" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/logout" element={<Logout/>} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
