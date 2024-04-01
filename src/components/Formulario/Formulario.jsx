import "./Formulario.css";
import { useState } from "react";

const Formulario = ({ setAlert }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const validate = (e) => {
    e.preventDefault();

    if (
      name.trim() === "" ||
      email.trim() === "" ||
      password.trim() === "" ||
      confirm.trim() === ""
    ) {
      setAlert({ message: "Debe llenar los campos vacíos", color: "warning" });
      return;
    }

    if (password !== confirm) {
      setAlert({
        message: "Contraseña Incorrecta, vuelva a intentarlo",
        color: "danger",
      });
      return;
    }

    setAlert({ message: "Guardado con Éxito", color: "success" });
    setName("");
    setEmail("");
    setPassword("");
    setConfirm("");
  };

  return (
    <>
      <p>O usa tu email para registrarte</p>
      <form onSubmit={validate}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="mb-3">
          <input
            type="password"
            className="form-control"
            placeholder="Repeat your Password"
            onChange={(e) => setConfirm(e.target.value)}
            value={confirm}
          />
        </div>
        <button type="submit" className="registrarse-btn">
          Registrarse
        </button>
      </form>
    </>
  );
};

export default Formulario;
