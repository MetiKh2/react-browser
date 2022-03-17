import React from 'react'

const NewsResult = ({results}) => {
  return (
    <div className={`flex
    flex-wrap items-center justify-between space-y-6 md:px-56`}>
      {results?.map(({links,source,title},index)=>{
          return <div key={index} className="md:w-2/5 w-full ">
          <a href={links?.[0].href} target="_blank" className="hover:underline ">
            <p className="text-lg dark:text-blue-300 text-blue-700">{title}</p>
          </a>
          <div className="flex gap-4">
            <a href={source?.href} target="_blank" className="hover:underline hover:text-blue-300"> {source?.href}</a>
          </div>
        </div>
      })}
    </div>
  )
}

export default NewsResult