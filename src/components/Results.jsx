import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { useStateContext } from '../context/StateContextProvider'
import Loading from './Loading'
import SearchResult from './SearchResult'
import ImageResult from './ImageResult'
import NewsResult from './NewsResult'
import VideoResult from './VideoResult'
const Results = () => {
    const {results,loading,searchTerm,getResults}=useStateContext();
    const location=useLocation();
    useEffect(()=>{
      if(searchTerm){
        if (location.pathname.toLowerCase()==='/videos') 
        getResults(`/search/q=${searchTerm} videos`);
        else {
          getResults(`${location.pathname.toLowerCase()}/q=${searchTerm}&num=40`);
        }
      }
    },[searchTerm,location.key])
    if (loading) 
      return <Loading/>
  switch (location.pathname.toLowerCase()) {
    case '/search':
      return (
       <SearchResult key={'search'} results={results}/>
      );
    case '/images':
      return (
       <ImageResult key={'image'} results={results}/>
      );
    case '/news':
      return (
      <NewsResult results={results}/>
      );
    case '/videos':
       return   <VideoResult results={results}/>;
        
    default:
      return "ERROR"
  }
}

export default Results