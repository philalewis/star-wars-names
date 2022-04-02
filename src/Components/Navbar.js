import React, { useState } from 'react'

const Navbar = ({ data, characters, setCharacters }) => {
  const [ input, setInput ] = useState('')

  const handleChange = (event) => {
    setInput(event.target.value)
  }

  const filterCharacters = () => {
    const allChars = data
    setCharacters(allChars.filter(char => {
      return char.name.toLowerCase().includes(input.toLowerCase())
    }))
    setInput('')
  }

  return (
    <nav>
      <input type="text" value={input} onChange={event => handleChange(event)}/>
      <button onClick={event => filterCharacters(event)}>Filter</button>
    </nav>
  )
}

export default Navbar