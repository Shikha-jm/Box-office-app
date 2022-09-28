import React from 'react';

function ActorCard({image,name,gender,country,birthday,deathday}) {
    return (
       <>
       <div className='actor-col'>
       <div className='col-inn'>
       <div className='image-wraper'>
       <img src={image} alt='actor' />
       </div>
       <div className='content-wraper'>
       <h1>{name} {gender ? `(${gender})` : null}</h1>
       <p>{country ? `Comes from ${country}` : null}</p>
       {birthday ? <p>${birthday}</p>: null}
       <p>{deathday ? `Died ${deathday}`: 'Alive'}</p>
       </div>
       </div>
       </div>

       </>
    );
}

export default ActorCard;