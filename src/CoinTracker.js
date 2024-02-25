// import { useEffect, useState } from "react";

// // COIN TRACKER
// function App() {
// 	// load the coins
// 	const [loading, setLoading] = useState(true);
// 	// hold the coins in an empty array
// 	const [coins, setCoins] = useState([]);
// 	// as nothing is being watched [], the effect will only run once
// 	useEffect(() => {
// 		// 1. fetching data from url
// 		fetch("https://api.coinpaprika.com/v1/tickers")
// 			// 2. get the json from the coins
// 			.then((response) => response.json())
// 			// 3. set json value to setCoins
// 			// 4. set loading to false
// 			.then((json) => {
// 				setCoins(json);
// 				setLoading(false);
// 			});
// 	}, []);
// 	return (
// 		<div>
// 			<h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
// 			{loading ? (
// 				<strong>Loading...</strong>
// 			) : (
// 				<select>
// 					{/* index is not needed as coin has an index itself */}
// 					{/* each coin in the coins array */}
// 					{coins.map((coin) => (
// 						<option>
// 							{coin.name} ({coin.symbol}) : {coin.quotes.USD.price} USD
// 						</option>
// 					))}
// 				</select>
// 			)}
// 		</div>
// 	);
// }
