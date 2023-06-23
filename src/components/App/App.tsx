import "./App.css"
import { useState } from "react"

const App = () => {
  const [game, setGame] = useState({
      id: 1,
      player: {
          name: "Dylan"
      }
   })

  const handleClick = () => {
      setGame({...game, player: {name: 'Bob'}})
  }

  return (
      <>
        <div onClick={handleClick}>
            Player {game.id} is {game.player.name}
        </div>
      </>
  )
}

export default App