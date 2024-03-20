import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';

import { Home } from './Home';
import { Hippo } from './priorityPages/Hippo';
import {HipposVideos} from './randomVideoPages/hipposVideos'
import { VideoPlayer } from './VideoPlayer';

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
        <Route path="/hippo/videos" element={<VideoPlayer tvName="hippo"/>}/>
        <Route path="/falcon/videos" element={<VideoPlayer tvName="falcon"/>}/>
        <Route path="/penguin/videos" element={<VideoPlayer tvName="penguin"/>}/>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
