import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { MovieList } from "./features/MovieList/";
import { Header } from "./common/Header/";
import { apiConnect } from "./common/apiConnect";

function App() {
  apiConnect("https://api.themoviedb.org/3/movie/popular?api_key=54628f6d7df0fa35378bd39ea74a55d1&language=en-US&page=1");

  return <div className="App">
    <HashRouter>
      <nav>
        <Header />
        <Switch>
          <Route path="/movies">
            <MovieList />
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
