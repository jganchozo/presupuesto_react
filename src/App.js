import Pregunta from './components/Pregunta';
import React, { useState, useEffect } from 'react';
import Formulario from './components/Formulario';
import Listado from './components/Listado';
import ControlPresupuesto from './components/ControlPresupuesto';

function App() {

  //definir state 
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [pregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [creargasto, guardarCrearGasto] = useState(false);

  useEffect(() => {

    if (creargasto) {
      guardarGastos([...gastos, gasto]); 

      guardarRestante(restante - gasto.cantidad);

      guardarCrearGasto(false);
    }

  }, [gasto, creargasto, gastos, restante]);

  // const agregarNuevoGasto = (gasto) => {
  //   guardarGastos([...gastos, gasto]);
  // }

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
            <Formulario guardarGasto={guardarGasto} 
                        guardarCrearGasto={guardarCrearGasto}
            />
          </div>
          <div className="one-half column">
            <Listado gastos={gastos}/>
            <ControlPresupuesto
              presupuesto={presupuesto}
              restante={restante}
            />
          </div>
        </div>
      )}        

      </div>
    </div>
  );
}

export default App;
