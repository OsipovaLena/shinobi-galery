import {useEffect} from "react";
import {Link} from "react-router-dom";
import s from './AllCards.module.css';

export const AllCards = ({ shinobi, setShinobi, addedShinobi, currentPage, itemsPerPage }) => {
    const getShinobi = async () => {
        const url = 'https://66f027aef2a8bce81be52678.mockapi.io/api/v1/shinobi';
        const response = await fetch(url);
        const responseShinobi = await response.json();
        const sortedShinobi = responseShinobi.sort((a, b) => b.id - a.id);
        setShinobi(sortedShinobi);
    };

    useEffect(() => {
        getShinobi();
    }, [addedShinobi]);

    const deleteShinobi = async (id) => {
        const url = `https://66f027aef2a8bce81be52678.mockapi.io/api/v1/shinobi/${id}`;
        await fetch(url, {method: 'DELETE'});
        setShinobi((prevShinobi) => prevShinobi.filter((item) => item.id !== id));
    };

    const currentItems = shinobi.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    return (
        <div className={s.mainContainer}>
            <div className={s.shinobiContainer}>
                {currentItems.length > 0
? (
                    currentItems.map(e => (
                        <div key={e.id} className={s.shinobiItem}>
                            <img src={e.image} alt="" />
                            <div className={s.shinobiName}>{e.name}</div>
                            <div>Price: {e.price}</div>
                            <div>Date: {e.createdAt}</div>
                            <Link to={`shinobi/${e.id}`}>Redirect</Link>
                            <button onClick={() => deleteShinobi(e.id)}>Delete</button>
                        </div>
                    ))
                )
: (
                    <p>Загрузка...</p>
                )}
            </div>
        </div>
    );
};