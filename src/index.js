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

  return (
    <div>
      {item.nome}
      <br />
      <img src={item.imagemUrl} alt={item.nome} width="200" />
    </div>
  );
}

function Lista() {
  return (
    <div>
      {lista.map((item, index) => (
        <Item key={index} indice={index} />
      ))}
    </div>
  );
}

function Header() {
  return <div>Header</div>;
}

function Footer() {
  return <div>Footer</div>;
}

function App() {
  return (
    <div>
      <Header />
      <Lista />
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
