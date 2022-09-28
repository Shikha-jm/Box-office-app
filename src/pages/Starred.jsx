import React, { useEffect, useState } from 'react';
import MainPageLayout from '../components/MainPageLayout';
import {useShows} from './../misc/custom-hook';
import {apiGet} from './../misc/config';
import ShowGrid from './../components/show/ShowGrid'

function Starred() {
    const [starred] = useShows();
    const[shows,setShows] =  useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] =  useState(null);
    useEffect(() => {
        if(starred && starred.length > 0){
            const promises = starred.map(showId => apiGet(`/shows/${showId}`))
            Promise.all(promises)
            .then(apiData => apiData.map(show => ({show})))
            .then(results => {
                setShows(results)
                setLoading(false)
            })
            .catch(err => {
                setError(err.message)
                setLoading(false)
            })

        }
        else{
            setLoading(false)
        }
    }, [starred])
    return (
        
        <>
        <MainPageLayout>
        {loading && <div>Shows are loading</div>}
        {error && <div>Error occure : {error}</div>}
        {!loading && !shows && <div>No shows were added</div>}
        {!loading && shows && <ShowGrid data={shows}/>}
         </MainPageLayout>
        </>
    );
}

export default Starred;