import './App.css';
import Nav from './components/Nav/nav';
import Recipes from './components/Recipes/recipes';
import Footer from './components/Footer/footer';
function App() {
  return (
    <div>
      <Nav></Nav>
      <div className='row'>
      <Recipes></Recipes>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;