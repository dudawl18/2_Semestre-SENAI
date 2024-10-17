import { createBrowserRouter } from "react-router-dom"; 
import Home from "../pages/Home";
import Contato from "../pages/Contato";
import Generica from "../pages/Generica";
import Final from "../pages/Final";
import Dragoes from "../pages/Dragoes";
import Numeros712 from "../pages/Numeros712";
import Numero713 from "../pages/Numero713";

const router = createBrowserRouter([
    {path: "/", element: <Home />},
    {path: "/contato", element: <Contato />},
    {path: "/generica", element: <Generica />},
    {path: "/final", element: <Final />},
    {path: "/dragoes", element: <Dragoes />},
    {path: "/exercicio712", element: <Numeros712 />},
    {path: "/numPares", element: <Numero713 />}
])

export default router;
