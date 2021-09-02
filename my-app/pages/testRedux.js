import { useDispatch } from 'react-redux'
import useInterval from '../lib/useInterval'
import Clock from "../src/components/test-redux/clock"
import Counter from "../src/components/test-redux/counter"
import Nav from "../src/components/test-redux/nav"

export default function Page() {
  const dispatch = useDispatch()

  // Tick the time every second
  useInterval(() => {
    dispatch({
      type: 'TICK',
      light: true,
      lastUpdate: Date.now(),
    })
  }, 1000)

  return (
    <>
      <Nav />
      <Clock />
      <Counter />
    </>
  )
}