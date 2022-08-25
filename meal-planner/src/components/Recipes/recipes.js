
import React from 'react';

// function Recipes(){
//     return(
        
//         <div className='row'>
//             <div className='card col s6' id='recipe-card'>
//                 <div className='card' id='show-recipes' >
//                 <div className='card-title center' id='recipe-title'>My Recipes</div>
//                 <div className='card-content'>
//                 <p id='recipe-planned'>
//                 Today's planned meal
//                 </p> 
//                 <div id='recipe-display'>
//                 Meal ingredients go here
//                 </div>
//                 </div>
//                 <div className='card' id='recipe-search'>
//                     <p id='search-title'>
//                         Don't have a recipe planned? Click here to find one!
//                     </p>
//                     <input className='center' id='recipe-input'></input>
//                     <button className='btn orange darken-4' id='recipe-btn'>Search</button>

//                 </div>
//             </div>
//         </div>
//     )

// }
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