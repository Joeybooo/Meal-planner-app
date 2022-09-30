import React from 'react';

function Recipes(){
    return(
            <div className='container z-depth-4' id='recipes-container'>
                <div className='card z-depth-3' id='show-recipes'>
                    <div className='card-title center' id='recipe-title'>
                        Planned Recipes
                    </div>
                    <div className='card-content'>
                        <ul>
                            <li>recipe 1</li>
                            <li>recipe 2</li>
                            <a><li>show more</li></a>
                        </ul>
                    </div>
                </div>
                <div className='card z-depth-3' id='search-recipes'>
                    <div className='card-title center' id='search-title'>
                        Don't have a planned recipe? Find one!
                    </div>
                    <div className='card-content'>
                        <input className='' id='recipe-input' placeholder='search recipes'></input>
                        <button className='btn waves-effect orange darken-4' id='recipe-btn'>Search</button>
                    </div>
                </div>
            </div>
    )
}


export default Recipes 