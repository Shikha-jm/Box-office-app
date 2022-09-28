import React from 'react';

function Seasons({seasons}) {
    return (
        <>
        <div>
           <p>Seasons in total: <span>{seasons.length}</span></p>
           <p>Episodes in total: {' '}</p>
           <span>
            {seasons.reduce((acc, season) => acc + season.episodeOrder, 0)}
           </span>
           <div className='seas-row'>
            {seasons.map(season => (
             
                <div key={season.id} className="all-seas">
                    <p>Season {season.number}</p>
                    <p>EpisodeOrder {season.episodeOrder}</p>
               
                <div>
                    Aried: {' '}
                    <span>{season.premiereDate} - {season.endDate}</span>
                </div>
                </div>
            
            ))}
           </div>
        </div>
        </>
    );
}

export default Seasons;