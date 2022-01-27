import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import {useState} from "react";
import Exo1 from "./Exo1";
import Exo2 from "./Exo2";
import {Exo3} from "./Exo3";
import {Exo4} from "./Exo4";
import {Exo5} from "./Exo5";

function App() {

// Pour l'exo 1
const [nombre, setNombre] = useState(0)
const augmente =  () => {
  setNombre(nombre + 1)
}

// Pour l'exo 2
const [text, setText] = useState(
  {text: "Input content"}
)


const lance = () => {
  alert("Hello")
}

  return (
    <div className="App w-25 mx-auto text-center">
      <Exo1 nombre={nombre} augmente={augmente} />
      <Exo2 setVal={setText}  text={text.text} />
      <Exo3 />
      <Exo4 />
      <Exo5 alert={lance} />

    </div>
  );
}

export default App;
