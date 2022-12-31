import React from 'react'
import plus from "../Assets/plus.svg";

import light from "../Assets/light.svg";
import logOut from "../Assets/logOut.svg";
import openai from "../Assets/openai.svg";
import update from "../Assets/update.svg";
import deleteIcon from "../Assets/delete.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className='data'>
        <div className="chat">
          <img src={plus} alt="plus" />
          New chat
        </div>
        <div className="container"></div>
      </div>
      <div className='data2'>
        <div className='border'></div>
        <div className="delete">
          <img src={deleteIcon} alt="deleteIcon" />
          Clear conversations
        </div>
        <div className="delete">
          <img src={light} alt="deleteIcon" />
          Light mode
        </div>
        <div className="delete">
          <img src={openai} alt="deleteIcon" />
          OpenAI Discord
        </div>
        <div className="delete">
          <img src={update} alt="deleteIcon" />
          Update & FAQ
        </div>
        <div className="delete">
          <img src={logOut} alt="deleteIcon" />
          Log out
        </div>
      </div>
    </div>
  );
}

export default SideBar
