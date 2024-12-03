import {useParams, useNavigate} from "react-router-dom";
import {useEffect, useState} from "react";
import s from './ShinobiCard.module.css'

export const ShinobiCard = () => {


    const {id} = useParams();
    const [shinobi, setShinobi] = useState({})
    const [loading, setLoading] = useState(true)

    let navigate = useNavigate()

    useEffect(() => {
        fetch(`https://66f027aef2a8bce81be52678.mockapi.io/api/v1/shinobi/${id}`)
            .then(res => res.json())
            .then((data) => {
                setShinobi(data)
                setLoading(false)
                console.log(data)
            })

    }, [])

    const showShinobi = () => {
        console.log(shinobi)
    }

    const ShinobiInfo = () => {
        return (
            <div className={s.shinobiAbout}>

                <div className={s.shinobiCard}>
                    <h1>{shinobi.name}</h1>
                    <div>{<img src={shinobi.image} alt=""/>}</div>
                    <p> <span className="title">Village:</span> {shinobi.village}</p>
                    <p> <span className="title">Abilities:</span> {shinobi.abilities}</p>
                    <p> <span className="title">Power:</span> {shinobi.power}</p>
                    <p> <span className="title">Price:</span> {shinobi.price}</p>
                    <p> <span className="title">ID:</span> {shinobi.id}</p>
                    <button onClick={() => navigate(-1)}>Back</button>
                </div>

            </div>
        )
    }
    const Loading = () => {
        return (
            <div className={s.loading}>Loading...</div>
        )
    }
    return (
        <div>
            {loading ? <Loading/> : <ShinobiInfo/>}

        </div>
    )
}