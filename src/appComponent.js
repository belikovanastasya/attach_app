
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
      islogin: true
    }
  }
  setLoginState = (login) => {
    this.setState({ islogin: login })
  }
  render() {
    const { islogin } = this.state
    return (
      <div className="wrapper">
        <Header login={islogin} setLoginState={this.setLoginState} />
        <Pages login={islogin} setLoginState={this.setLoginState} />
        <Footer />
      </div>
    );
  }
}

