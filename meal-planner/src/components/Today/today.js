import React from 'react';

function Today(){
    return(
        <div className='card col s5' id='today-card'>
            <div >
                <div className='card-title center' id='today-title'>DATE</div>
                <div className='card-content' id='today-content'>
                    <p className='meal-today center' id='today-p'>
                        Today's planned meal:
                    </p> 
                    <a href='' className=''>see recipe</a>
                    <p className='meal-search' id='go-to-search'>
                        don't have a meal planned? find one!
                    </p>
                    <a href='' className=''>plan meal</a>
                </div>
            </div>
        </div>

                

    )
}

export default Today;