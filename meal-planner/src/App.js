import './App.css';
import Nav from './components/Nav/nav';
import Recipes from './components/Recipes/recipes';
import Today from './components/Today/today.js';
function App() {
  return (
    <div>
      <Nav></Nav>
      <div className='row'>

      <Today></Today>
      <Recipes></Recipes>
      </div>
      footer
    </div>
  );
}

export default App;
