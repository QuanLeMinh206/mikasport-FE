import { createBrowserRouter, RouterProvider } from "react-router-dom";
import adminRoutes from "@/routes/adminRoutes";
import userRoutes from "@/routes/userRoutes";

const router = createBrowserRouter([...userRoutes, ...adminRoutes]);

function App() {
    return <RouterProvider router={router} />;
}

export default App;
