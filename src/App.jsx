import './App.css'
import Chip from "./Chip.jsx"
import {useState} from 'react'

export default function App() {
  const [selectedChips, setSelectedChips] = useState([])

  const chips = [
    {id: "design", name: "Design", disabled: false},
    {id: "product", name: "Product"},
    {id: "develop", name: "Develop"}
  ]

  const cards = [
    {
      id: "card-1",
      title: "Onboarding checklist",
      tags: ["product","design"]
    },
    {
      id: "card-2",
      title: "Component library",
      tags: ["design", "develop"]
    },
    {
      id: "card-3",
      title: "Pricing page",
      tags: ["product"]
    },
    {
      id: "card-4",
      title: "Keyboard shortcuts",
      tags: ["design", "product"]
    },
    {
      id: "card-5",
      title: "API error states",
      tags: ["develop"]
    },
    {
      id: "card-6",
      title: "Empty search",
      tags: ["design"]
    },
    {
      id: "card-7",
      title: "Billing settings",
      tags: ["design", "develop"]
    },
    {
      id: "card-8",
      title: "Focus ring spec",
      tags: ["design", "develop"]
    }
  ]

  const renderedCards = cards.filter((card)=> {
    if(selectedChips.length === 0) {
      return true
    } else {
      for(let i = 0; i < card.tags.length; i++) {
        if(selectedChips.includes(card.tags[i])) {
          return true
        }
      }
      return false
    }
  })

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
    <>
      <div className="chips">
        {chips.map((chip)=>{
          return (
            <Chip key = {chip.id} onClick = {()=>handleClick(chip.id)} selected={selectedChips.includes(chip.id)} label = {chip.name} disabled = {chip.disabled ? true : false}></Chip>
          )
        })}
        <button disabled = {selectedChips.length === 0 ? true : false} onClick = {clearAll}>Clear All</button>
      </div>
      <div className='cards'>
        {
          renderedCards.map((card)=>{
            return (
              <div key = {card.id}>
                <h2>{card.title}</h2>
                {card.tags.map((tag)=>{
                  return <p key= {tag}>{tag}</p>
                })}
              </div>
            )
          })
        }
      </div>
    </>
  )
}