import {createRoot} from 'react-dom/client';
import './index.css';

import {MainPage} from './components/MainPage.tsx';

const rootEl = document.getElementById('root');
const reactRoot = createRoot(rootEl!);

reactRoot.render(
    <>
        <MainPage/>
    </>
);
