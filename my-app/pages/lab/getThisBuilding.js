import React from "react"
import getServerSideProps from "./nextjsDataFetchingBuildings"

const DemoNextjsGetBuilding = ({article}) => {

  getServerSideProps()

  console.log(article)

}

export default DemoNextjsGetBuilding