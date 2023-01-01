import React from 'react';

const Login = () => {
  return (
    <div className="container" >
          <form action="" className="form_login" onSubmit={(e) => {
              e.preventDefault();
              console.log("data");
      }}>
        <h1 className="heading">Login</h1>
        <div className="form_filed">
          <input type="text" name="email" className="field" />
          <label htmlFor="" className="label">
            Email
          </label>
        </div>
        <div className="form_filed">
          <input type="password" name="password" className="field" />
          <label htmlFor="" className="label">
            Password
          </label>
        </div>
        <button className='btn' type='submit'>Login</button>
      </form>
    </div>
  );
};

export default Login;
