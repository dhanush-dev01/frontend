import logo from "./logo.svg";
import "./App.css";
import Products from "./components/product";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/login";
import Phases from "./components/phases";
import InwardForm from "./components/inwardform";
import OutwardForm from "./components/outwardform";
import QuotationForm from "./components/qutationform";

function App() {
  return (
    <Router>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/phases">
            <Phases/>
          </Route>
          <Route path="/inwardform">
            <InwardForm/>
          </Route>
          <Route path="/outwardform">
            <OutwardForm/>
          </Route>
          <Route path="/quotationform">
            <QuotationForm/>
          </Route>
          <Route path="/">
            <Products/>
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
