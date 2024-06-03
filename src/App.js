import { useEffect } from 'react';

function App() {
  const [data, setData] = useState(null);
  useEffect(() => {
    setTimeout(() => {setData({})}, 100);
  }, []);
  return (
    <div>
      {data && <div>data</div>}
      <h1>Hello World</h1>
      <button>click me</button>
      <input type="text" placeholder="input value..." />
    </div>
  );
}

export default App;