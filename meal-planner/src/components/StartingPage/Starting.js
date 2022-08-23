import React, { useState} from "react";
import About from './About';
import LoginSignup from "./LoginSignup";
import Navigation from "./Navigation";

function StartingPage() {
    const [currentPage, handlePageChange] = useState("About");

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "LogInSignUp":
                return <LoginSignup />
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
                <span className="content is-large">Time Meals</span>
              </a>
            </div>
          </nav>
          {/* Pass the state value and the setter as props to NavTabs */}
          <Navigation
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

export default StartingPage;