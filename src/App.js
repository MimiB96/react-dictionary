import logo from "./logobook.png";
import { Container } from "react-bootstrap";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <Container className="App">
      <Container className="Container-header">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
      </Container>
      <Container className="Container-body">
        <main>
          <Dictionary defaultKeyword="Dictionary" />
        </main>
      </Container>
      <Container className="Container-footer">
        <footer className="text-center">
          <a
            href="https://github.com/MimiB96/react-dictionary"
            target="_blank"
            rel="noreferrer"
          >
            Open-Source Code
          </a>{" "}
          by Mimi Bribena
        </footer>
      </Container>
    </Container>
  );
}
