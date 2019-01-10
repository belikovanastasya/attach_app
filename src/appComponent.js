import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { Header } from './parts/Header';
import { Footer } from './parts/Footer';
import { Pages } from './pages/Pajes';
import { FlashMessagesList } from './components/FlashMessagesList';
import { checkUser } from './servises';
import { setUser } from './store';
import { setAuthToken } from './servises/setAuthToken';
import './appComponent.sass';

export class AppComponent extends Component {
  setLoginState = (user) => {
    this.props.dispatch(setUser(user));
  }
  componentDidMount() {
    const token = setAuthToken.getToken();
    checkUser(token)
      .then(res => this.props.dispatch(setUser(res.user)))
      .catch(err => console.log('Can\'t login', err));
  }
  render() {
    return (
      <div className="wrapper">
        <Header />
        <section className="inner-section">
          <FlashMessagesList />
          <Pages login={this.props.user} />
        </section>
        <Footer />
      </div>
    );
  }
}

const mapStoreToProps = ({ user, flashMessages }) => ({ user, flashMessages });

export const App = withRouter(connect(mapStoreToProps)(AppComponent));

