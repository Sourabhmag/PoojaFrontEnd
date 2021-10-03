import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Loan from "./components/Loan";
import Menu from "./Menu";
import Pooja from "./components/Pooja";
import CollectionAgent from "./components/CollectionAgent";

function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route exact path="/" component={Menu}></Route>
          <Route exact path="/pooja" component={Pooja}></Route>
          <Route exact path="/agent" component={CollectionAgent}></Route>
          <Route exact path="/loan" component={Loan}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
