import logo from '../../images/ic_logo.svg';
import './App.css';
import Header from "../Header/Header";
import Navigation from "../Navigation/Navigation";
import Footer from "../Footer/Footer";

function App() {
  return (
      <div className="app">
          <Header>
              <Navigation />
          </Header>
          <Footer/>
      </div>
  );
}

export default App;
