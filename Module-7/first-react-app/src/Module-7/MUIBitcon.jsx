import { Container, Typography, Card, CardContent } from "@mui/material";

function BitcoinRates() {
  return (
    <Container>
      <Typography variant="h4" sx={{ my: 3 }}>
        Bitcoin Rates
      </Typography>

      <Card>
        <CardContent>
          <Typography>
            BTC Price: $65,000
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

export default BitcoinRates;