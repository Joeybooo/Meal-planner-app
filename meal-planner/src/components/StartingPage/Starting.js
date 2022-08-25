import About from './About';
import LoginSignup from "./LoginSignup";
import Footer from "../Footer/footer";
import Header from "../Header";
import Tabs from "../Corepage/Tabs";

const data = [
  {
    heading: "About",
    body: <About />
  },
  {
    heading: "Log-In/Sign-up",
    body: <LoginSignup />
  }
];

function StartingPage() {
    return (
      <div>
        <Header />
        <Tabs data={data} />
        <Footer />
      </div>
    )
}

export default StartingPage;