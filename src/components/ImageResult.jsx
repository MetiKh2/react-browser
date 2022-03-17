import React from 'react'

const ImageResult = ({results}) => {
  return (
    <div className={`flex
        flex-wrap items-center justify-between space-y-6 md:px-56`}>
          {results?.map((item,index)=>{
              return <a key={index} className={`
              sm:p-3 p-5`} href={item.link.href} target="_blank">
                  <img src={item.image?.src} alt={item.link.domain} loading="lazy"/>
                  <p key={index} className='w-36 break-words text-sm mt-2'>
                    {item.link.domain}
                  </p>
                </a>
          })}
        </div>
  )
}

export default ImageResult