import React from 'react';
import { useState } from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import message from '../Assets/message.svg';
import Chat from './Chat';
import GetResult from './GetResult';
import NotFound from './NotFound';
import { useDispatch } from "react-redux";
import { postTheData } from '../Store/ChatData/chatdata.action';

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate("");
  const [data, setData] = useState("");
  const [val, setVal] = useState("");


  const changeData = (e) => {
    setData(e.target.value);
  }

  const handleSubmit = () => {
    setVal(data);
    dispatch(postTheData(data));
    navigate("/");
  }
  

  return (
    <>
      <div className="home">
        <div className="scroll_home">
          <Routes>
            <Route path="/" element={<GetResult data={val} />}></Route>
            <Route path="/chat" element={<Chat setData={setData} />}></Route>
            <Route path="*" element={<NotFound />}></Route>
          </Routes>
        </div>
        <div className="form">
          <input type="text" name="search" id="input" defaultValue={data} onChange={changeData} />
          <button disabled={!data} className="message" onClick={handleSubmit}>
            <img disabled={!data} src={message} alt="message" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Home;
