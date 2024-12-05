import {AddShinobi} from "../AddShinobi.jsx";
import s from '../App.module.css'

export const AddButton = ({ isDropdownOpen, setIsDropdownOpen,addedShinobi, setAddedShinobi }) => {

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div>
        <button onClick={toggleDropdown}>Добавить шиноби</button>
    {isDropdownOpen && (<div className={s.dropdown}>
        <AddShinobi setAddedShinobi={setAddedShinobi}
                    addedShinobi={addedShinobi}/>
    </div>)}
        </div>
    );
};
