import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'//use of axios we dont need json reader because it is own read
//axios use how to data pass in our surrounding and how to check the error
function App() {
  const [jokes, setjokes] = useState([])

  useEffect(()=>{
    axios.get('/api/jokes')//request send 2.use proxy means the url is run same server in vite config 
    .then((response)=>{   //if this is correct send the data
       setjokes(response.data)
    })
    .catch((error)=>{ //if we get some error so they will check
      console.log(error)
    })
  })

  return (
    <>
      <h1>chai aur code</h1>
      <p>JOKES:{jokes.length}</p>
      {
        jokes.map((joker,index)=>(
          <div key={joker.id}>
            <h2>{joker.joke}</h2>
          </div>
        ))
      }
    </>
  )
}

export default App
