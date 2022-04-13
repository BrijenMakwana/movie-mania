
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import MovieScreen from "./screens/MovieScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<HomeScreen />} />
              <Route path="/:type/:id" element={<MovieScreen />}/>
          </Routes>
      </BrowserRouter>
  );
}

export default App;
