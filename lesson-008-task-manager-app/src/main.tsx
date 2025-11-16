import {createRoot} from 'react-dom/client';
import './index.css';

import {Header} from './components/Header.tsx';
import {PageTitle} from './components/PageTitle.tsx';
import {TaskList} from './components/TaskList.tsx';
import {TaskDetails} from './components/TaskDetails.tsx';
import {Footer} from './components/Footer.tsx';

const rootEl = document.getElementById('root');
const reactRoot = createRoot(rootEl!);

reactRoot.render(
    <>
        <MainPage/>
    </>
);

function MainPage() {
    return <div>
        <Header />
        <PageTitle />
        <div style={{display: 'flex', gap: '30px'}}>
            <TaskList />
            <TaskDetails />
        </div>
        <Footer />
    </div>;
}
