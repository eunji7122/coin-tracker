import {Coin} from "../models/Coin";

interface Props {
    coins: Coin[];
}

export default function CoinTable({coins}: Props) {

    return (
        <div>
        <table>
            <thead>
            <tr>
                <th>순위</th>
                <th>종목</th>
                <th>기호</th>
                <th>가격(KRW)</th>
                <th>총 시가</th>
                <th>거래량(24H)</th>
                <th>변동(24H)</th>
                <th>변동(7D)</th>
            </tr>
            </thead>
            <tbody>
            {coins.map((coin) =>
                <tr key={coin.id}>
                    <td>{coin.rank}</td>
                    <td>{coin.symbol}</td>
                    <td>₩
                        {Number(
                            coin.quotes.KRW.price.toFixed(1)
                        ).toLocaleString()}</td>
                    <td >
                        {(
                            coin.quotes.KRW.market_cap / 1000000000000
                        ).toFixed(2)}
                        T
                    </td>
                    <td >
                        {(
                            coin.quotes.KRW.volume_24h / 1000000000000
                        ).toFixed(2)}
                        T
                    </td>
                    <td >
                        {coin.quotes.KRW.percent_change_24h.toFixed(2)}%
                    </td>
                    <td >
                        {coin.quotes.KRW.percent_change_7d.toFixed(2)}%
                    </td>
                </tr>
            )}
            </tbody>
        </table>
        </div>
    );
}