import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

// Read All
// Dados -> 'Nome' e 'URL da imagem'

const lista = [
  {
    id: 1,
    nome: "Bulbasaur",
    imagemUrl:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
  },
];

function Item() {
  return <div>Item</div>;
}

function Lista() {
  return (
    <div>
      <Item />
    </div>
  );
}

function App() {
  return (
    <div>
      <Lista />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
