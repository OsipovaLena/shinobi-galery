import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";

function App() {

    const {id} = useParams()
    const [shinobi, setShinobi] = useState([])

    const getShinobi = async () => {
        const response = await fetch(`https://66f027aef2a8bce81be52678.mockapi.io/api/v1/shinobi`)
        const responseShinobi = await response.json()
        setShinobi(responseShinobi)
        console.log(responseShinobi)
    }
    useEffect(() => {
        getShinobi()
    }, [id])


    return (
        <div className="main-container">

            <div className="shinobi-container">
                {shinobi.map(e => <div key={e.id} className="shinobi-item">
                    {<img src={e.image} alt=""/>}
                    <div className="shinobi-name">{e.name}</div>
                                <div>Price: {e.price}</div>
                    <Link key={e.id} to={`shinobi/${e.id}`}>Redirect</Link>
                </div>)}
            </div>

        </div>
    )
}

export default App
