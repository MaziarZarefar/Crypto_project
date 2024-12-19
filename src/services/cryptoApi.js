const Base_URL = "https://api.coingecko.com/api/v3";
const API_key = "CG-QRTeiy5BJ3NQP2UbbcWPf7Tb";
const getCoinList = (page , currency) =>
 `${Base_URL}/coins/markets?vs_currency=${currency}&per_page=20&page=${page}&x_cg_demo_api_key=${API_key}`

const searchCoin = (query) =>
`${Base_URL}/search?query=${query}&x_cg_demo_api_key=${API_key}`;

const marketChart = coin => 
`${Base_URL}/coins/${coin}/market_chart?vs_currency=usd&days=7`

export { getCoinList , searchCoin , marketChart };