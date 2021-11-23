import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { MovieList } from "./features/MovieList/";
import { Header } from "./common/Header/";
function App() {
  return <div className="App">
    <HashRouter>
      <nav>
        <Header />
        <Switch>
          <Route path="/filmy">
            <MovieList />
          </Route>
          <Route path="/">
            <Redirect to="/filmy" />
          </Route>
        </Switch>
      </nav>
    </HashRouter>
  </div>;
};

export default App;
