import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router";
import Home from "./components/Home.tsx";


const router = createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<App />}>
        <Route path="/" element={<Home />} />
        <Route path="create" element={<Home />} />
    </Route>,
));

createRoot(document.getElementById('root')!).render(
    <RouterProvider router={router} />
)
