import { useState, useEffect } from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
const currencies = ['USD', 'AUD', 'NZD', 'GBP', 'EUR', 'SGD'];
export default function MUIBitcoinRates() {
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
<Card sx={{ maxWidth: 345 }}>
<CardContent>
<Typography gutterBottom variant="h5"
component="div">
Bitcoin Exchange Rate
</Typography>
<label>Choose currency:
<select value={currency} onChange={e =>
setCurrency(e.target.value)}>
{options}
</select>
</label>
<p>1 BTC = {rate ? rate.toFixed(2) : 'Loading...'} {currency}</p>
</CardContent>
</Card>
)
}



