import { useState, useEffect } from "react";
import { useData } from "./hooks/useDate";
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
function BitcoinRates() {
const [currency, setCurrency] = useState(currencies[0]);
// fetch URL: https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}
useEffect(() => {
    console.log('running effect');
let ignore = false;
useData(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}` +
'currency=' + currency)

.then(response => response.json())
.then(json => {
if (!ignore) setCurrency(json.currency);
});

return() => {
    ignore = true;
    console.log('ceanup effect');
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
</div>
)
}
