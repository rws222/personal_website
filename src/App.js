import './App.css';
import useLocalStorage from 'use-local-storage';
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Experience from './pages/Experience/Experience.js';
import Education from './pages/Education/Education.js';
import Projects from './pages/Projects/Projects.js';
import Footer from './pages/Footer/Footer.js';
import Button from './mui_components/Button.js';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import TopNavBar from './components/TopNavBar/TopNavBar';

import { ModalProvider } from './ModalContext';
import Modal from './components/Modal/Modal.js';

import "@fontsource/nunito";

export function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    const navBarHeight = getComputedStyle(document.documentElement).getPropertyValue('--top-nav-height').slice(0, -2);
    const depth = section.getBoundingClientRect().top + window.pageYOffset - navBarHeight;
    window.scrollTo({top: depth, behavior: 'smooth'});
  }
}

function App() {
  const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const [theme, setTheme] = useLocalStorage('theme', defaultDark ? 'dark' : 'light');

  const switchTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
  }

  return (
    <ModalProvider>
    <div className="App" data-theme={theme}>
      <div className='App-container'>
      <TopNavBar />
      <Button className="theme-btn" onClick={switchTheme}>{theme === 'light' ? <DarkModeIcon/> : <LightModeIcon/>}</Button>
      <Home theme={theme} />
      <About/>
      <Experience/>
      <Education/>
      <Projects/>
      <Footer/>
      <Modal/>
      </div>
    </div>
    </ModalProvider>
  )
}

export default App;

