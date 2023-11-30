import "./Main.css";
import { FiDownload } from "react-icons/fi";

const Main = () => {
  return (
    <main className="Main">
      <section className="resume">
        <h2>Hi there...</h2>
        <p>
          I'm just diving into coding my web developer portfolio. Brace yourself
          for an exclusive preview, offering a taste of my coding skills and
          projects. Stay tuned for a sneak peek into my passion for crafting
          digital products!
        </p>
        <a href="../files/torben-bis-cv.pdf" download>
          <span>Résumé</span>
          <FiDownload />
        </a>
      </section>
    </main>
  );
};

export default Main;
