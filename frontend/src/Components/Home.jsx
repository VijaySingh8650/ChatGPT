import React, { useState } from 'react'
import message from '../Assets/message.svg';

const Home = () => {
  const [data, setData] = useState("");
  const [obj, setObj] = useState("");
  return (
    <>
      <div className="home">
        <h1>{data}</h1>
        <div className='form'>
          <input type="text" name="search" id="input" onChange={(e)=>setObj(e.target.value)} />
          <img src={message} alt="message" className='message' onClick={()=>setData(obj)}/>
        </div>
      </div>
    </>
  );
}

export default Home
