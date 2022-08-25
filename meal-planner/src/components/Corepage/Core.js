import HomePage from './Home';
import Calander from './Calander';
import CreateRecipes from './CreateRecipe';
import SearchRecipes from './SearchRecipe';
import SignOut from './SignOut';
import Footer from "../Footer/footer"
import Header from "../Header";
import Tabs from "./Tabs";


const data = [
  {
    heading: "Home",
    body: <HomePage />
  },
  {
    heading: "Calander",
    body: <Calander />
  },
  {
    heading: "Search Recipe",
    body: <SearchRecipes />
  },
  {
    heading: "Create Recipe",
    body: <CreateRecipes />
  },
  {
    heading: "Sign-out",
    body: <SignOut />
  }
];

function CorePage() {
    return (
        <div>
          <Header />
          <Tabs data={data} />
          <Footer />
        </div>
      );
}

export default CorePage;