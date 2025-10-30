import {createRoot} from 'react-dom/client';
import './index.css';
import {App} from './App.tsx';
// import {Homework004} from './App.tsx';

const rootEl = document.getElementById('root');
const reactRoot = createRoot(rootEl!);

reactRoot.render(
    <>
        <App/>
    </>
);