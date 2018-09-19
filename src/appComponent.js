
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
      user: null
    }
  }
  setLoginState = (user) => {
    this.setState({ user });
  }
  componentDidMount(){
    fetch('http://localhost:8086/public/checkUser', {
    method: 'GET',
    credentials: 'include',
  })
  .then(data => data.json())
  .then(data => this.setLoginState(data))
  .catch((err) => console.log('Can\'t login', err))
  }

  render() {

    const { islogin } = this.state
    return (
      <div className="wrapper">
        <Header
        user={this.state.user}
        setLoginState={this.setLoginState}
         />
        <Pages setLoginState={this.setLoginState} login={this.state.user} />
        <Footer />
      </div>
    );
  }
}

