import { useState } from "react";
import Flowers from "./Flowers.jsx";
import "./main.css";
export function Main() {
  const [pass, setPass] = useState(false);
  const [inputSerie, setInputSerie] = useState("");
  const SERIE = ["The mentalist", "El mentalista", "El mentalero", 'mentalero'];

  const handlerInputSerie = (e) => {
    setInputSerie(e.target.value);
  };

  const validation = (e) => {
    e.preventDefault();
    const correctCredentials = SERIE.find(
      (nombre) => nombre.toLowerCase() === inputSerie.toLowerCase()
    );
    console.log(inputSerie);
    if (correctCredentials) {
      setPass(true);
    } else {
      alert("Esa no, amorcito jeje ♥");
    }
  };
  return (
    <>
      {pass && <Flowers />}
      {!pass && (
        <div className="ingreso-container">
          <form>
            <label htmlFor="serie-favorita">
              Ingresá tu serie favorita para ver lo que hay ♥
            </label>
            <input
              type="text"
              placeholder="Tu serie favorita"
              name="serie-favrita"
              id="serie-favorita"
              onChange={handlerInputSerie}
            />
            <button onClick={validation}>Enviar</button>
          </form>
        </div>
      )}
    </>
  );
}
