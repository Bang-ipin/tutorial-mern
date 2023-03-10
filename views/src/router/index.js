import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";

import PublicRoute from "../middleware/PublicRoute";
import Home from "../pages/home";
import Profile from "../pages/profile";
import User from "../pages/user";

const router = createBrowserRouter([
    {
        path: "/",
        element: <PublicRoute />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/profile",
                element: <Profile />,
            },
            {
                path: "/user",
                element: <User />,
            },
        ],
    },
]);

const Router = () => {
    return (
        <RouterProvider router={router} />
    )
}

export default Router

// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import PublicRoute from "../middleware/PublicRoute";
// import Home from "../pages/home";
// import Profile from "../pages/profile";
// import User from "../pages/user";
// const Router = () => {
//     return (
//         <BrowserRouter>
//             <Routes>
//                 <Route path="/" element={<PublicRoute />} >
//                     <Route path="/" element={<Home />} />
//                     <Route path="/profile" element={<Profile />} />
//                     <Route path="/user" element={<User />} />
//                 </Route>
//             </Routes>
//         </BrowserRouter>
//     )
// }
// export default Router