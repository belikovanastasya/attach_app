
import ReactDom from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from "./parts/Header";
import { Footer } from "./parts/Footer";
import { Main } from './parts/Main'
import { Pages } from './pages/Pajes'
import './appComponent.sass'


export const App = () => (
  <div className="wrapper">
    <Header />
    <Pages />
    <Footer />
  </div>
);
