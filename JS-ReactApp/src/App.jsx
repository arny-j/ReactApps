import Menu from "./Menu"
import Monster from "./Monster"
import { useState, useEffect } from "react"

function fetchData() {
  return fetch("https://tuhakarainab.github.io/content_hosting/monsters.json")
    .then(response => response.json())
}

function App() {

  const [monsters, setMonsters] = useState([])
  const [selectedMonster, setSelectedMonster] = useState(null)

  useEffect(() => {
    fetchData().then(data => setMonsters(data))
  }, [])

  return (
    <div>
      <Menu monsters={monsters} onSelect={setSelectedMonster} />
      <h1 className="display-3 p-3">Movie Monster React Application</h1>
      {selectedMonster && <Monster selectedMonster={selectedMonster} />}
    </div>
  )
}

export default App
