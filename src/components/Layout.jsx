import React from 'react'
import {Routes,Route} from 'react-router-dom'
import {Navigate, useNavigate} from 'react-router';
import Results from './Results';
const Layout = () => {
  return (
    <div className='p-4'>
        <Routes>
          <Route path='*' element={<Navigate to={'/search'}></Navigate>}>
          </Route>
          <Route path={'/search'}
          element={ <Results></Results>}>
          </Route>
          <Route path={'/images'}
          element={ <Results></Results>}>
          </Route>
          <Route path={'/news'}
          element={ <Results></Results>}>
          </Route>
          <Route path={'/videos'}
          element={ <Results></Results>}>
          </Route>
        </Routes>
    </div>
  )
}

export default Layout