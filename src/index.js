import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./index.css";

const ApiURL = "http://192.168.1.101:3300";

// Read All
// Dados -> 'Nome' e 'URL da imagem'

// const list = [
//   {
//     id: 1,
//     nome: "Bulbasaur",
//     imagemUrl: `https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png`,
//   },
//   {
//     id: 2,
//     nome: "Ivysaur",
//     imagemUrl:
//       "https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png",
//   },
//   {
//     id: 3,
//     nome: "Venusaur",
//     imagemUrl:
//       "https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png",
//   },
//   {
//     id: 4,
//     nome: "Charmander",
//     imagemUrl:
//       "https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png",
//   },
//   {
//     id: 5,
//     nome: "Charmeleon",
//     imagemUrl:
//       "https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png",
//   },
//   {
//     id: 6,
//     nome: "Charizard",
//     imagemUrl:
//       "https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png",
//   },
// ];

function Item(props) {
  const item = props.item;

  return (
    <a href={`/visualizar/${item._id}`}>
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
    const resultado = await fetch(`${ApiURL}/pokemons`, {
      headers: { Authorization: "" },
    });

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
    <header className="header">
      <a href="/">
        <img
          src="https://www.oceanbrasil.com/img/general/logoOceanI.png"
          alt="Logo Samsung Ocean"
          width="300"
        />
      </a>
      <a href="/adicionar">Adicionar Item</a>
    </header>
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
  const [item, setItem] = useState("");

  const id = props.match.params.id;

  useEffect(() => {
    if (!item) {
      obterResultado();
    }
  });

  async function obterResultado() {
    const resul = await fetch(`${ApiURL}/pokemons/${id}`, {});

    const dados = await resul.json();

    console.log(dados);

    setItem(dados);
  }

  console.log(item);

  if (!item) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="visualizar">
      <Item item={item} />
    </div>
  );
}

function AdicionarItem(props) {
  const handleSubmit = async (event) => {
    event.preventDefault(event.target);

    const nome = event.target.nome.value;
    const imagemUrl = event.target.imagemUrl.value;

    const dados = {
      nome: nome,
      imagemUrl: imagemUrl,
    };

    const dadosJson = JSON.stringify(dados);

    const resultado = await fetch(`${ApiURL}/pokemons`, {
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      method: "POST",
      body: dadosJson,
    });

    console.log(resultado);

    // const jsonResultado = await resultado.json();

    // console.log(jsonResultado);

    props.history.push("/");
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <label className="form__label" htmlFor="nome">
          Nome:
        </label>
        <input className="form__input" type="text" id="nome" name="nome" />
        <br />
        <label className="form__label" htmlFor="imagemUrl">
          Url da Imagem:
        </label>
        <input
          className="form__input"
          type="url"
          id="imagemUrl"
          name="imagemUrl"
        />
        <br />
        <button className="form__submit" type="submit">
          Adicionar
        </button>
      </form>
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
        <Route path="/adicionar" component={AdicionarItem} />
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
