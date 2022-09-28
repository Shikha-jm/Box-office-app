import React, { useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { apiGet } from "./../misc/config";
import ShowGrid from './../components/show/ShowGrid';
import ActorGrid from './../components/actor/ActorGrid'
import { useLastQuery } from "../misc/custom-hook";

function Home() {
  const [input, setInput] = useLastQuery();
  const [results, setResults] = useState(null);
  const [searchOption, setsearchOption] = useState("shows");

  const isShowSearch = searchOption==="shows";
  const onInputChnage = (ev) => {
    setInput(ev.target.value);
  };
  const onSearch = () => {
    apiGet(`/search/${searchOption}?q=${input}`).then((result) => {
      setResults(result);
    });
  };
  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };
  const onRadioChnage = (ev) => {
    setsearchOption(ev.target.value)
  }
  console.log(searchOption)
  const renderResults = () => {
    if (results && results.length === 0) {
      return <div>No Result Found</div>;
    }
    if (results && results.length > 0) {
      return results[0].show ? <ShowGrid data={results}/> : <ActorGrid data={results}/>

    }
    return null;
  };
  return (
    <>
      <MainPageLayout>
        <div className="area-inp">
          <div className="wrap-all-inp">
        <input
          placeholder="serach for something"
          type="text"
          onChange={onInputChnage}
          value={input}
          onKeyDown={onKeyDown}
        />
        <button type="button" onClick={onSearch}>
          {" "}
          Search
        </button>
        </div>
        <div className="option-tab">
          <div className="wraper-tab">
          <label htmlFor="shows-search" className="show-search">
            <input type="radio" id="shows-search" value="shows" onChange={onRadioChnage} checked={isShowSearch}/>
            <span>Shows</span>
          </label>
          <label actors-search="css">
            <input type="radio" id="actors-search" value="people" onChange={onRadioChnage} checked={!isShowSearch}/>
           <span>Actors</span>
          </label>
          </div>
        </div>
        {renderResults()}
        </div>
      </MainPageLayout>
    </>
  );
}

export default Home;
