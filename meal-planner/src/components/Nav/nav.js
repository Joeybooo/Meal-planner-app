import React from 'react';

function Nav(){
    return(
        <header>
            <nav className="nav-wrapper ">
            <div className="container nav-container"> 
                <span className='title'>meal planner</span> 
                <ul className="right">
                    <li className="">item 1</li>
                    <li className="">item 2</li>
                    <li className="">item 3</li>
                    <li className="">item 4</li>
                </ul>
            </div> 
            </nav>
        </header>
    )
}
export default Nav;