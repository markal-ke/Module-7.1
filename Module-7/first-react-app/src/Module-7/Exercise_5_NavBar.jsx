import { Link } from "react-router-dom";

function Exercise_5_Navbar() {
  return (
    <nav>
      <ul
        style={{
          display: "flex",
          gap: "20px",
          listStyle: "none",
          padding: "10px",
          backgroundColor: "#eee",
        }}
      >
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/login">Login</Link>
        </li>

        <li>
          <Link to="/bitcoin-rates">Bitcoin Rates</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Exercise_5_Navbar;