import React from 'react';
import ShowCard from './ShowCard';
import IMAGE_NOT_FOUND from '../../images/notFoundimg.jpg';
import { useShows } from '../../misc/custom-hook';

function ShowGrid({data}) {
    const [starredShows, dispatchStarred] = useShows();
    console.log(starredShows, "bfkjf")
    return (
        <>
        <div className='shows-grid'>
        {data.map(({show}) => {
            const isStarred = starredShows.includes(show.id)
            console.log(isStarred)
            const onStarClick = () => {
                if(isStarred){
                    dispatchStarred({type: 'REMOVE', showId: show.id})
                }
                else{
                    dispatchStarred({type: 'ADD', showId: show.id})
                }
            }
            return (
                <ShowCard 
              key={show.id}
              id={show.id}
              name={show.name}
              image={show.image ? show.image.medium:IMAGE_NOT_FOUND}
              summary={show.summary}
              onStarClick={onStarClick}
              isStarred={isStarred}
            />
            )
            })}
        </div>
        </>
    );
}

export default ShowGrid