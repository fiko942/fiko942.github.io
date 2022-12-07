import logo from './Static/Images/wijifikoteren.jpg';
import Header from './Layout/Header'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom'
// Pages
import Home from './Screens/Home'
import Download from './Screens/Download'
import About from './Screens/About'
import Portfolio from './Screens/Portfolio'

function App() {
  return (
    <Router>
      <Header logo={logo} />
      <div className='main-wrapper'>
        <Routes>
          <Route path='/' element={<Home logo={logo} />} />
          <Route path="/download/resume" element={<Download file={{
            name: 'Wiji Fiko Teren - resume.pdf',
            url: 'https://resume.tobelsoft.my.id'
          }} />} />
          <Route path="/download/cv" element={<Download file={{
            name: 'Wiji Fiko Teren - cv.pdf',
            url: 'https://cv.tobelsoft.my.id'
          }} />} />
          <Route path="/about" element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
