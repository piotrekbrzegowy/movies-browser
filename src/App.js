import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { MovieList } from "./features/MovieList/";
import { PeopleList } from "./features/PeopleList";
import { MoviePage } from "./features/MoviePage";
import { PersonPage } from "./features/PersonPage";

function App() {
  return (
    <div className="App">
      <HashRouter>
        <nav>
          <Switch>
            <Route path="/movies/movie">
              <MoviePage />
            </Route>
            <Route path="/movies">
              <MovieList />
            </Route>
            <Route path="/people/person">
              <PersonPage />
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
    </div>
  );
}

export default App;
