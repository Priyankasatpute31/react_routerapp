import React, { useEffect, useState } from "react";
import axios from "axios";
const PokemonFun1=()=>{

    const [num,update]=useState(0);
    const [name,setname]=useState(0)
    useEffect(()=>{
        async function getData(){
            const res=await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=100000&offset=${num}`);
            console.log(res);
            setname(res.data.results[`${num}`].name)
        }
        getData();
        
    })
return<>
<h1>You choose {num}</h1>
<h1>You choose {name}</h1>
    <select value={num} onChange={(event)=>{
     update(event.target.value);
    }}>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
    </select>
</>
}
export default PokemonFun1;