import React, { useState, useEffect } from 'react';

function App() {
  const [data, setData] = useState('');

  useEffect(() => {
    (async function () {
      // Make a GET request to the Azure Function URL
      const response = await fetch('http://localhost:7071/api/HttpTrigger1?name=John');
      
      // Check if the response is OK (status code 200)
      if (response.ok) {
        const result = await response.json(); // Parse the response body as JSON
        setData(result.text);  // Set the response message to state
      } else {
        setData('Error fetching data from the server');  // Handle error if the request fails
      }
    })();
  }, []); // Empty dependency array means this effect runs once when the component mounts

  return <div>{data}</div>;  // Display the data in the component
}

export default App;
