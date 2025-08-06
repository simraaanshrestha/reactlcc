import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
const Navvbar = () => {
  return (

    // <header className="dz-header">
    //   <div className="dz-top">
    //     <nav className="dz-top-links">
    //       <a href="#app">SAVE MORE ON APP</a>
    //       <a href="#sell">SELL ON DARAZ</a>
    //       <a href="#help">HELP &amp; SUPPORT</a>
    //       <a href="#login">LOGIN</a>
    //       <a href="#signup">SIGN UP</a>
    //       <a href="#lang" className="dz-lang">زبان تبدیل کریں</a>
    //     </nav>
    //   </div>

    //   <div className="dz-bar">
    //     <a href="#" className="dz-logo" aria-label="Daraz Home">
    //       <span className="dz-logo-mark" aria-hidden="true">
    //         <svg viewBox="0 0 24 24" width="24" height="24">
    //           <path d="M12 1.5 21 6.7v10.6L12 22.5 3 17.3V6.7L12 1.5z" />
    //           <path d="M9.5 7.5h5v2h-3v1.2h2.4v2H11.5V15h-2z" />
    //         </svg>
    //       </span>
    //       <span className="dz-wordmark">Daraz</span>
    //     </a>

    //     <form className="dz-search" role="search" onSubmit={(e)=>e.preventDefault()}>
    //       <input
    //         className="dz-input"
    //         type="search"
    //         placeholder="Search in Daraz"
    //         aria-label="Search in Daraz"
    //       />
    //       <button className="dz-search-btn" aria-label="Search">
    //         <svg viewBox="0 0 24 24" width="20" height="20" aria-hidden="true">
    //           <path d="M15.5 14h-.8l-.3-.3a6.5 6.5 0 1 0-.9.9l.3.3v.8l5 4.9 1.5-1.5-4.9-5zm-6 0A4.5 4.5 0 1 1 14 9.5 4.5 4.5 0 0 1 9.5 14z"/>
    //         </svg>
    //       </button>
    //     </form>
    //     <button className="dz-cart" aria-label="Cart">
    //       <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
    //         <path d="M7 18a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm10 0a2 2 0 1 0 .001 4.001A2 2 0 0 0 17 18zM6.2 6l.8 2H21l-2 8H8l-2.9-9H3V5h2.2z"/>
    //       </svg>
    //       <span className="dz-cart-dot" aria-hidden="true"></span>
    //     </button>
    //   </div>
    // </header>
    <div className='nav'>
      <div className='daraz'>
        <img src="https://lzd-img-global.slatic.net/us/domino/3b870cb043c7f8a9741cbf66329e294e.png" alt="daraz" className='daraz1'
        />
        {/* <img src="/public/daraz.png" alt="" /> */}
      </div>
      <div className='nav-links'>
        <ul>
          <li><a href="#">SAVE MORE ON APP</a></li>
          <li><a href="">SALE ON DARAZ</a></li>
          <li><a href="">HELP & SUPPORT</a></li>
          <li><a href="">Sign Up</a></li>
          <li><a href="">LOGIN</a></li>
          <li><a href="">SIGN UP</a></li>
          <li><a href="">زبان تبديل كرير</a></li>
        </ul>
        <div>
          <div className="abs"><input type="text" name="" id="" placeholder='Search in Daraz' />
            <div className="icon">
              <IoIosSearch className='search' />
            </div>     
                 <PiShoppingCartSimpleLight className='cart'/>
          </div>

        </div>
      </div>

    </div>

  )
}

export default Navvbar