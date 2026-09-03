import './App.css'
import {useState, useEffect} from "react"
import Chip from "./Chip"
import CardItem from './CardItem'
import { AnimatePresence } from 'motion/react'
import {motion} from 'motion/react'

export default function App() {
  const [chipSelected, setChipSelected] = useState([])

  useEffect(()=>{
    document.addEventListener("keydown", handleEscape)
    return () => {document.removeEventListener("keydown", handleEscape)}
  },[])

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
    },
    {
      id: "marketing",
      name: "marketing"
    }
  ]

  const cards = [
    {
      id: "card-1",
      title: "Onboarding checklist",
      tags: ["product", "design"]
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
      title: "API error states",
      tags: ["develop"]
    },
    {
      id: "card-5",
      title: "Keyboard shortcuts",
      tags: ["design", "product"]
    },
    {
      id: "card-6",
      title: "Empty search",
      tags: ["design"]
    },
    {
      id: "card-7",
      title: "Billing settings",
      tags: ["product", "develop"]
    },
    {
      id: "card-8",
      title: "Focus ring spec",
      tags: ["design", "develop"]
    },
    {
      id: "card-9",
      title: "Checkout errors",
      tags: ["product"]
    },
    {
      id: "card-10",
      title: "Auth token refresh",
      tags: ["develop"]
    },
    {
      id: "card-11",
      title: "Settings nav",
      tags: ["design", "product"]
    },
    {
      id: "card-12",
      title: "Log table empty",
      tags: ["design", "develop"]
    }
  ]

  // Day 3: write selectedCards with .filter (from memory, not Week4).
  // Nothing selected → keep every card.
  // Else keep the card if any of its tags is in chipSelected.
  const selectedCards = cards.filter(card=>{
    if(chipSelected.length === 0) {
      return true
    } else {
      for(let i = 0; i < card.tags.length; i++) {
        if(chipSelected.includes(card.tags[i])) {
          return true
        } 
      }
      return false
    }
  })

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

  function handleEscape(e) {
    if(e.key === "Escape") {
      clearAll()
    }
  }

  function clearAll() {
    setChipSelected([])
  }

  return (
    <>
      <div className="chips">
        {
          chips.map((chip)=> {
            return <Chip key={chip.id} onClick={()=>handleClick(chip.id)} selected={chipSelected.includes(chip.id)}>{chip.name}</Chip>
          })
        }
        <button onClick = {clearAll} disabled = {chipSelected.length === 0 ? true : false}>Clear All</button>
      </div>
      {/* {chipSelected.length === 0 ? "" : <p>{selectedCards.length + " items"}</p>} */}
      {
      selectedCards.length === 0 ? <h3>No matches</h3> : <div className ="cards">
          <AnimatePresence initial={false} mode='popLayout'>
            {
            selectedCards.map(card=>{
              return <motion.div 
                layout 
                className="card"
                initial={{ opacity: 0, y: 20}}
                animate={{ opacity: 1, y:0}}
                exit={{ opacity: 0,y:-5 }}
                transition={{ duration: 0.2 }}
                key = {card.id} 
              >
                  <CardItem title={card.title} tags={card.tags}></CardItem>
                </motion.div>
            })
            } 
          </AnimatePresence>
      </div>
      }
    </>
  )
}
