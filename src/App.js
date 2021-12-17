import "./App.css";
import Global from "./styles/Global";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Switch,
} from "react-router-dom";

import LoginPage from "./pages/authentication/LoginPage";
import HomePage from "./pages/home/Home";
import ClientsPage from "./pages/clients/Clients";
import OrdersPage from "./pages/orders/Orders";

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <Global />
      </header> */}
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/login">Login</Link>
              </li>
              <li>
                <Link to="/clients">Clients</Link>
              </li>
              <li>
                <Link to="/orders">Orders</Link>
              </li>
            </ul>
          </nav>
        </div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/orders" element={<OrdersPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
