import { useEffect, useState } from "react";
import "./App.css";
import MovieCard from "../components/movieCard/movieCard";

import logo from "../assets/DEVFLIX (17).png";
import searchIcon from "../assets/search.svg";
import Footer from "../components/footer/footer";
import Menu from "../components/menu/menu";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };

  const apiKey = "954cb850";
  const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`;

  useEffect(() => {
    searchMovies("Barbie");
  }, []);
  const searchMovies = async (title) => {
    const response = await fetch(`${apiUrl}&s=${title}`);
    const data = await response.json();

    console.log(data);
    setMovies(data.Search);
  };
  const handlekeyPress = (e) => {
    e.key === "Enter" && searchMovies(searchTerm);
  };
  return (
    <div id="app">
      <div className="logo">
        <img src={logo} alt="logo devflix" />
      </div>
      <div className="searchMenu">
        <ion-icon name="menu-outline" onClick={toggleMenu}></ion-icon>
        {menu && <Menu toggleMenu={toggleMenu} />}
        <div className="search">
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            onKeyDown={handlekeyPress}
          />
          <img
            src={searchIcon}
            alt="icone de pesquisa"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>
      </div>
      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard key={movie.imdbID} movies={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>Nenhum filme encontrado 😭</h2>
        </div>
      )}
      <Footer link={"https:github.com.br"}>Caio Francisco</Footer>
    </div>
  );
};

export default App;
