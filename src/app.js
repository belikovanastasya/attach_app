import ReactDom from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes, faKey} from '@fortawesome/free-solid-svg-icons';
library.add(faTimes, faKey);
import { App } from './appComponent';
import { store } from './store';


const Root = () => (<Router><App /></Router>);
const MainApp = <Provider store={store}><Root /></Provider>;

ReactDom.render(MainApp, document.getElementById('app'));
