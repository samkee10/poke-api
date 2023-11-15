import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Card } from 'react-bootstrap'

const Pokemones = () => {
  const [pokemones, setPokemones] = useState([])
  const [selectedPokemon, setSelectedPokemon] = useState(null)
  const [pokemonDetails, setPokemonDetails] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon')
        // Ajusta esto según la estructura de tu API
        setPokemones(response.data.results) // Probablemente la propiedad es 'results'
      } catch (error) {
        console.error('Error fetching Pokemon data:', error)
      }
    }

    fetchData()
  }, [])

  const handlePokemonSelect = async (pokemonName) => {
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
      setPokemonDetails(response.data) // Aquí obtienes la información detallada del Pokémon
      setSelectedPokemon(pokemonName)
    } catch (error) {
      console.error(`Error fetching details for ${pokemonName}:`, error)
    }
  }

  return (
    <div className='poketext'>
      <h1>Selecciona un pokemon</h1>
      <select onChange={(e) => handlePokemonSelect(e.target.value)}>
        <option value=''>Selecciona un Pokémon</option>
        {pokemones.map((pokemon, index) => (
          <option key={index} value={pokemon.name}>
            {pokemon.name}
          </option>
        ))}
      </select>
      {selectedPokemon && (
        <div>
          <h3>{selectedPokemon}</h3>
          {pokemonDetails && (
            <Card className='pokecard'>
              <Card.Img
                height='250'
                variant='top'
                src={pokemonDetails.sprites.front_default}
                alt={selectedPokemon}
              />
              <Card.Body>
                <Card.Title className='fw-bold'>{selectedPokemon}</Card.Title>
                <ul className='text-left'>
                  <Card.Text>
                    {pokemonDetails.stats.map((stat, i) => (
                      <li key={i}>
                        {stat.stat.name}: {stat.base_stat}
                      </li>
                    ))}
                  </Card.Text>
                </ul>
                <Card.Text className='text-secondary'>
                  Types: {pokemonDetails.types.map((type) => type.type.name).join(', ')}
                </Card.Text>
              </Card.Body>
            </Card>
          )}
        </div>
      )}
    </div>
  )
}
export default Pokemones
