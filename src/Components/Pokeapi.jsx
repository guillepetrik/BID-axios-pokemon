import React from 'react'
import axios from 'axios';
import { useState } from 'react';
import style from './Pokeapi.module.css'

const Pokeapi = () => {

    const [respuesta, setRespuesta] = useState([]);
    const consultapi = ()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon/').then(response=>{
            setRespuesta(response.data.results.map((pokemon)=>({nombre: pokemon.name})))});
        }


    return (
        <>
            <button className= { style.btn } onClick={consultapi}>BUSCAR POKEMONS</button>
            <ul>
                {
                    respuesta.map((pokemon, indice)=> <li className={style.lista} key={indice}>{pokemon.nombre}</li> )
                }
            </ul>
        </>
    )   
}


export default Pokeapi