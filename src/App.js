import React, { useEffect, useState } from "react";
import "./App.css";
import Coin from "./Components/Coin";

function App() {
  const [coins, setcoins] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {
    fetch("https://api.coinstats.app/public/v1/coins?skip=0&limit=50")
      .then((res) => res.json())
      .then((data) => {
        setcoins(data.coins);
      });
  }, []);

  const filterCoins = coins.filter((coin) => {
    return coin.name.toLowerCase().includes(search.toLowerCase())
  });



  return (
    <div className="App">
      <div className="cryptoHeader">
        <h1>Crypto App</h1>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => {
            setSearch(e.target.value);
          }}
        />
      </div>
      <div className="cryptoDisplay">
        {filterCoins.map((coin, index) => {
            return (  
              <Coin
                key={index}
                name={coin.name}
                icon={coin.icon}
                price={coin.price}
                symbol={coin.symbol}
              />
              );
        })}
      </div>
    </div>
  );
}

export default App;
