import React from "react"
import { axios } from "axios"
import { useRouter } from 'next/router'

import AppartmentForm from "../../src/components/appartments/appartment-form" //"../appartments/appartment-form";

const FetchOne = () => {

  const router = useRouter()
  const { id } = router.query

/*   const DisplayBE = () => {
    fetch(`http://localhost:3000/api/buildings/readOneBuildingById?id=${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => response.json())
      .then(data => { console.log(data)})
  } */
  
  return (<>
    {/* <button onClick={() => DisplayBE()} >display</button> */}
    <AppartmentForm />
  </>)
}

export default FetchOne