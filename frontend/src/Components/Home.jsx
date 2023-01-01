import React from 'react';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import message from '../Assets/message.svg';
import Chat from './Chat';
import GetResult from './GetResult';
import NotFound from './NotFound';

const Home = () => {
  const navigate = useNavigate("");
  const [data, setData] = useState("");
  

  return (

    <>
      <div className="home">
        <div className='scroll_home'>
          <Routes>
            <Route path="/" element={<GetResult data ={data}/>}></Route>
            <Route path="/chat" element={<Chat setData={setData}/>}></Route>
            <Route path="*" element={<NotFound/>}></Route>
          </Routes>
        </div>
        <div className="form">
          <input type="text" name="search" id="input" defaultValue={data} />
          <img src={message} alt="message" className="message" onClick={()=>navigate("/")} />
        </div>
      </div>
    </>
  );
};

export default Home;
