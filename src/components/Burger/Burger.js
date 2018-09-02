import { Navigation } from '../../parts/Navigation';
import './burger.sass';


export class Burger extends React.Component {
  constructor() {
    super();
    this.state = {addClass: false, hidden: true};
  }
  toggle = () => {
    this.setState({ addClass: !this.state.addClass, hidden: !this.state.hidden });
  }
  updateData = () => {
    this.setState({addClass: false, hidden: true})
  }

  render() {
    return (
      <React.Fragment>
        <div className={`burger ${this.state.addClass ? "open" : null}`} onClick={this.toggle}>
          <div className="circle circle_burger"></div>
          <span className="top"></span>
          <span className="middle"></span>
          <span className="bot"></span>
        </div>
        <Navigation hidden={!this.state.hidden} updateData={this.updateData} />
      </React.Fragment>
    );
  }
}

