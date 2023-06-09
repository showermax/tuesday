import React from 'react';
import './index.css';
// import App from './0404/App';
// import App from './1104/App';
// import App from './1104-2/App';
// import App from './1804/App';
import App from './2004 - nativeJs/App';
import * as serviceWorker from './serviceWorker';
import { createRoot } from 'react-dom/client';

const container  = document.getElementById('root') as HTMLElement
const root = createRoot(container);
root.render(<App />);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

