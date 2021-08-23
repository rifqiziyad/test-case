import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import FirstForm from "./pages/form/FirstPage";
import SecondPage from "./pages/form/SecondPage";
import Confirmation from "./pages/form/Confirmation";
import MovieById from "./pages/movieByid/MovieById";
import Search from "./pages/search/Search";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/first-form" exact component={FirstForm} />
        <Route path="/second-form" exact component={SecondPage} />
        <Route path="/confirmation" exact component={Confirmation} />
        <Route path="/tv/:id" exact component={MovieById} />
        <Route path="/search-movie" exact component={Search} />
      </Switch>
    </Router>
  );
}

export default App;
