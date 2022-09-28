import React from 'react';
import { Link } from 'react-router-dom';

function ShowCard({id,image,name,summary,onStarClick, isStarred}) {
    const summaryAsText = summary ? `${summary.split(' ').slice(0,10).join(' ').replace(/<.+?>/g, '')}...`
    : "No description";
    return (
       <>
      <div className='shows-col'>
        <div className='col-inn'>
        <div className='image-wraper'>
        <img src={image} alt='show' />
        </div>
       <div className='content-wraper'>
       <h1>{name}</h1>
       <p>{summaryAsText}</p>
       <div className='read-star'>
        <Link to={`/show/${id}`}>Read more </Link>
        <button type='button' onClick={onStarClick} className={isStarred ? "active-star star-btn" : "deactive-star star-btn"}>
        <i className="fa fa-star" aria-hidden="true"></i>
          </button>
       </div>
       </div>
        </div>
      </div>
       </>
    );
}

export default ShowCard;