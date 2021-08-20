import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Front from "./container/Front";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Front}></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
