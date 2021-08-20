import "./App.css";

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
