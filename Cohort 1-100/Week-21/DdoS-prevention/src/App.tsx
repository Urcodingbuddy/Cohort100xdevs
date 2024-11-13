import { Turnstile } from '@marsidev/react-turnstile';
import { useState } from 'react'
import './App.css'
import axios from 'axios'
function App() {
  const [email, setEmail] = useState('');
  const [otp, setOtp] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [token, setToken] = useState<string>('');

  function handleClick() {
    axios.post('http://localhost:3000/reset-password', {
      email: email,
      otp: otp,
      newPassword: newPassword,
      token: token
    })
      .then(response => {
        console.log('Password updated successfully:', response.data);
      })
      .catch(error => {
        console.error('Error updating password:', error);
      });
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <div>

        <input
          placeholder="Email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input

          placeholder="OTP"
          type="text"
          onChange={(e) => setOtp(e.target.value)}
        />
        <input
          placeholder="New Password"
          type="password"
          onChange={(e) => setNewPassword(e.target.value)}
        />
        <Turnstile onSuccess={(token) => {
          setToken(token)
        }}
          siteKey='0x4AAAAAAAz6SBQqGmUm6IEq' />
        <button onClick={handleClick}>Update Password</button>
      </div>
      <div style={{ width: "50%", overflow: "scroll" }}>
        {token}
      </div>
    </div>

  )
}

export default App
