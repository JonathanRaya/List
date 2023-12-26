import React, { useState } from "react"
import "./App.css"

const App = () => {
  const [list, setList] = useState([]);
  const [userInput, setUserInput] = useState("")

  const addItem = (item) => {
    const newItem = {
      id: Math.random(),
      item: item,
    }
    setList([...list, newItem])

    setUserInput("")
  }
  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      addItem(userInput)
    }
  }

  const deleteItem = (id) => {
    const newList = list.filter((item) => item.id !== id);
    setList(newList)
  }

  // Grabbing Input from user to add to list
  return (
    <>
      <div className="app">
        <div className="header">
          <h1>Groceries</h1>
        </div>
        <div className="input-box">
          <label className="label-box"> Type in items  <br></br>
          <input
            type="text"
            value={userInput}
            onChange={(e) => setUserInput(e.target.value)}
            onKeyDown={handleKeyPress}
            />
            </label>
          <button onClick={() => addItem(userInput)}>Add Item</button>
        </div>
        <div className="items">
          <ol>
            {list.map((item) => (
              <li key={item.id}>
                {item.item}
                <button className='delete' onClick={() => deleteItem(item.id)}> Delete</button>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </>
  )
}

export default App
