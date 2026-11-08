import { Container, TextField, Button, Typography, Box } from "@mui/material";
import { red } from '@mui/material/colors';
import { blueGrey } from '@mui/material/colors';
const color = red[500];

export default function MUIForm() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ mt: 4,  backgroundColor: blueGrey[500]}}>
        <Typography variant="h4" gutterBottom>
          Login
        </Typography>

        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          margin="normal"
          color="secondary"
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          color="secondary"

        />

        <Button
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 2 }}
        >
          Login
        </Button>
      </Box>
    </Container>
  );
}