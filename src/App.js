import "./App.css";
import Mensaje from "./componentes/Mensaje";

const Description = () => {
  return (
    <p>
      lorem, este es un simple mensaje para ver cual es la definicion de mi
      componente React
    </p>
  );
};

function App() {
  return (
    <div className="App">
      <Mensaje color='red' message="Este es un mensaje" />
      <Mensaje color='blue' message="Hola" />
      <Mensaje message="Otro" />
      <Mensaje message="Mensage" />
      <Description />
      <Description />
      <Description />
      {+new Date()}
    </div>
  );
}

export default App;
