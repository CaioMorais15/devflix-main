import styles from "./menu.module.css";

//const apiKey = "954cb850";
  //const apiUrl = `https://omdbapi.com/?apikey=${apiKey}`; 

const Menu = ({ toggleMenu }) => {

  
  return (
    <div className={styles.clicaFora} onClick={toggleMenu}>
      <div className={styles.menu}>
        <ul>
          <li onClick={() => "htpps"}>
            <a href="">Terror</a>
          </li>
          <li>
            <a href="">Romance</a>
          </li>
          <li>
            <a href="">Ação</a>
          </li>
          <li>
            <a href="">Comédia</a>
          </li>
          <li>
            <a href="">Suspense</a>
          </li>
          <li>
            <a href="">Animação</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Menu;
