import { createBrowserRouter } from "react-router-dom"
import App from "../App"
import { HomePage } from "../pages/home/home-page"

export const router = createBrowserRouter([
    {
        element: <App/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            }
        ]
    }
    

])