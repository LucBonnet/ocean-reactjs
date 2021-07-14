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
  {
    id: 2,
    nome: "Ivysaur",
    imagemUrl:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
  },
];

function Item({ indice }) {
  const item = lista[indice];

  return <div>{item.nome}</div>;
}

function Lista() {
  return (
    <div>
      <Item indice={0} />
      <Item indice={1} />
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
