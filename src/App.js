
import { MovieList } from "./features/MovieList/";
import { Pagination } from "./../src/common/Paignation";
import { Header } from "./common/Header/"


function App() {
  return <div className="App">
    <Header></Header>
    <MovieList></MovieList>
  <Pagination />
  </div>;

}

export default App;
