import React, { fragment } from "react";
import Header from "./components/Header";
import Formulario from "./components/Formulario";

function App() {
  return (
    <fragment>
      <Header titulo="Buscador de noticias" />
      <div className="container white">
        <Formulario />
      </div>
    </fragment>
  );
}

export default App;
