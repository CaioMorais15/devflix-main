//para utilizar o componente crie o import na pagina que deseja 
//coloque o nome da pessoa entre <Footer>NomePessoa</Footer>
//passe a informação dentro da tag Footer - LINK 
//<footer link=()>ProfCastello</Footer>

import SocialLinks from "../sociaLinks/sociallinks";
import "./footer.module.css";
import "https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"

const Footer = ({ children, link }) => {
  return (
    <footer>
      <p>
        Feito com <ion-icon name="heart" /> por {""}
        <a href={link}  target="_blank">
          {children}
          </a>
          </p>
            <SocialLinks icon={"logo-instagram"} href={"https://www.instagram.com/morais_caio06/"} />
            <SocialLinks icon={"logo-github"} href={"https://github.com/CaioMorais15"} />
            <SocialLinks icon={"logo-tiktok"} href={"https://www.tiktok.com/@caiofrancisco159"} />
            <SocialLinks icon={"logo-linkedin"} href={"https://www.linkedin.com/in/caio-francisco-8412ab28a/"} />
            <SocialLinks icon={"logo-twitter"} href={"https://twitter.com/1CaioFrancisco1"} />
    </footer>
  );
};
export default Footer;
