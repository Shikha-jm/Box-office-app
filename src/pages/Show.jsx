import React, {useEffect, useReducer} from 'react';
import {useParams} from 'react-router-dom'
import Cast from '../components/show/Cast';
import Details from '../components/show/Details';
import Seasons from '../components/show/Seasons';
import ShowMainData from '../components/show/ShowMainData';
import { apiGet } from '../misc/config';

const reducer = (state, action) => {
   
    if(action.type === "SHOW"){
        return {show: action.show };
    }
    if(action.type === "LOADING"){
        return {...state, loading:false}
    }
    return state;
}
const initialState = {
    show: null,
    loading:true,
};


function Show() {
    const {id} = useParams();
    // const [show, setShow] = useState(null);
    // const [loading, setLoading] = useState(false)

    const [{show,loading}, dispatch] = useReducer(reducer, initialState);

     useEffect(() => {
        // setLoading(true);
        apiGet(`/shows/${id}?embed[]=seasons&embed[]=cast`).then(results => {
                    
                
                setTimeout(() =>{
                    dispatch({type:"SHOW", show: results})
                    dispatch({type:"LOADING", loading: false})
                }, 2000) 
                
            // setShow(results)
            // setLoading(false);
        });
}, [id])
const Loading = () => {
    return <>Loading.....</>
  }
  const ShowDatas = () => {
    return (
      <>
        <ShowMainData 
        image={show.image}
        name={show.name}
        summary={show.summary}
        rating={show.rating}
        tags={show.genres}
        />
        <div className='container-wrap'>
        <div className='details'>
          <h2>details</h2>
          <Details 
          status={show.status}
          network={show.network}
          premiered= {show.premiered}

          />
        </div>
        <div className='seasons'>
          <h2>seasons</h2>
          <Seasons seasons={show._embedded.seasons}/>
        </div>
        <div className='cast'>
           <h2>cast</h2>
           <Cast cast={show._embedded.cast}/>
        </div>
        </div>
      </>
    );
    };
    console.log('show', show)
    return (
        <><div>{loading ? <Loading/> : <ShowDatas />}</div></>
    );
}

export default Show;