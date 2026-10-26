import { useState } from 'react';
import './App.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  function handleLogin(e) {
    e.preventDefault();

    if (username === 'admin' && password === 'admin123') {
      setLoggedIn(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  }

  if (!loggedIn) {
    return (
      <div className="login-page">
        <form className="login-card" onSubmit={handleLogin}>
          <h1>Welcome Back!</h1>
          <p>Login to your DevOps Dashboard</p>

          <label>Username</label>
          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p className="login-error">{error}</p>}

          <button type="submit">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div className="App">
      return (
  <div className="App">
    <div className="App">
      <h1>My DevOps Learning Dashboard</h1>
      <p>CI/CD Pipeline Test - Version 2</p>
      <p>Welcome, {username}!</p>
      

      <div className="cards">
        <div className="card">
          <h2>Linux</h2>
          <p>Learning Linux commands</p>
        </div>

        <div className="card">
          <h2>Docker</h2>
          <p>Building images and containers</p>
        </div>

        <div className="card">
          <h2>Git & GitHub</h2>
          <p>Managing code and branches</p>
        </div>

        <div className="card">
          <h2>React</h2>
          <p>Building web applications</p>
        </div>
      </div>

      <button onClick={() => setLoggedIn(false)}>
        Logout
      </button>
    </div>
  );
}

export default App;