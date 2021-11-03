import { Box } from '@material-ui/core'
import React , {useEffect} from 'react'
import axios from 'axios'
import { POKEMON_API_URL ,  IMAGE_API_URL } from '../Config'

export default function Pokedex() {
    useEffect(() => {
        axios.get(POKEMON_API_URL+"?limit=800")
        .then((res)=>{
            if(res.status >=200 && res.status < 300){
                const result = res.data
                let newPokemonData = []
                result.newPokemonData.forEach((pokemon , index) => {
                    index++
                    let pokemonObj = {
                        id:index , 
                        url:IMAGE_API_URL + index + ".png" , 
                        name:pokemon.name 
                    }
                    console.log(pokemon);
                });
            }
        
        })
    }, [])
    return (
        <Box>

        </Box>
    )
}

