import './App.css'
import {useState} from "react"
import Chip from "./Chip"

export default function App() {
  const [chipSelected, setChipSelected] = useState([])
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
      name: "Develop"
    }
  ]

  function handleClick(id) {
    if(chipSelected.includes(id)) {
      setChipSelected(prev=>{
        return prev.filter(selectedId => {
          return selectedId !== id
        })
      })
    } else {
      setChipSelected(prev=>[...prev, id])
    }
  }

  function clearAll() {
    setChipSelected([])
  }

  return (
    <div class="chips">
      {
        chips.map((chip)=> {
          return <Chip key={chip.id} onClick={()=>handleClick(chip.id)} selected={chipSelected.includes(chip.id)}>{chip.name}</Chip>
        })
      }
      <button onClick = {clearAll} disabled = {chipSelected.length === 0 ? true : false}>Clear All</button>
    </div>
  )
}
