import "./App.css";
import BookList from "./components/BookList";

function App() {
  return (
    <div className="container">
      <h1>📚 Book Tracker</h1>
      <div className="book-list">
        <BookList />
      </div>
    </div>
  );
}

export default App;