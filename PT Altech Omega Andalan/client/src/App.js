// import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import io from "socket.io-client";

import Login from "../src/pages/login/login";
import Register from "../src/pages/register/register";
import Chat from "../src/pages/chat/chat";

function App() {
  // const [socket, setSocket] = useState(null)

  return (
    <Router>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/" component={Chat} />
      </Switch>
    </Router>
  );
}

export default App;
