
import ReactDom from "react-dom";
import { Header } from "./parts/Header";
import { Footer } from "./parts/Footer";
import { Main } from './parts/Main'
import './appComponent.sass'



export const App = (
  <div className="wrapper">
    <Header />
    <Main />
    <Footer />
  </div>
);
