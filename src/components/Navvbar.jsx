import React from 'react'
import { IoIosSearch } from "react-icons/io";
import { PiShoppingCartSimpleLight } from "react-icons/pi";
const Navvbar = () => {
  return (
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