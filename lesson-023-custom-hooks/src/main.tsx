import {createRoot} from 'react-dom/client'
import App from './App.tsx'
import {TextPage, TogglePage} from "./homework.tsx";

createRoot(document.getElementById('root')!).render(
    <>
        <App/>
        <TogglePage/>
        <TextPage/>
    </>
)
