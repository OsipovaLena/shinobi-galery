import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import App from "./App.jsx";
import './Test.css'
import app from "./App.jsx";

export const Test = () => {



    const {id} = useParams();
    const [shinobi, setShinobi] = useState({})

    let navigate = useNavigate()

    useEffect(() => {
        fetch(`https://66f027aef2a8bce81be52678.mockapi.io/api/v1/shinobi/${id}`)
            .then(res => res.json())
            .then((data) => {setShinobi(data)
        console.log(data)})

    }, [])

    const showShinobi = () => {
        console.log(shinobi)
    }



    return (

        <div className='shinobi-about'>
            <div className='shinobi-back'>
            <button onClick={() => navigate(-1)}>Back</button>
            </div>
            <div className='shinobi-card'>
            <h1>{shinobi.name}</h1>
                <p></p>
                <p>{shinobi.village}</p>
                <p>{shinobi.abilities}</p>
                <p>{shinobi.power}</p>
                <p>{shinobi.price}</p>
            </div>


        </div>
    )
}