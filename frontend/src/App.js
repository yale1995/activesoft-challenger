import Questao1 from "./questao_1";
import Questao2 from "./questao_2";
import Questao3 from "./questao_3";
import Questao4 from "./questao_4";
import Questao5 from "./questao_5";
import Questao6 from "./questao_6";

import { MyTextProvider } from "./questao_2/comp2";

function App() {
  return (
    <MyTextProvider>
      <div>
        <Questao1 />
        <hr />
        <Questao2 />
        <hr />
        <Questao3 />
        <hr />
        <Questao4 />
        <hr />
        <Questao5 />
        <hr />
        <Questao6 />
        <hr />
      </div>
    </MyTextProvider>
  );
}

export default App;
