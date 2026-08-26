import './App.css'
import Chip from "./Chip.jsx"
import {useState} from 'react'

export default function App() {
  const [selectedChips, setSelectedChips] = useState([])

  const chips = [
    {id: "design", name: "Design", disabled: true},
    {id: "product", name: "Product"},
    {id: "develop", name: "Develop"}
  ]

  function handleClick(id) {
    if(selectedChips.includes(id)) {
      setSelectedChips(prev=>{
        return prev.filter(chipId=> chipId !== id)
      })
    } else {
      setSelectedChips(prev=>[
        ...prev,
        id
      ])
    }
  }

  function clearAll() {
    setSelectedChips([])
  }

  return (
    <div className="chips">
      {chips.map((chip)=>{
        return (
          <Chip key = {chip.id} onClick = {()=>handleClick(chip.id)} selected={selectedChips.includes(chip.id)} label = {chip.name} disabled = {chip.disabled ? true : false}></Chip>
        )
      })}
      <button disabled = {selectedChips.length === 0 ? true : false} onClick = {clearAll}>Clear All</button>
    </div>
  )
}