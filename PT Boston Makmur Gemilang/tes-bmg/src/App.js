import Home from "./pages/home/Home";
import FirstForm from "./pages/form/FirstPage";
import SecondPage from "./pages/form/SecondPage";
import Confirmation from "./pages/form/Confirmation";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/first-form" exact component={FirstForm} />
        <Route path="/second-form" exact component={SecondPage} />
        <Route path="/confirmation" exact component={Confirmation} />
      </Switch>
    </Router>
  );
}

export default App;
