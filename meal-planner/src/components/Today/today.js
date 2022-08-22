import React from 'react';

function Today(){
    return(
        <div id='today-card'>

                <div className='card col s5'>
                    <div className='card-title center' id='card-title'>DATE</div>
                    <div className='card-content'>
                        <p className='meal-today'>
                            Today's planned meal
                        </p> 
                        <p className='meal-search'>
                            don't have a meal planned? find one!
                        </p>
                        <placeholder>button or input to search</placeholder>
                    </div>
                </div>


                </div>


                

    )
}

export default Today;