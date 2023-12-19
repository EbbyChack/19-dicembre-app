import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import MyNav from "./components/MyNav";
import Footer from "./components/Footer";
import Welcome from "./components/Welcome";
import Container from "react-bootstrap/esm/Container";
import AllTheBooks from "./components/AllTheBooks";

import scifi from "./data/scifi.json";
import fantasy from "./data/fantasy.json";
import history from "./data/history.json";
import horror from "./data/horror.json";
import romance from "./data/romance.json";

function App() {
  return (
    <div className="App">
      <MyNav brand={"EpiBooks"} link1={"Home"} link2={"Browse"} link3={"About"} />
      <Container>
        <Welcome />
        <AllTheBooks genre={scifi}/>
        <AllTheBooks genre={fantasy}/>
        <AllTheBooks genre={history}/>
        <AllTheBooks genre={horror}/>
        <AllTheBooks genre={romance}/>
      </Container>

      <Footer />
    </div>
  );
}

export default App;
