import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Login from "../src/pages/login/login";
import Register from "../src/pages/register/register";
import Chat from "../src/pages/chat/chat";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/register" exact component={Register} />
        <Route path="/" exact component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;
