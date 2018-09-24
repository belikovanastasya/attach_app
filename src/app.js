import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './appComponent';
import { Provider } from 'react-redux';
import { store } from './store'


const Root = () => (<Router><App /></Router>);
const MainApp = <Provider store={store}><Root /></Provider>

ReactDom.render(MainApp, document.getElementById('app'));
