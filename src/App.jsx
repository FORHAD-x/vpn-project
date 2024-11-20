import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import './App.css'
import Layout1 from './layout/Layout1'
import Home from './pages/Home'
import Features from './components/features/Features'

function App() {



  const myRoute = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout1/>}>
      <Route index element={<Home/>}/>
    </Route>
  ))
  return (
    <>
      <RouterProvider router={myRoute}/>
        
    </>
  )
}

export default App
