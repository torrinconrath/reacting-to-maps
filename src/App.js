import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import GoogleMapsPage from './GoogleMapsPage';
import './App.css';

function App() {
  const [apiKey, setApiKey] = useState(''); // For Map API key
  const [mapLoaded, setMapLoaded] = useState(false);

  const handleLoadMap = () => {
    setMapLoaded(true); // Load the map
  };

  const handleRetypeApiKey = () => {
    setApiKey(''); // Reset API key
    setMapLoaded(false); // Unload the map

    // Redirect to the root path only if currently on the map page
    if (window.location.pathname === '/google-maps') {
      window.location.href = '/';
    }
  };

  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Torrin Conrath</h1>
        </header>

        <section className="App-section">
          <h2>Projects</h2>
          <div className="project">
            <h3>React Webpage using Google Maps API</h3>

            {mapLoaded ? null : (
              <div>
                <label>
                  Enter your Google Maps API Key: 
                  <input type="text" value={apiKey} onChange={(e) => setApiKey(e.target.value)}/>
                </label>
              </div>
            )}

            {apiKey && (
              <div>
                <Link to="/google-maps"> 
                  <button onClick={handleLoadMap}>
                    Load Map
                  </button>
                </Link>
                {mapLoaded && (
                  <button onClick={handleRetypeApiKey}>
                    Retype API Key 
                  </button>
                )}
              </div>
            )}
          </div>
        </section>

        <section className="App-section">
          <h2>Contact</h2>
          <p>Email: torrin@vt.edu</p>
          <p>
            LinkedIn: <a href="https://www.linkedin.com/in/torrin-conrath-31b29a252/">LinkedIn</a>
          </p>
          <p>
          Github: <a href="https://www.github.com/torrinconrath">Github</a>
          </p>
        </section>


        <footer className="App-footer">
          <p>© 2024 Torrin Conrath</p>
        </footer>
      </div>

      <Routes>
        <Route path="/google-maps" element={<GoogleMapsPage apiKey={apiKey} />} />
      </Routes>

    </Router>
  );
}

export default App;
