import React from 'react'
import limit from '../Assets/limit.svg';
import capabilities from '../Assets/capibilities.svg';
import bigLight from '../Assets/bigLight.svg';
import message from '../Assets/message.svg';
import user from '../Assets/user.svg';
import bot from '../Assets/bot.svg';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postTheData } from '../Store/ChatData/chatdata.action';
import { useEffect } from 'react';






const Chat = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState("");
  const [show, setShow] = useState(false);
  const { loading, result } = useSelector((store) => store.chat);
  const dispatch = useDispatch();
  console.log(show, result, 2);
  
  useEffect(() => {
    if (!result) setShow(false);
  }, [result]);

  const handleClick = () => {
    setValue(data);
    dispatch(postTheData(data));
    setShow(true);
  }
  

  return (
    <>
      <div className="form">
        <input
          type="text"
          name="search"
          id="input"
          value={data}
          onChange={(e) => setData(e.target.value)}
        />
        <button disabled={!data} className="message" onClick={handleClick}>
          <img src={message} alt="message" />
        </button>
      </div>
      {!show? (
        <div className="chat_room">
          <h1 className="heading_gpt">ChatGPT</h1>
          <div className="chat_container">
            <div className="chat_container_box hovering">
              <img src={bigLight} alt="light" />
              <h3 className="heading_name">Examples</h3>
              <div
                onClick={(e) => {
                  setData(
                    e.target.innerText.slice(1, e.target.innerText.length - 3)
                  );
                }}
              >
                "Explain quantum computing in simple terms" →
              </div>
              <div
                onClick={(e) =>
                  setData(
                    e.target.innerText.slice(1, e.target.innerText.length - 3)
                  )
                }
              >
                "Got any creative ideas for a 10 year old's birthday?" →
              </div>
              <div
                onClick={(e) =>
                  setData(
                    e.target.innerText.slice(1, e.target.innerText.length - 3)
                  )
                }
              >
                "How do I make an HTTP request in Javascript?" →
              </div>
            </div>
            <div className="chat_container_box">
              <img src={capabilities} alt="light" />
              <h3 className="heading_name">Capabilities</h3>
              <div>Remembers what user said earlier in the conversation</div>
              <div>Allows user to provide follow-up corrections</div>
              <div>Trained to decline inappropriate requests</div>
            </div>
            <div className="chat_container_box">
              <img src={limit} alt="light" />
              <h3 className="heading_name">Limitations</h3>
              <div>May occasionally generate incorrect information</div>
              <div>
                May occasionally produce harmful instructions or biased content
              </div>
              <div>Limited knowledge of world and events after 2021</div>
            </div>
          </div>
        </div>
      ) : (
        <div>
          <div className="question">
            <div>
              <img src={user} alt="user" className="user" />
            </div>
            {value}
          </div>
          <div className="answer">
            <div>
              <img src={bot} alt="bot" className="bot" />
            </div>
            <div>
              {loading ? (
                <div className="loading">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              ) : (
                result
              )}

              {console.log(result, 'render')}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Chat
