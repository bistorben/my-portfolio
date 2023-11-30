import "./Footer.css";
import { FaLinkedin } from "react-icons/fa";
import { FaXingSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="Footer">
      <a
        href="https://www.linkedin.com/in/torben-b-98955068/"
        target="_blank"
        rel="noreferrer"
      >
        <FaLinkedin id="icon-linkedin" />
      </a>
      <a
        href="https://www.xing.com/profile/Torben_Bis"
        target="_blank"
        rel="noreferrer"
      >
        <FaXingSquare id="icon-xing" />
      </a>
      <a href="https://github.com/bistorben" target="_blank" rel="noreferrer">
        <FaGithubSquare id="icon-github" />
      </a>
    </footer>
  );
};

export default Footer;
