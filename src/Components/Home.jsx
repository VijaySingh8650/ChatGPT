import React from 'react'
import message from '../Assets/message.svg';

const Home = () => {
  return (
    <>
      <div className="home">
        <form action="" className='form'>
          <input type="text" name="search" id="" />
          <img src={message} alt="message" className='message'/>
        </form>
      </div>
    </>
  );
}

export default Home
