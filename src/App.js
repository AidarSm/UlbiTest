import React from 'react';
import Navbar from './components/Navbar/Navbar';

import AppRouter from './router/AppRouter';

const App = () => {
  return (
    <div>
      <Navbar />
      <AppRouter />
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
