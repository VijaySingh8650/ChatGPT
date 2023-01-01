import React from 'react'
import { useSelector } from 'react-redux';
import user from '../Assets/user.svg';
import bot from '../Assets/bot.svg';
import { useRef } from 'react';
import { useEffect } from 'react';


const GetResult = ({ data }) => {
  const { loading, result } = useSelector(store => store.chat);
  
  let text = useRef("");

  useEffect(() => {
    let index = 0;
    let interval = setInterval(() => {
      if (index < result.length) {
        text.current += result.charAt(index);
        index++;
      } else {
        clearInterval(interval);
      }
    }, 20)
  }, [result]);

  return (
    <div>
      <div className="question">
        <div>

          <img src={user} alt="user" className="user" />
          
        </div>
        {data}
      </div>
      <div className="answer">
        <div>
          <img src={bot} alt="bot" className="bot" />
        </div>
        <div>
          {loading && <div className='loading'>
          <div></div>
          <div></div>
          <div></div>
          </div>
          }
          {!loading && text.current}
          {console.log(text.current)}
        </div>
      </div>
    </div>
  );
}

export default GetResult
