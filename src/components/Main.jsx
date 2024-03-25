import "./Main.css";
import { FiDownload } from "react-icons/fi";
import { IoIosArrowForward } from "react-icons/io";

import resume from "../files/torben-bis-cv.pdf";

const Main = () => {
  return (
    <main className="Main">
      <section className="resume">
        <h2>Hi there...</h2>
        <p>
          I am at the end of my training to become a Full Stack Web Developer -
          MERN Stack. My focus is currently on the final project, where you can
          get a first overview of what I have learned. I'm looking forward to
          new perspectives soon!
        </p>
        <div className="link-container">
          <a
            href="https://trellomania-frontend.onrender.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <span>Final Project</span>
            <IoIosArrowForward />
          </a>
          <a href={resume} download>
            <span>Résumé</span>
            <FiDownload />
          </a>
        </div>
      </section>
    </main>
  );
};

export default Main;
