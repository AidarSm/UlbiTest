import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import AboutPage from './pages/AboutPage';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import Users from './users/Users';
import UsersDetailsPage from './pages/UsersDetailsPage';

const App = () => {
  return (
    <div>
      <Link data-testid="main-link" to="/">
        main
      </Link>{' '}
      <Link data-testid="about-link" to="/about">
        about
      </Link>
      <Link data-testid="users-link" to="/users">
        users
      </Link>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<Users />} />
        <Route path="/users/:id" element={<UsersDetailsPage />} />
        <Route path="/*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;

// import { useEffect, useState } from 'react';

// function App() {
//   const [data, setData] = useState(null);
//   const [toggle, setToggle] = useState(false);
//   const [value, setValue] = useState('');

//   const handleClick = () => {
//     setToggle((prev) => !prev);
//   };

//   useEffect(() => {
//     setTimeout(() => {
//       setData({});
//     }, 100);
//   }, []);
//   return (
//     <div>
//       {<h2 data-testid="div-element">{value}</h2>}
//       {toggle && <div data-testid="toggle-element">toggle</div>}
//       {data && <div style={{ color: 'red' }}>data</div>}
//       <h1>Hello World</h1>
//       <button data-testid="toggle-btn" onClick={handleClick}>
//         click me
//       </button>
//       <input
//         data-testid="inputElement"
//         value={value}
//         onChange={(e) => setValue(e.target.value)}
//         type="text"
//         placeholder="input value..."
//       />
//     </div>
//   );
// }

// export default App;
