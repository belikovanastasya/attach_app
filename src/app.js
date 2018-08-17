import ReactDom from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { App } from './appComponent';
import { Provider } from 'react-redux';
import { store } from './store';




ReactDom.render(App, document.getElementById('app'));