import React from 'react'
import { useSelector } from 'react-redux';
import user from '../Assets/user.svg';
import bot from '../Assets/bot.svg';
import { useRef } from 'react';
import { useEffect } from 'react';



const GetResult = ({ data }) => {
  const { loading, result } = useSelector(store => store.chat);

  console.log(result, "result");
  let text = useRef("");
  let index = useRef(0);
  let interval = useRef("");

  useEffect(() => {
    interval.current = setInterval(() => {
      if (index.current < result.length) {
        // text.current += result.charAt(index.current);
        console.log("indside result");
        text.current += result.charAt(index.current);
        
        index.current++;
      } else {
        clearInterval(interval.current);
      }
    }, 20);
  }, []);

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
          {loading ? (<div className='loading'>
          <div></div>
          <div></div>
          <div></div>
          </div>) : result
          }
          
          {console.log(result, "render")}
        </div>
      </div>
    </div>
  );
}

export default GetResult
