import './app.scss';
import AppHeader from "../appHeader/AppHeader";
import Intro from "../intro/Intro";
import About from "../about/About";
import OurBest from "../ourBest/OurBest";
import AppFooter from "../appFooter/AppFooter";

const App = () => {
  return (
    <div className="app">
      <AppHeader/>
      <main>
        <Intro/>
        <About/>
        <OurBest/>
      </main>
      <AppFooter/>
    </div>
  );
}

export default App;
