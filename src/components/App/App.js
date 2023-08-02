import './App.css';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import Main from '../Main/Main';

function App() {
  return (
      <div className='app'>
          <Header>
              <Navigation />
          </Header>
          <Main />
          <Footer/>
      </div>
  );
}

export default App;
