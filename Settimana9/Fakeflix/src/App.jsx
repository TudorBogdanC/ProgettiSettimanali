import {BrowserRouter, Routes, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import CustomHeader from './components/organisms/CustomHeader';
import CustomFooter from './components/organisms/CustomFooter';
import Homepage from './components/pages/Homepage';
import Movies from './components/pages/Movies';
import TvShows from './components/pages/TvShows';


function App() {

  return (
    <>
       <CustomHeader/>
       <Routes>
          <Route index path="/" element={<Homepage/>}/>
          <Route path="/tv-shows" element={<TvShows/>}/>
          <Route path="/movies" element={<Movies/>}/>
       </Routes>
       <CustomFooter/>
    </>
  )
}

export default App;
