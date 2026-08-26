import './App.css'
import { useState } from "react"

export default function App() {
  const [selectedChips, setSelectedChips] = useState([])
  console.log(selectedChips)
  const chips = [
    {
      id: "design",
      name: "Design"
    },
    {
      id: "product",
      name: "Product"
    },
    {
      id: "develop",
      name: "develop"
    }
  ]

  function handleClick(id) {
    if(selectedChips.includes(id)) {
      setSelectedChips(prev => prev.filter(chipId => chipId !== id))
    } else {
      setSelectedChips(prev => [id, ...prev])
    }
  }

  function clearAll() {
    setSelectedChips([])
  }

  return <>
      {chips.map((chip)=> {
      return <button
        key={chip.id} 
        className={selectedChips.includes(chip.id) ? "activatedChip" : ""} 
        onClick={()=>handleClick(chip.id)}>
          {chip.name}
        </button>
      })}
      <button disabled = {selectedChips.length === 0 ? true : false} onClick = {clearAll}>Clear all</button>
    </>
    

}

