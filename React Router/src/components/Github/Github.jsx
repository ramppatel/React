import React, {useState, useEffect} from 'react'

function Github() {
  
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://api.github.com/users/ramppatel")
    .then(res => res.json())
    .then(data => {
        console.log(data);
        setData(data);
    })
    .catch(err => {
        console.log(err);
    });
  }, []);

  return (
    <div className = "text-center bg-orange-400 mt-2 p-4">
      Github Followers : {data.followers}
      <img src={data.avatar_url} alt="Github Image" width = {300}/>
    </div>
  )
}

export default Github
