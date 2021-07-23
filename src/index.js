import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";

// Read All
// Dados -> 'Nome' e 'URL da imagem'

const list = [
  {
    id: 1,
    nome: "Bulbasaur",
    imagemUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png`,
  },
  {
    id: 2,
    nome: "Ivysaur",
    imagemUrl:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
  },
  {
    id: 3,
    nome: "Venusaur",
    imagemUrl:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
  },
  {
    id: 4,
    nome: "Charmander",
    imagemUrl:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
  },
  {
    id: 5,
    nome: "Charmeleon",
    imagemUrl:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
  },
  {
    id: 6,
    nome: "Charizard",
    imagemUrl:
      "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
  },
];

function Item(props) {
  const item = props.item;

  return (
    <a href={`/visualizar/${item.id}`}>
      <div className="item">
        <h1 className="item__title">{item.nome}</h1>
        <img src={item.imagemUrl} alt={item.nome} width="200" />
      </div>
    </a>
  );
}

function Lista() {
  const [lista, setLista] = useState("");

  useEffect(() => {
    if (!lista) {
      obterResultado();
    }
  });

  const obterResultado = async () => {
    const resultado = await fetch("http://localhost:3300/pokemons", {});

    const dados = await resultado.json();

    setLista(dados);
  };

  if (!lista) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="lista">
      {lista.map((item, index) => (
        <Item key={index} item={item} />
      ))}
    </div>
  );
}

function Header() {
  return (
    <a href="/">
      <header className="header">
        <img
          src="https://www.oceanbrasil.com/img/general/logoOceanI.png"
          alt="Logo Samsung Ocean"
          width="300"
        />
      </header>
    </a>
  );
}

function Footer() {
  return <footer className="footer">Todos os direitos reservados.</footer>;
}

function ListarItens() {
  return (
    <div>
      <Lista />
    </div>
  );
}

function Visualizar(props) {
  const id = props.match.params.id;

  return (
    <div className="visualizar">
      <Item indice={id - 1} />
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <Header />
      <Switch>
        <Route path="/" component={ListarItens} exact={true} />
        <Route path="/visualizar/:id" component={Visualizar} />
      </Switch>
      <Footer />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
