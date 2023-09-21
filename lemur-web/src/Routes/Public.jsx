import { Route, Routes } from "react-router-dom"
import Home from "../Pages/Home"

function Public(){

    return(
        <Routes>
            <Route path='/' element={<Home />} />
        </Routes>
    )

}

export default Public