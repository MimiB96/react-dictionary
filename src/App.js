import logo from "./logobook.png";
import { Container } from "react-bootstrap";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <Container className="App">
      <Container className="Container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary />
        </main>
        <footer className="text-center">
          <small>Coded by Mimi Bribena</small>
        </footer>
      </Container>
    </Container>
  );
}
