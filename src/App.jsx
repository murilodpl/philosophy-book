import { useEffect, useState } from "react"

import Navbar from "./components/Navbar"
import Philosopher from "./components/Philosopher"

export default function App() {
  // Variables
  const [philosophers, setPhilosophers] = useState({})

  // API Resquests
  useEffect(() => {
    const philosopherId = Math.ceil(Math.random() * 12) // The api has 12 philosophers
    fetch(`https://philosophyapi.herokuapp.com/api/philosophers/${philosopherId}`)
      .then(res => res.json())
      .then(data => {
        setPhilosophers(data)
      })
  }, [])

  // Console logs
  console.log(philosophers)

  // Functions


  // Components population


  return (
    <div className="App">
      <Navbar />

      <section>
        <Philosopher data={philosophers} />
      </section>{/* Search Section */}
    </div>
  )
} 