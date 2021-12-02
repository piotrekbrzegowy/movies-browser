import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { MovieList } from "./features/MovieList/";
import { Header } from "./common/Header/";
import { PeopleList } from "./features/PeopleList";

function App() {

  return <div className="App">
      <HashRouter>
        <nav>
          <Header />
          <Switch>
            <Route path="/movies">
              <MovieList />
            </Route>
            <Route path="/people">
              <PeopleList />
            </Route>
            <Route path="/">
              <Redirect to="/movies" />
            </Route>
          </Switch>
        </nav>
      </HashRouter>
  </div>;
};

export default App;
