import {Routes, Route} from "react-router-dom";
import Inicio from "../views/Inicio";
import Nosotros from "../views/Nosotros";
import Menu from "../views/Menu";
import Layout from "../components/Layout/Layout";


const AppRoutes = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Inicio />}/>
                    <Route path="/menu" element={<Menu />}/>
                    <Route path="/Nosotros" element={<Nosotros />}/>
                </Route>
            </Routes>
        </>
    )
}

export default AppRoutes