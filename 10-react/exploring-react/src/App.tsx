import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import BBC from "./components/BBC"

function App() {
  // const [count, setCount] = useState(0) // 
  // const [user, setUser] = useState<{ name: string } | null>(null)
  // let counter = 0

  // const ref = useRef<HTMLHeadingElement>()


  // function handleCount() {
  //   setUser({ name: "Kevin" })
  //   setCount((count) => count + 1)
  //   counter++
  //   console.log(counter)

  //   ref!.current!.innerHTML = `<h1>I updated this manually</h1>`

  // }

  return (
    <>
      <BBC team={true} />
    </>
  )
}

export default App
