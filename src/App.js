import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { MovieList } from "./features/MovieList/";
import { Header } from "./common/Header/";
import { Provider } from "react-redux";
import store from "./store";

function App() {

  return <div className="App">
    <Provider store={store}>
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
    </Provider>
  </div>;
};

export default App;
