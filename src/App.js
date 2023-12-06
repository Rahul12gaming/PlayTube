
import './App.css';
import { Navbar } from './components/Navbar/navbar';
import { useContext, useEffect } from 'react';
import { fetchDataFromApi } from './utils/api';
import { AppData, DataContext } from './context/context';
import { LeftSidebar } from './components/sidebar/LeftSidebar';
import { VideoSkeleton } from './shared/videoSkeleton';
import { VideoCard } from './components/cards/videoCard';
import { Feed } from './pages/feed';
import { VideoDetails } from './pages/videoDetails';
import {BrowserRouter as Router , Routes,Route} from 'react-router-dom'
function App() {
  
  return (

    <AppData>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' element={<Feed/>}/>
          <Route path='videoDetails/:id' element={<VideoDetails/>}/>
        </Routes>
      </Router>
    </AppData>
  
   
  );
}

export default App;
