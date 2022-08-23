import React, { useState} from "react";
import HomePage from './Home';
import Calander from './Calander';
import CreateRecipes from './CreateRecipe';
import SearchRecipes from './SearchRecipe';
import SignOut from './SignOut';
import CoreNavigation from "./CoreNavigation";
import Footer from "../Footer/footer"
import Header from "../Header";

function CorePage() {
    const [currentPage, handlePageChange] = useState("HomePage");

    const renderPage = () => {
        switch (currentPage) {
            case "Home" :
                return <HomePage/>
            case "Calander" :
                return <Calander/>
            case "CreateRecipes" :
                return <CreateRecipes/>
            case "SearchRecipes" :
                return <SearchRecipes/>
            case "SignOut" :
                return <SignOut/>
        }
    };
    return (
        <div>
          <Header></Header>
          {/* Pass the state value and the setter as props to NavTabs */}
          <CoreNavigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
          {/* Call the renderPage function passing in the currentPage */}
          <main>
            <div>{renderPage(currentPage)}</div>
          </main>
          <Footer></Footer>
        </div>
      );
}

export default CorePage;
