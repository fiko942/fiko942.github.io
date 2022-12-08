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
            name: 'Resume - Wiji Fiko Teren.pdf',
            url: '/Resume - Wiji Fiko Teren.pdf'
          }} />} />
          <Route path="/about" element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
