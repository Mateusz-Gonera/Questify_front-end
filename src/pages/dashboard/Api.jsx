import { useEffect, useState } from 'react';


function MyDataFetcher() {
  const [data, setData] = useState(null);
  useEffect(() => {
    async function fetchData() {
      const response = await fetch('http://localhost:3000/card');
      const data = await response.json();
      setData(data);
    } fetchData();
  }, []);

  if (!data) {
    return <div>Loading...</div>;
  }
  return <MyComponent data={data} />;
}