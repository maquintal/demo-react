import { axios } from "axios"
import { useRouter } from 'next/router'

const FetchOne = () => {

  const router = useRouter()
  const { id } = router.query

  const DisplayBE = () => {
    fetch(`http://localhost:3000/api/getOneDocFromCollection?id=${id}`, {
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

export default FetchOne