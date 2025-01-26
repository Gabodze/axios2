import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
  return (


    <nav>
          <div className='navdiv'>
            {/* logo */}
            <Link to="/">
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


    
  );
};

export default Navbar;
