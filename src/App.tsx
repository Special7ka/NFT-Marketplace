import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import CreateAccount from "./components/Pages/CreateAccount";
import ConnectWallet from "./components/Pages/ConnectWallet";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/createAccount" element={<CreateAccount />} />
        <Route path="/connectWallet" element={<ConnectWallet />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
