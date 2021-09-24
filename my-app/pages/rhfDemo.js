import React, {useEffect} from "react"
import { useDispatch, useSelector } from "react-redux"
import axios from 'axios'

import ReactHookFormDemo from "../src/react-hook-form-demo"

import { jusDePeche } from "../src/store/rootSlice"

const RHFDemo = ({buildings}) => {

  const dispatch = useDispatch()

  useEffect(() => {
    if (buildings) {
      dispatch(jusDePeche(buildings))
    }
  }, [])


  return (<div>
    <ReactHookFormDemo />
  </div>)
}

RHFDemo.getInitialProps = async (ctx) => {
  try {
    const res = await axios.get(
      "http://localhost:3000/api/buildings/readAllBuildings"
    );
    console.log('res', res.data);
    const buildings = res.data;
    return { buildings };
  } catch (error) {
    return { error };
  }
};



export default RHFDemo