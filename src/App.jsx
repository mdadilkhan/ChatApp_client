
import { useEffect } from 'react'
import './App.css'

function App() {
 
  useEffect(()=>{
    console.log("hello from adil");
  },[])

  return (
  <>
    <p>Project Started</p>
  </>
  )
}

export default App
