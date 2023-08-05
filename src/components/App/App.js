import './App.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';
import {Route, Routes} from "react-router-dom";
import NotFound from "../NotFound/NotFound";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import Movies from "../Movies/Movies";

function App() {
  return (
      <main className='app'>
          <Routes>
              <Route path='/' element={ <Main /> } />
              <Route path='/movies' element={ <Movies /> } />
              <Route path='/saved-movies' element={ <SavedMovies /> } />
              <Route path='/profile' element={ <Profile name={'Виталий'} /> } />
              <Route path='/signin' element={ <Login /> } />
              <Route path='/signup' element={ <Register /> } />
              <Route path='*' element={ <NotFound /> } />
          </Routes>
      </main>
  );
}

export default App;
