import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './Components/Root/root';
import Home from './Components/Home/home';

const AppRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<Home/>}/>
  </Route>
))
function App() {

  return (
    <>
    <RouterProvider router={AppRouter}/>
    </>
  )
}

export default App
