import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = process.env.REACT_APP_GOOGLE_API_URL;

export const StateContextProvider = ({ children }) => {
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('Elon Musk');

  const getResults = async (url) => {
    setLoading(true);
    const res = await fetch(`${baseUrl}${url}`, {
      method: 'GET',
      headers: {
        'x-user-agent': 'desktop',
        'x-rapidapi-host': process.env.REACT_APP_GOOGLE_RAPIDAPI_HOST,
        'x-rapidapi-key': process.env.REACT_APP_RAPIDAPI_KEY,
      },
    });

    try {
      const data = await res.json();
    if(url.toLowerCase().includes('/news')){
      setResults(data.entries)
    }
   else if(url.toLowerCase().includes('/images')){
      setResults(data.image_results)
    }
    else if(url.toLowerCase().includes('/search')||url.toLowerCase().includes('/videos')){
      setResults(data.results)
    }
    //setResults(data);
    setLoading(false);
    } catch  {
      alert('Error')
    }
  };

  return (
    <StateContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);