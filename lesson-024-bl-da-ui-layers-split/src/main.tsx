import {createRoot} from 'react-dom/client'
import {Counter, CounterPage} from "./user-interface/ui.tsx";

createRoot(document.getElementById('root')!).render(
    <>
        <Counter/>
        <hr/>
        <CounterPage/>
    </>
)
