import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './components/Main';

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        {/* Navbar */}
        <nav>
          <div className='navdiv'>
            {/* logo */}
            <Link to="/main">
              <img src="/logo.png" alt="logo" className="logo" />
            </Link>

            {/* search input */}
            
            <div className='searchdiv' >
              <input type='search' className='search'/>
              <div className='sircle'>
                <img src='./search.png'/>
              </div>
            </div>

            {/* log in and ect. */}

            <div className='logInect'>
              {/* cart button */}
              <button className='secbtn'><img src='./cart.png'/>Cart</button>

              {/* log in button */}
              <button className='mainBtn'>Log in</button>

            </div>

          </div>
          
        </nav>

        {/* Routes */}
        <Routes>
          <Route path="/main" element={<Main />} />
        </Routes>
      </BrowserRouter>
    </React.Fragment>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
