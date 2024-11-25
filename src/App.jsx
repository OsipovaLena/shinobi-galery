import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { AddShinobi } from "./AddShinobi";
import './App.css';
import { ScrollToTopButton } from "./Scroll.jsx";


function App() {
    const [shinobi, setShinobi] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;
    const [zhopa, setZhopa] = useState(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)


    const getShinobi = async () => {
        const url = 'https://66f027aef2a8bce81be52678.mockapi.io/api/v1/shinobi';
        const response = await fetch(url);
        const responseShinobi = await response.json();
        const sortedShinobi = responseShinobi.sort((a, b) => b.id - a.id)
        setShinobi(sortedShinobi);
    };

    useEffect(() => {
        getShinobi();
    }, [zhopa]);

    const deleteShinobi = async (id) => {
        const url = `https://66f027aef2a8bce81be52678.mockapi.io/api/v1/shinobi/${id}`;
        await fetch(url, {
            method: 'DELETE'
        });
        setShinobi((prevShinobi) => prevShinobi.filter((item) => item.id !== id));
    };

    const totalPages = Math.ceil(shinobi.length / itemsPerPage);
    const currentItems = shinobi.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const handleSortShinobi = (event) => {
        const sortType = event.target.value;
        console.log(event.target.value)

        let sortedShinobi;
        if (sortType === "price") {
            sortedShinobi = [...shinobi].sort((a, b) => a.price - b.price)
        } else if (sortType === "priceLow") {
            sortedShinobi = [...shinobi].sort((a, b) => b.price - a.price)
        } else if (sortType === "power") {
            sortedShinobi = [...shinobi].sort((a, b) => a.power - b.power)
        } else if (sortType === "powerLow") {
            sortedShinobi = [...shinobi].sort((a, b) => b.power - a.power)
        } else if (sortType === "id") {
            sortedShinobi = [...shinobi].sort((a, b) => a.id - b.id)
        } else if (sortType === "idLow") {
            sortedShinobi = [...shinobi].sort((a, b) => b.id - a.id)
            } else
            {
            return;
        }

        setShinobi(sortedShinobi)
        console.log(shinobi)
    }

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    }

    return (
        <div>
            <div className="head-shinobi">
               <p>Магазин шиноби</p>
            </div>
            <div className="add-shinobi">
                <button onClick={toggleDropdown}>Добавить шиноби</button>
                {isDropdownOpen && (<div className="dropdown">
                    <AddShinobi setZhopa={setZhopa}
                    zhopa={zhopa}/>
                </div>)}

                <div className="sort">
                    <select onChange={handleSortShinobi} defaultValue="">
                    <option value="" disabled hidden>Сортировать по</option>
                    <option value="price">возрастанию цены</option>
                    <option value="priceLow">убыванию цены</option>
                    <option value="power">возрастанию силы</option>
                    <option value="powerLow">уменьшению силы</option>
                    <option value="id">сначала старые</option>
                    <option value="idLow">сначала новые</option>
                </select>
                </div>
            </div>


            <div className="main-container">
                <div className="shinobi-container">
                    {currentItems.length > 0 ? (
                        currentItems.map(e => (
                            <div key={e.id} className="shinobi-item">
                                <img src={e.image} alt="" />
                                <div className="shinobi-name">{e.name}</div>
                                <div>Price: {e.price}</div>
                                <div>Date: {e.createdAt}</div>
                                <Link to={`shinobi/${e.id}`}>Redirect</Link>
                                <button onClick={() => deleteShinobi(e.id)}>Delete</button>
                            </div>
                        ))
                    ) : (
                        <p>Загрузка...</p>
                    )}
                </div>
            </div>
            <div className="back">
            <button onClick={handlePrevPage} disabled={currentPage === 1}>
                Назад
            </button>
            <span>{` Страница ${currentPage} из ${totalPages}`}</span>
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
                Вперед
            </button>
            </div>
            <ScrollToTopButton />



        </div>
    );
}

export default App;


// просортировать shinobi by