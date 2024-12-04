import {AddShinobi} from "../AddShinobi.jsx";

export const AddButton = ({ isDropdownOpen, setIsDropdownOpen,addedShinobi, setAddedShinobi }) => {

    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };
    return (
        <div>
        <button onClick={toggleDropdown}>Добавить шиноби</button>
    {isDropdownOpen && (<div className="dropdown">
        <AddShinobi setAddedShinobi={setAddedShinobi}
                    addedShinobi={addedShinobi}/>
    </div>)}
        </div>
    );
};
