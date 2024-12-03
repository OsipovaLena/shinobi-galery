import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import { AddShinobi } from "./AddShinobi";
import s from './App.module.css'
import { ScrollToTopButton } from "./components/ScrollToTopButton.jsx";
import {Header} from "./components/Header";
import {Pages} from "./components/Pages";
import {AddButton} from "./components/AddButton";
import {SortedShinobi} from "./components/SortedShinobi";
import {AllCards} from "./components/AllCards";


function App() {
    const [shinobi, setShinobi] = useState([]);
    const [addedShinobi, setAddedShinobi] = useState(1);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false)
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 3;


    return (
        <div>
            <Header />
            <div className={s.addShinobi}>
                <AddButton
                    isDropdownOpen={isDropdownOpen}
                    setIsDropdownOpen={setIsDropdownOpen}
                    addedShinobi={addedShinobi}
                    setAddedShinobi={setAddedShinobi}
                />
                <SortedShinobi
                shinobi={shinobi}
                setShinobi={setShinobi}
                />
            </div>

            <AllCards
                setShinobi={setShinobi}
                addedShinobi={addedShinobi}
                shinobi={shinobi}
                currentPage={currentPage}
                itemsPerPage={itemsPerPage}
            />

            <Pages
                shinobi={shinobi}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                itemsPerPage={itemsPerPage}
            />
            <ScrollToTopButton />

        </div>
    );
}

export default App;


// просортировать shinobi by