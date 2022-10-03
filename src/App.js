import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <link
            type="image/png"
            sizes="96x96"
            rel="icon"
            href=".../icons8-book-96.png"
          >
            image
          </link>
        </header>
        <main>
          <Dictionary />
        </main>
        <footer>
          <a
            target="_blank"
            href="https://icons8.com/icon/43593/book"
            rel="noreferrer"
          >
            Book
          </a>{" "}
          icon by{" "}
          <a target="_blank" href="https://icons8.com" rel="noreferrer">
            Icons8
          </a>
        </footer>
      </div>
    </div>
  );
}
