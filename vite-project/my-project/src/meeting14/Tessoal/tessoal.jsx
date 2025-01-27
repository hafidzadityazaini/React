import { createBrowserRouter, RouterProvider, useParams } from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <DetaiProduct/>
    },
    {
        path: "/:id",
        element: <DetaiProduct/>
    },
])

function DetaiProduct() {
    const { id } = useParams();
    return (
        <div>
            <h1>Detail Product</h1>
            <p>ID Product: {id}</p>
        </div>
    )
}

function Nguwawor() {
    return <RouterProvider router={router}/>;
}

export default Nguwawor