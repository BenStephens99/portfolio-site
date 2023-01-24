import React from 'react';
import { Routes, Route } from "react-router-dom";
import './App.css';
import Aside from './components/Aside';
import EnergyApp from './components/EnergyApp';
import Header from './components/Header';
import Home from './components/Home';
import Work from './components/Work'
import About from './components/About';
import Contact from './components/Contact';

export const ThemeContext = React.createContext(null)
export const HomeDelay = React.createContext(null)
export const MainRefContext = React.createContext(null)

function App() {

  const [theme, setTheme] = React.useState("light");
  const [delay, setDelay] = React.useState('delay-two-half')
  const mainRef = React.useRef(null)

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  const turnOffDelay = () => {
    setDelay('no-delay')
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>

      <div className={`App ${theme}`}>
      <MainRefContext.Provider value={mainRef}>
        <HomeDelay.Provider value={{ delay, turnOffDelay }}>
          <Header />
          <Aside />
        </HomeDelay.Provider>
          <div id='mainContainer'>
              <Routes>
                <Route path="/" element={<Home name="home" delay={delay} />}></Route>
                <Route path='/work' element={<Work />}></ Route>
                <Route path='work/energy-app' element={<EnergyApp />}></Route>
                <Route path='/about' element ={<About />}></Route>
                <Route path='/contact' element={<Contact />}></Route>
              </Routes>
          </div>
        </MainRefContext.Provider>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
