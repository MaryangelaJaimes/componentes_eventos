import "./Registro.css";
import React, { useState } from "react";
import Formulario from "../Formulario/Formulario";
import Alert from "../Alert/Alert";
import SocialButton from "../SocialButton/SocialButton";

const Registro = () => {
  const [alert, setAlert] = useState({ message: "", color: "" });

  return (
    <>
      <SocialButton />
      <Formulario setAlert={setAlert} />
      {alert.message !== "" && (
        <Alert message={alert.message} color={alert.color} />
      )}
    </>
  );
};

export default Registro;
