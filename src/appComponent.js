import { connect } from 'react-redux';
import { Header } from "./parts/Header";
import { Footer } from "./parts/Footer";
import { Pages } from './pages/Pajes';
import { checkUser } from './servises';
import { setUser} from './store';
import { withRouter} from 'react-router-dom'
import './appComponent.sass';

export class AppComponent extends Component {

  setLoginState = (user) => {
    this.props.dispatch(setUser(user));
  }
  componentDidMount(){
    checkUser()
    .then(user => this.props.dispatch(setUser(user)))
    .catch((err) => console.log('Can\'t login', err))
  }

  render() {

    const { islogin } = this.props
    return (
      <div className="wrapper">
        <Header/>
        <Pages login={this.props.user} />
        <Footer />
      </div>
    );
  }
}

const mapStoreToProps = ({user}) =>({user})

export const App = withRouter(connect(mapStoreToProps)(AppComponent))

