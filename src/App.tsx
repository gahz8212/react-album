

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from '@/pages/index/Album';
import Bookmark from './pages/bookmark/index';
import CSS from './pages/css/CSS'


export const App: React.FC = () => {
  return (

    <BrowserRouter>
      <Routes>
        <Route index path='/' element={<Main />}></Route>
        <Route path='search/:id' element={<Main />}></Route>
        <Route path='bookmark' element={<Bookmark />}></Route>
        <Route path='css' element={<CSS />}></Route>
      </Routes>




    </BrowserRouter>





  );
};

