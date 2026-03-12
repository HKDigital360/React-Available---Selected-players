// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import { Suspense, useState } from "react"
import AvailablePlayers from "./Components/AvailablePlayers/AvailablePlayers"
import NavBar from "./Components/NavBar/NavBar"
import SelectedPlayers from "./Components/SelectedPlayers/SelectedPlayers"
import PlayerCard from "./Components/PlayerCard/PlayerCard"

const fetchPlayers = async () => {
  const res = await fetch("/players.json")
  return res.json()
}

const playersPromise = fetchPlayers()



function App() {
  

  const [toggle, setToggle] = useState(true);
  const [availableBalance, setAvailableBalance]= useState(60000000);
  const [chosenPlayer, setChosenPlayer]=useState([]);
  // console.log(chosenPlayer);

const handleDelete=(p)=>{

console.log(p)
}



  return (
    <>


      <NavBar availableBalance={availableBalance}></NavBar>
      <div className=" max-w-330 mx-auto flex justify-between items-center">
        <h1 className="font-bold">{toggle===true?"Available Players":`Selected Players (${chosenPlayer.length}/6)`}</h1>
        <div className="">
          <button onClick={() => setToggle(true)} className={`btn py-2 border  border-gray-200 border-r-0 rounded-l-xl ${toggle === true ? "bg-[#E7FE29]" : ""}`} >Available</button>
          <button onClick={() => setToggle(false)} className={`btn py-2 border border-gray-300 border-l-0 rounded-r-xl ${toggle === false ? "bg-[#E7FE29]" : ""}`}>Selected <span>({chosenPlayer.length})</span></button>
        </div>
     </div>
      {
        toggle === true ? <Suspense fallback={<span className="loading loading-spinner text-primary"></span>
        }>
          <AvailablePlayers chosenPlayer={chosenPlayer} setChosenPlayer={setChosenPlayer} toggle={toggle} availableBalance={availableBalance} setAvailableBalance ={setAvailableBalance} playersPromise={playersPromise}>

          </AvailablePlayers>
        </Suspense> : <SelectedPlayers handleDelete={handleDelete} chosenPlayer={chosenPlayer}  >

        </SelectedPlayers>
      }
 

    </>
  )
}

export default App
