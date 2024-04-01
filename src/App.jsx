import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Registro from "./components/Registro/Registro";

const App = () => {
  return (
    <>
      <div className="shadow-lg p-5 mb-5 bg-body-tertiary rounded">
        <h1 className="titulo text-body mb-4">Crea una cuenta</h1>
        <Registro />
      </div>
    </>
  );
};

export default App;
