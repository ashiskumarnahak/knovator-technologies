import React, { useState, useEffect } from 'react';
import './App.css';
import Axios from "axios";
import Card from "./components/card";
import logo from './assets/log.png'; // ✅ Import the logo

function App() {
  const baseUrl = "http://localhost:3001";

  const [values, setValues] = useState({});
  const [games, setGames] = useState([]);

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    Axios.post(`${baseUrl}/register`, {
      name: values.name,
      cost: values.cost,
      category: values.category,
    }).then((response) => {
      console.log(response);
      setGames([...games, values]);
    });
  };

  useEffect(() => {
    Axios.get(`${baseUrl}/games`).then((response) => {
      setGames(response.data);
    });
  }, []);

  return (
  <div className="App">
    <div className="app-wrapper">
      <header className="header">
        <img src={logo} alt="Knovator Logo" className="logo" />
        <h1>Knovator Technologies - Game Shop Management System</h1>
      </header>

      <main className="container">
        <section className="form-section">
          <h2>Add a Game</h2>
          <div className="register-box">
            <input className="register-input" type="text" name="name" placeholder="Title" onChange={handleChangeValues} />
            <input className="register-input" type="text" name="cost" placeholder="Cost" onChange={handleChangeValues} />
            <input className="register-input" type="text" name="category" placeholder="Category" onChange={handleChangeValues} />
            <button className="register-button" onClick={handleClickButton}>Add</button>
          </div>
        </section>

        <section className="cards-section">
          <h2>Available Games</h2>
          <div className="cards">
            {games.map((game) => (
              <Card
                key={game.idgames}
                id={game.idgames}
                name={game.name}
                cost={game.cost}
                category={game.category}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>© 2025 Game Shop. Built with ❤️ by Knovator Technologies Pvt Ltd.</p>
      </footer>
    </div>
  </div>
);

}

export default App;
