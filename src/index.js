import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { ApptContainer } from 'react-hot-loader';
import { HashRouter } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';

const render = (Component) => {
    ReactDOM.render(
    <ApptContainer>
        <HashRouter>
            <Component/>
        </HashRouter>
    </ApptContainer>, 
    document.getElementById('root'));
};

render(App);
/*eslint-disable */
if (module.hot){
    module.hot.accept('./compnents/App', () =>{
    render(App)
    })
}
/*eslint-disable */

serviceWorker.unregister();
