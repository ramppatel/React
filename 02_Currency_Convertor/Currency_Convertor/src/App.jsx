import { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState({})
  const date = new Date().toISOString().split('T')[0];
  const currency = "usd";
  console.log(date);
  let url = `https://${date}.currency-api.pages.dev/v1/currencies/${currency}.json`;
  useEffect(() => {
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch")
        }
        return res.json()   // ✅ convert response to JSON
      })
      .then((jsonData) => {
        console.log(jsonData)
        setData(jsonData)   // ✅ actual data
      })
      .catch((err) => {
        console.error(err)
      })
      console.log("data:- ", data);
  }, [currency, date]);

  return (
    <>
      <div>Data</div>
      {/* <p>{data}</p> */}
    </>
  )
}

export default App
