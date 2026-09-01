import Joke from "./components/Joke";
import "./App.css";

export default function App() {
  return (
    <main className="App">
      <header>
        <h1>Joke Generator Using React and Joke API</h1>
      </header>
      <Joke />
    </main>
  );
}
