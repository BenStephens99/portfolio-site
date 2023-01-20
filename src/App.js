import React from 'react';
import './App.css';
import Aside from './components/Aside';
import Header from './components/Header';
import IntroBox from './components/IntroBox';
import MySkills from './components/MySkills';
import Work from './components/Work';

export const ThemeContext = React.createContext(null)


function App() {

 

  const [theme, setTheme] = React.useState("light");
  

  const toggleTheme = () => {
    setTheme((currentTheme) => (currentTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={`App ${theme}`}>
        <Header />
        <Aside />
        <main>
          <IntroBox />
          <MySkills />
          <Work />
        </main>
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
