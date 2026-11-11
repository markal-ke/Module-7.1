import { useState } from "react";
import "./App.css";
import Emoji from "./components/Exercise_3/Emoji.jsx";
import LoginForm from "./LoginForm.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import RoutesApp from "./routes/RoutesApp.jsx";
import BitcoinRates from "./Module-7/BitcoinRates.jsx";

import Navbar from "./Module-7/NavBar.jsx";
import AppBar from "./Module-7/AppBar.jsx";
import {useUserContext, UserProvider} from "./Module-7/context/UserContext.jsx";
import {useEmojiContext, EmojiProvider} from "./components/Exercise_3/EmojiContext.jsx";

function App() {
  const [count, setCount] = useState(0);

  const divStyle = {
    background: "lightblue",
    padding: "1em",
    fontWeight: "bold",
  };

    function App() {
return (
<UserProvider>
<MyThemeProvider>
<AppRoutes />
</MyThemeProvider>
</UserProvider>
)
} // ++ Create a Footer component as well and add under AppRoutes


  return (
    <>
     
    <BitcoinRates />

    <EmojiProvider>
      <Emoji />
    </EmojiProvider>
    

     <Navbar />
    <AppRoutes />


    <AppBar />
    <RoutesApp />
    


    </>
  );
}

export default App;
