import './TinderCards.css';

import React, { useState } from 'react'
import TinderCard from 'react-tinder-card';
import { SwipeableDrawer } from '@material-ui/core';

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Usama MK",
            url: "https://pbs.twimg.com/profile_images/1302228464565661696/IP9epnCS.jpg"
        },

        {
            name: "Elon Musk",
            url: "https://upload.wikimedia.org/wikipedia/commons/8/85/Elon_Musk_Royal_Society_%28crop1%29.jpg"
        }
    ])

    const swiped = (direction, nameToDelete)=>{
        console.log("removing: "+ nameToDelete);
    }
    const outOfFrame= (name)=>{
        console.log(name + "left the screen");
    }
    return (
        <div className="tinderCards" >
            <div className="tinderCards__cardContainer" >
                {people.map((person) => {
                    return (
                        
                           <TinderCard
                           className="swipe"
                           preventSwipe={["up", "down"]}
                           onSwipe={(dir)=> swiped(dir, person.name)}
                           onCardLeftScreen={() => outOfFrame(person.name)}
                           >
                            <div style={{backgroundImage: `url(${person.url})`}} 
                            className="card"
                            >
                            <h3>{person.name}</h3>
                            </div>
                           </TinderCard>
                        
                    );

                })}
            </div>

        </div>
    )
}

export default TinderCards
