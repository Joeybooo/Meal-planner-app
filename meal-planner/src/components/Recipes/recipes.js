import React from 'react';

function Recipes(){
    return(
        <div className='card col s6' id='recipe-card'>
                <div >
                <div className='card-title center' id='recipe-title'>My Recipes</div>
                <div className='card-content'>
                <p id='recipe-planned'>
                Today's planned meal
                </p> 
                <placeholder id='recipe-display'>
                Meal ingredients go here
                </placeholder>
                    <div className='card' id='search-card'>
                        <p id='search-title'>Plan a recipe!</p>
                        <input className='center' placeholder='search for a recipe' id='recipe-input'></input>
                        <button className='btn' type='submit' id='recipe-btn'>make recipe</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Recipes 