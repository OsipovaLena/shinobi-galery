import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App.jsx";
import {Cards} from "./Cards.jsx";
import {AddShinobi} from "./AddShinobi.jsx"
import {useParams} from "react-router-dom";


export const AppRouter = () => {

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/main" element={<App />}/>
            <Route path="/shinobi/:id" element={<Cards />}/>
            <Route path="/add" element={<AddShinobi />}/>
        </Routes>
    </BrowserRouter>
    )
}

