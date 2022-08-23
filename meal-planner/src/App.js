import './App.css';
import Nav from './components/Nav/nav';
import Recipes from './components/Recipes/recipes';
import Today from './components/Today/today.js';
import Footer from './components/Footer/footer';
import Navigation from './components/StartingPage/Navigation';
import About from './components/StartingPage/About'

function App() {
  return (
    <div>
      <Navigation></Navigation>
      <About></About>
      <Nav></Nav>
      <div className='row'>

      <Today></Today>
      <Recipes></Recipes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
