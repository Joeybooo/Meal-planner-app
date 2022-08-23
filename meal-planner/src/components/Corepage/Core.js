import React, { useState} from "react";
import HomePage from './Home';
import Calander from './Calander';
import CreateRecipes from './CreateRecipe';
import SearchRecipes from './SearchRecipe';
import SignOut from './SignOut';
import CoreNavigation from "./CoreNavigation";

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
          <nav className="navbar">
            <div className="navbar-brand">
              <a
                className="navbar-item"
                rel="noreferrer"
                target="_blank"
                href=""
              >
                <span className="content is-large">Timely Meals</span>
              </a>
            </div>
          </nav>
          {/* Pass the state value and the setter as props to NavTabs */}
          <CoreNavigation
            currentPage={currentPage}
            handlePageChange={handlePageChange}
          />
          {/* Call the renderPage function passing in the currentPage */}
          <main>
            <div>{renderPage(currentPage)}</div>
          </main>
        </div>
      );
}

export default CorePage;
