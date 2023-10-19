import Navigate from "../../routes/Navigate";
import { Outlet } from "react-router-dom"
import Footer from "../Footer";
import ImagenInicio from "../Ima";

const Layout = () => {
    return(
        <div>
            <Navigate/>
            <ImagenInicio/>
            <Outlet/>
            <Footer/>
        </div>
    )
}

export default Layout