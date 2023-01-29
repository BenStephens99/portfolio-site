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
export const MenuContext = React.createContext(null)

const root = document.querySelector(':root');


function App() {

  const [theme, setTheme] = React.useState("light");
  const [delay, setDelay] = React.useState('delay-two-half');
  const [menuOpen, setMenuOpen] = React.useState('closed');
  const mainRef = React.useRef(null)

  const toggleTheme = () => {
    let t = theme === "light" ? "dark" : "light"
    if (t === "light") {
      root.style.setProperty('--backgroundColor', '#efc8b1');
      root.style.setProperty('--fontColor', '#514644');
      root.style.setProperty('--middleColor', '#b79c99');
    } else {
      root.style.setProperty('--backgroundColor', '#514644');
      root.style.setProperty('--fontColor', '#efc8b1');
      root.style.setProperty('--middleColor', '#b79c99');
    }
    setTheme(t);
  };

  const turnOffDelay = () => {
    setDelay('no-delay')
  }

  const toggleMenu = () => {
    setMenuOpen((menu) => (menu === "open" ? "close" : "open"))
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        <MainRefContext.Provider value={mainRef}>
          <HomeDelay.Provider value={{ delay, turnOffDelay }}>
            <MenuContext.Provider value={{ menuOpen, toggleMenu }}>
              <Header />
              <Aside />
            </MenuContext.Provider>
          <div id='mainContainer'>
            <Routes>
              <Route path="/" element={<Home name="home" delay={delay} />}></Route>
              <Route path='/work' element={<Work />}></ Route>
              <Route path='work/energy-app' element={<EnergyApp />}></Route>
              <Route path='/about' element={<About />}></Route>
              <Route path='/contact' element={<Contact />}></Route>
            </Routes>
          </div>
          </HomeDelay.Provider>
        </MainRefContext.Provider>

      </div>
    </ThemeContext.Provider>
  );
}

export default App;
