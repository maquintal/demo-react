import React from "react"

const NextjsFetchAllDemo = ({buildings}) => {

  return (<>
    {buildings.map((building) => {
      return <>{building._id} <br /></>
    })}
  </>)  

}

export async function getServerSideProps(context) {

  const res = await fetch(`http://localhost:3000/api/buildings/readAllBuildings`)

  const buildings = await res.json()

  return {
    props: {
      buildings
    }, // will be passed to the page component as props
  }
}

export default NextjsFetchAllDemo
