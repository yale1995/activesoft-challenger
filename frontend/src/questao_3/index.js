import { useState, useEffect } from "react";

function Questao3() {
  let [valor, setValor] = useState("");

  function handleSave(event) {
    event.preventDefault();

    sessionStorage.setItem("frontend", event.target.value);

    setValor(event.target.value);
  }

  useEffect(() => {
    let aux = ''

    aux = sessionStorage.getItem('frontend')

    if(aux !== null){
      setValor(aux)
    }

  }, []);

  console.log(valor);

  return (
    <div>
      <h1>Questão 3</h1>
      <input value={valor} onChange={handleSave} />
    </div>
  );
}

export default Questao3;
