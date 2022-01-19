import React,{useState} from 'react';

const PokemonApi = () => {

    const [pokemonList,setPokemonList] = useState([]);

    const getPokemon = () => {
        // fetch here
        fetch("https://pokeapi.co/api/v2/pokemon?limit=807")
            .then(response=>{
                // convert to JSON
                return response.json();
            })
            .then(response=>{
                // set pokemonlist
                setPokemonList(response.results)
            })
            .catch(err=>{
                // log error
                console.log("Error: ",err)
            })
    }


    return (
        <div className='container'>
            <h3>Pokemon API!</h3>
            <p>Click the button below to view 807 Pokemon.</p>
            <button onClick={getPokemon} className='btn btn-success'>Get Pokemon</button>
            {
                pokemonList.map((pokemonObj,i)=>{
                    return (
                        <div>
                            {i+1}<p>{pokemonObj.name}</p>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default PokemonApi