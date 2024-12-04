import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App.jsx";
import {ShinobiCard} from "./components/ShinobiCard.jsx";
import {AddShinobi} from "./AddShinobi.jsx";

export const AppRouter = () => {

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/shinobi-galery" element={<App />}/>
            <Route path="/shinobi-galery/shinobi/:id" element={<ShinobiCard />}/>
            <Route path="/add" element={<AddShinobi />}/>
        </Routes>
    </BrowserRouter>
    );
};
