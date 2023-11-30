import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import clock from "./assets/clock.jpg";

function App() {
  return (
    <div className="wrapper">
      <section className="left">
        <Header />
        <Main />
        <Footer />
      </section>
      <section className="right">
        <img src={clock} alt="" />
      </section>
    </div>
  );
}

export default App;
