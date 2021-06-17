import { axios } from "axios"

const Insert = () => {

  const DisplayBE = () => {
    fetch('http://localhost:3000/api/getAllDocsFromCollection', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => console.log(data));
  }
  
  return (<>
    <button onClick={() => DisplayBE()} >display</button>
  </>)
}

export default Insert