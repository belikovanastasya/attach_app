
import ReactDom from "react-dom";
import { BrowserRouter as Router } from 'react-router-dom';
import { Header } from "./parts/Header";
import { Footer } from "./parts/Footer";
import { Pages } from './pages/Pajes'
import './appComponent.sass'


export class App extends Component {
  constructor() {
    super();
    this.state = {
      islogin: false
    }
  }
  setLoginState = (login) => {
    this.setLoginState({login})
  }
  render() {
    const { login } = this.state
    return (
      <div className="wrapper">
        <Header login={login} />
        <Pages login={login} />
        <Footer />
      </div>
    );
  }
}

