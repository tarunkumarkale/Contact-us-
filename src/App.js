import React, { useState, useEffect } from 'react';
import photo from './Images/photo.png';
import tw from './Images/tw.png';
import INs from './Images/INs.png';
import fb from './Images/fb.png';
import ok from './Images/ok.mp4';

import './Style.css';

const App = () => {
  const [first, setfirst] = useState({
    Name: '',
    email: '',
    message: '',
  });
  const [firs, setfirs] = useState('');

  const hello = (e) => {
    let value = e.target.value;
    let name = e.target.name;
    setfirst((prevalue) => ({
      ...prevalue,
      [name]: value,
    }));
  };

  const submit = (e) => {
    e.preventDefault();
    setfirs(
      `${first.Name}\n${first.email}\n${first.message}`
    );
  };

  useEffect(() => {
    if (firs !== '') {
      alert(firs);
    }
  }, [firs]);

  const validateEmail = (email) => {
    // Simple email validation using regular expression
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  return (
    <>
      <div className='full_body'>
        <div className='container'>
          <img src={photo} alt="ok" />
        </div>
        <div>
          <h1>Contact Us</h1>
          <form onSubmit={submit}>
            <div className='tarun'>
              <h2>Name</h2>
              <input type="text" onChange={hello} name='Name' value={first.Name} />
              <br /><br /><br /><br /><br />
              <h2>E-mail</h2>
              <input type="text" onChange={hello} name='email' value={first.email} />
              {!validateEmail(first.email) && <p className='error'>Invalid email format</p>}
              <br /><br /><br /><br /><br />
              <h2>Message</h2>
              <input type="text" onChange={hello} name='message' value={first.message} />
              <br /><br /><br />
              <button type='submit'>Click</button>
            </div>
          </form>
        </div>
        <div className='soc'>
        <h2>Contact</h2>
          <p>hi@.gmail.com</p>
          <br /><br /><br />
          <h2>Based in</h2>
          <p>New york ,California</p>
          <br /><br /><br />
          <div className='photo'>
            <img src={tw} alt="" />
            <img src={INs} alt="" />
            <img src={fb} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
