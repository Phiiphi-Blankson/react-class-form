/** @format */
// import Style from './components/Style';
import { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleNameChnage = (e) => {
    setName(e.target.value);
  };
  const handleEmailChnage = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordChnage = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          onChange={handleNameChnage}
          value={name}
          type="text"
          placeholder="Enter Your Name here"
        />{' '}
        <br /> <br />
        <input
          onChange={handleEmailChnage}
          value={email}
          type="email"
          placeholder="Enter Your Email here"
        />{' '}
        <br /> <br />
        <input
          onChange={handlePasswordChnage}
          value={password}
          type="password"
          placeholder="Enter Your Password"
        />{' '}
        <br /> <br />
        <input className="submit" type="Submit" />
      </form>
    </div>
  );
}

export default Form;
