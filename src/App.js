import Pregunta from './components/Pregunta';
import React, { useState } from 'react';
import Formulario from './components/Formulario';

function App() {

  //definir state 
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [pregunta, actualizarPregunta] = useState(true);

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
      </header>
      <div className="contenido-principal contenido">

      {pregunta 
      ?
      (
        <Pregunta 
          guardarPresupuesto={guardarPresupuesto}
          guardarRestante={guardarRestante}
          actualizarPregunta={actualizarPregunta}
        />
      )
      :
      (
        <div className="row">
          <div className="one-half column">
            <Formulario />
          </div>
          <div className="one-half column">
            2
          </div>
        </div>
      )}        

      </div>
    </div>
  );
}

export default App;
