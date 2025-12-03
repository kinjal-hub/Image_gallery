import { useContext } from "react"
import MainContext from "../mainContext"


const Signin = () => {
  const { name } = useContext(MainContext)
  return (
    <div>
        <h1 style={{ margin: '70px', padding: '10px' }}>This is Sign in Page.</h1>
        <h2>Hello {name}</h2>
    </div>
  )
}

export default Signin
