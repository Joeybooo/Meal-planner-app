import React from 'react';

function Recipes(){
    return(
        <div className='card col s5' id='recipe-card'>
                <div >
                <div className='card-title center' id='card-title'>My Recipes</div>
                <div className='card-content'>
                <p className='meal-today'>
                Today's planned meal
                </p> 
                <p className='meal-search'>
                Meal ingredients
                </p>
                <placeholder>button or input to search</placeholder>
                </div>
            </div>
        </div>
    )
}

export default Recipes 