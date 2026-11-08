import { useState, useEffect } from "react";
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
function BitcoinRates() {
const [currency, setCurrency] = useState(currencies[0]);
 const [rate, setRate] = useState(null);
useEffect(() => {
    console.log('running effect');
let ignore = false;
fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}` +
'currency=' + currency)

.then(response => response.json())
.then(json => {
if (!ignore) setRate(json.bitcoin[currency.toLowerCase()]);
});

return() => {
    ignore = true;
    console.log('cleanup effect');
};
}, [currency]);

const options = currencies.map(curr => <option value={curr}
key={curr}>{curr}</option>);
return (
<div className="BitcoinRates componentBox">
<h3>Bitcoin Exchange Rate</h3>
<label>Choose currency:
<select value={currency} onChange={e =>
setCurrency(e.target.value)}>
{options}
</select>
</label>
<p>1 BTC = {rate ? rate.toFixed(2) : 'Loading...'} {currency}</p>
</div>
)
}

export default BitcoinRates