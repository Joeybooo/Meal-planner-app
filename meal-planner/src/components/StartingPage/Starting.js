import React, { useState} from "react";
import About from './About';
import LoginSignup from "./LoginSignup";
import Navigation from "./Navigation";
import Footer from "../Footer/footer";
import Header from "../Header";

function StartingPage() {
    const [currentPage, handlePageChange] = useState("About");

    const renderPage = () => {
        switch (currentPage) {
            case "About":
                return <About />;
            case "LogInSignUp":
                return <LoginSignup />;

            default: 
              return <About />;
        }
    };
    return (
      <div>
        <Header></Header>
        {/* Pass the state value and the setter as props to NavTabs */}
        <Navigation
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

export default StartingPage;