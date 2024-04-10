import './App.css';
import "./remixicon.css"
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Movie from './pages/Movie'
import Header from './components/navbar/Navbar';
import MovieList from './components/MovieList';

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/movie" element={<Movie />} />
          <Route path="/list" element={<MovieList />} /> 
        </Routes>
      </Router>
    </>
  );
}

export default App;
 