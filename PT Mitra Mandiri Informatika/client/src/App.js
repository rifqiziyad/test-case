import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import home from "../src/pages/home/home";
import form from "./pages/form/form";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={home} />
        <Route path="/form" exact component={form} />
      </Switch>
    </Router>
  );
}

export default App;
