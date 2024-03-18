import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import { Home } from './Home';
import { Hippo } from './priorityPages/Hippo';
import {HipposVideos} from './randomVideoPages/hipposVideos'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/test" element={(
          <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>
        )}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/hippo" element={<Hippo/>}/>
        <Route path="/hippo/videos" element={<HipposVideos/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
