import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from 'react-router-dom';
import Login from './components/Login';
import Home from './container/Home';
import Signup from './components/Signup';

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/me', {
      method: 'GET',
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.errors) {
          setUser(data);
        }
      });
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="login" element={<Login user={user} setUser={setUser} />} />
        <Route
          path="signup"
          element={<Signup user={user} setUser={setUser} />}
        />
        <Route path="/*" element={<Home user={user} setUser={setUser} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
