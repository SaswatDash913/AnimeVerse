import React from 'react'
import Homepage from './components/Homepage'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Loginshop from './components/Loginshop'
import { Provider } from 'react-redux'
import AppStore from './app/AppStore'
import Signup from './components/Signup'
import Payment from './components/Payment'
import ExplorePge from './components/ExplorePge'
import Propage from './components/Propage'
import Wishlist from './components/Wishlist'
import TopPicks from './components/TopPicks'
function App() {

  const Approuter = createBrowserRouter([
  {
    path:'/', 
    element:<Homepage />
  },
  {
    path:'/signup',
    element:<Signup />
  },
  {
    path:'/login',
    element:<Loginshop />
  },
  {
    path:'/payment',
    element:<Payment />
  },
  {
    path:'/explore',
    element:<ExplorePge />
  },
  {
    path:'/pro',
    element:<Propage />
  },
  {
    path:'/wish',
    element:<Wishlist />
  },
  {
    path:'/toppick',
    element:<TopPicks />

  },

],
{
  future:{v7_fetcherPersist: true,v7_normalizeFormMethod: true,v7_partialHydration: true,v7_skipActionStatusRevalidation: true,v7_relativeSplatPath: true,v7_skipActionErrorRevalidation:true}
}) 
  return (
    <Provider store={AppStore}>
     <RouterProvider router={Approuter} future={{ v7_startTransition: true,}}/>
    </ Provider>
  )
}
export default App