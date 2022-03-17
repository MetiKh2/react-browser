import React from 'react';
import { NavLink } from 'react-router-dom';

const links = [
  { url: '/search2',refresh:true, text: '🔎 All' },
  { url: '/news', text: '📰 News' },
  { url: '/images', text: '📸 Images' },
  { url: '/videos', text: '📺 Videos' },
];

const Links = () => (
  <div className="flex m-auto sm:justify-around justify-between items-center mt-4">
    {links.map(({ url, text,refresh }) => {
      //if(refresh) return <a href={url} className="px-2">{text}</a>
      return  <NavLink to={url} className="px-3" activeClassName="text-blue-700 border-b-2 dark:text-blue-300 border-blue-700 pb-2">{text}</NavLink>
    })}
  </div>
);
export default Links