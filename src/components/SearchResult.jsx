import React from 'react'

const SearchResult = ({results}) => {
    
  return (
    <div className={`flex
    flex-wrap items-center justify-between space-y-6 md:px-56`}>
      {results?.map(({link,title},index)=>{
    if(typeof(link)=='object') return ;
        return <div key={index} className={`
          md:w-2/5 w-full`}>
              <a href={link} target="_blank">
              <p key={index} className='text-sm'>
                  {link.length>30?link.substring(0,30):link}
                </p>
                <p className='text-lg hover:underline dark:text-blue-300 text-blue-700'>
                  {title}
                </p>

              </a>
          </div>
      })}
    </div>
  )
}

export default SearchResult