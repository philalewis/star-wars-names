import React, { useState, useEffect } from 'react'
import Navbar from './Components/Navbar'

const App = () => {
  const [ data, setData ] = useState([])
  const [ characters, setCharacters ] = useState([])

  useEffect(() => {
    fetch('https://swapi.dev/api/people/')
      .then(res => res.json())
      .then(data => {
        setData(data.results)
        setCharacters(data.results)
      })
      .catch(error => console.log(error))
  }, [])

  const showAllCharacters = () => {
    return data.map(char => {
      return (
        <h2 key={char.id}>{char.name}</h2>
      )
    })
  }

  const showFilteredCharacters = () => {
    return characters.map(char => {
      return (
        <h3 key={char.name}>{char.name}</h3>
      )
    })
  }

  const showAll = () => {
    setCharacters(data)
  }

  return (
    <main>
      <Navbar
        // key={Date.now()}
        data={data}
        setCharacters={setCharacters}
      />
      <button onClick={showAll}>See All</button>
      {/* {showAllCharacters()} */}
      {showFilteredCharacters()}
    </main>
  )
}

export default App