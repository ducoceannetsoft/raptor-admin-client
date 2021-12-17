import logo from "./logo.svg";
import "./App.css";
import ExchangeRates from "./pages/exchangeRates/ExchangeRates";
import LoginPage from "./pages/authentication/LoginPage";
import Global from "./styles/Global";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Global />
        <LoginPage />
        {/* <ExchangeRates /> */}
      </header>
    </div>
  );
}

export default App;
