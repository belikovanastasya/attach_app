import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faEdit } from '@fortawesome/free-solid-svg-icons';
import { App } from './appComponent';
import { store } from './store';

library.add(faTimes, faEdit);


const Root = () => (<Router><App /></Router>);
const MainApp = <Provider store={store}><Root /></Provider>;

ReactDom.render(MainApp, document.getElementById('app'));
