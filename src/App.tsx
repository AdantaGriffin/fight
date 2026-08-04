import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';

import Root from './Components/Root/root';
import Home from './Components/Home/home';
import Athletes from './Components/Pages/Athletes/athletes';
import AthleteProfile from './Components/Pages/AthleteProfile/athleteProfile';
import Shop from './Components/Pages/Shop/shop';
import Watch from './Components/Pages/Watch/watch';
import Podcast from './Components/Pages/Podcast/podcast';
import Connect from './Components/Pages/Connect/connect';
import News from './Components/Pages/News/news';
import Events from './Components/Pages/Events/events';
import Brand from './Components/Pages/Shop/Brand/brand';
import Rankings   from './Components/Pages/Rankings/rankings';


const AppRouter = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Root/>}>
    <Route index element={<Home/>}/>
    <Route path="athletes" element={<Athletes/>}/>
    <Route path="athletes/:id" element={<AthleteProfile/>}/>
    <Route path="shop" element={<Shop/>}/>
    <Route path=":brand" element={<Brand/>}/>
    <Route path="watch" element={<Watch/>}/>
    <Route path="podcast" element={<Podcast/>}/>
    <Route path="connect" element={<Connect/>}/>
    <Route path="news" element={<News/>}/>
    <Route path="events" element={<Events/>}/>
    <Route path="rankings" element={<Rankings/>}/>
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
