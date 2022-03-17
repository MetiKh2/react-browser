import React, { useEffect, useState } from 'react'
import { useDebounce } from 'use-debounce'
import Links from './Links'
import {useStateContext} from '../context/StateContextProvider'

const Search = () => {
  const [text, setText] = useState('Elon Musk')
  const {setSearchTerm}=useStateContext();
  const [debounceValue]=useDebounce(text,300)
  useEffect(()=>{
      //if(debounceValue) setSearchTerm(debounceValue);
  },[debounceValue])
  const handleSubmit=(e)=>{
    e.preventDefault();
    setSearchTerm(text)
  }
  return (
    <div className={`relative sm:ml-48 md:ml-72 sm:-mt-10 mt-3`}>
    <form onSubmit={handleSubmit}>
    <input value={text} type="text/" className={`
      sm:w-96 w-80 h-10 dark:bg-gray-200 rounded-full shadow-sm
      outline-none p-6 text-black hover:shadow-lg`}
      placeholder="Search on Meti Browser ..."
      onChange={(e)=>setText(e.target.value)}/>
      {/* {text&&(
       // <button type='button' className={`
       // absolute top-1.5 right-4 text-2xl to-gray-500
      //  `}
       // onClick={()=>setText('')}>
      //      X
      //  </button>
      )} */}
      <button type='submit' className='rounded-full bg-blue-400 text-white ml-2 py-3 px-4'>Search</button>

    </form>
    <Links/>
    </div>
    )
}

export default Search   