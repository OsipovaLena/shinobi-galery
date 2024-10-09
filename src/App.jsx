import {useEffect, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Link} from "react-router-dom";
import {useParams} from "react-router-dom";
import {AppRouter} from "./Routing.jsx";
import {AddShinobi} from "./AddShinobi";


function App() {

    const [shinobi, setShinobi] = useState([])
    const [zhopa, setZhopa] = useState(false)

    const handleClick = (e, data) => {
        // access to e.target here
        console.log(data);
    }

    const deleteShinobi = async (id) => {
        const url = `https://66f027aef2a8bce81be52678.mockapi.io/api/v1/shinobi/${id}`
        await fetch(url, {
            method:'DELETE'
        })

        setShinobi((prevShinobi) => prevShinobi.filter((item) => item.id !== id));
        console.log(id)
    }

    const getShinobi = async () => {
        const url = 'https://66f027aef2a8bce81be52678.mockapi.io/api/v1/shinobi'
        const response = await fetch(url, {
            method:'GET'
        })
        const responseShinobi = await response.json()
        setShinobi(responseShinobi)
        console.log(responseShinobi)
    }
    useEffect(() => {
        getShinobi()
    }, [zhopa])


    return (
        <div>

            <div className="add-shinobi">
                <AddShinobi setZhopa={setZhopa}/>
            </div>

        <div className="main-container">

            <div className="shinobi-container">
                {shinobi.map(e => <div key={e.id} className="shinobi-item">
                    {<img src={e.image} alt=""/>}
                    <div className="shinobi-name">{e.name}</div>
                                <div>Price: {e.price}</div>
                    <Link key={e.id} to={`shinobi/${e.id}`}>Redirect</Link>
                    <button onClick={() => deleteShinobi(e.id)}>Delete</button>

                </div>)}

                {/*<Link to="add">Add</Link>*/}

            </div>

        </div>

        </div>
    )
}

export default App
