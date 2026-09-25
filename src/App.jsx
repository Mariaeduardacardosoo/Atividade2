import Apresentacao from "./components/Apresentacao";
import Adicao from "./components/Adicao";
import Subtracao from "./components/Subtracao";
import Multiplicacao from "./components/Multiplicacao";
import Divisao from "./components/Divisao";

function App() {
  const numero1 = 10;
  const numero2 = 5;

  return (
    <div>
      <Apresentacao />

      <hr />

      <h1>Calculadora</h1>
      <Adicao a={numero1} b={numero2} />
      <Subtracao a={numero1} b={numero2} />
      <Multiplicacao a={numero1} b={numero2} />
      <Divisao a={numero1} b={numero2} />
    </div>
  );
}

export default App;