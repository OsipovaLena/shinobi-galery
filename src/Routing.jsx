import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "./App.jsx";
import {Test} from "./Test";
import {useParams} from "react-router-dom";


export const AppRouter = () => {

    return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />}/>
            <Route path="/main" element={<App />}/>
            <Route path="/shinobi/:id" element={<Test />}/>
        </Routes>
    </BrowserRouter>
    )
}

