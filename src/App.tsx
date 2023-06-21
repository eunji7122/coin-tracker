import React, {useEffect, useState} from 'react';
import './App.css';
import CoinTable from "./components/CoinTable";

function App() {

    const [loading, setLoading] = useState(true);
    const [coins, setCoins] = useState([]);

    const refresh = () => {
        window.location.reload();
    }

    useEffect(() => {
        fetch("/v1/tickers")
            .then(response => response.json())
            .then(json => {
                setCoins(json.slice(0, 100));
                setLoading(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }, [])

  return (
    <div className="App">
        <div>
            <button onClick={refresh}>새로고침</button>
        </div>
        <div>
            <CoinTable coins={coins}/>
        </div>
    </div>
  );
}

export default App;
