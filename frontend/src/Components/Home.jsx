import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Chat from './Chat';

import NotFound from './NotFound';


const Home = () => {
  



  

  return (
    <>
      <div className="home">
        <div className="scroll_home">
          <Routes>
            
            <Route path="/" element={<Chat />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Home;
