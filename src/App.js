import "./App.css";
import CharacterList from "./pages/CharacterList";
import { Route, Routes } from "react-router-dom";
import Character from "./pages/Character";
import Search from "./pages/Search";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharacterList />} />
        <Route strict exact path="/:id" element={<Character />} />
        <Route strict exact path="/search" element={<Search />} />
      </Routes>
    </div>
  );
}

export default App;
